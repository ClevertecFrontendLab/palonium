import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

import { CarouselCard } from '~/components/ui/CarouselCard/CarouselCard';
import { carouselCardData } from '~/contants/CarouselCardData';

export const RecipesCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);

    const gap = 16;

    const cardWidth = useBreakpointValue({
        base: 158,
        md: 277,
        xl: 322,
    });

    const isMobile = useBreakpointValue({ base: true, md: false });

    useEffect(() => {
        const updateCardsPerView = () => {
            if (containerRef.current && cardWidth && !isMobile) {
                const containerWidth = containerRef.current.offsetWidth;
                const totalCardWidth = cardWidth + gap;
                const count = Math.floor(containerWidth / totalCardWidth);
                setCardsPerView(count);
            }
        };

        updateCardsPerView();
        window.addEventListener('resize', updateCardsPerView);
        return () => window.removeEventListener('resize', updateCardsPerView);
    }, [cardWidth, isMobile]);

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        const maxIndex = carouselCardData.length - cardsPerView;
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const translateX = -(currentIndex * ((cardWidth ?? 322) + gap));

    return (
        <Box>
            <Heading fontSize={{ base: '2xl', md: '4xl', xl: '5xl' }} fontWeight='500' my={6}>
                Новые рецепты
            </Heading>
            <Box position='relative' ref={containerRef} width='100%'>
                <IconButton
                    icon={<ArrowBackIcon color='white' />}
                    aria-label='Назад'
                    onClick={handlePrev}
                    variant='solid'
                    position='absolute'
                    left='-8px'
                    top='40%'
                    zIndex={10}
                    bg='black'
                    borderRadius={6}
                    display={{ base: 'none', md: 'flex' }}
                />
                <Box
                    overflowX={{ base: 'auto', md: 'hidden' }}
                    css={{
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                        '-ms-overflow-style': 'none',
                        'scrollbar-width': 'none',
                    }}
                >
                    <Flex
                        gap={`${gap}px`}
                        width='fit-content'
                        transform={{ base: 'none', md: `translateX(${translateX}px)` }}
                        transition={{ base: 'none', md: 'transform 0.5s ease-in-out' }}
                    >
                        {carouselCardData.map((card, index) => (
                            <Box
                                key={index}
                                minW={`${cardWidth}px`}
                                maxW={`${cardWidth}px`}
                                flexShrink={0}
                            >
                                <CarouselCard {...card} />
                            </Box>
                        ))}
                    </Flex>
                </Box>
                {/* Правая кнопка */}
                <IconButton
                    icon={<ArrowForwardIcon color='white' />}
                    aria-label='Вперёд'
                    onClick={handleNext}
                    variant='solid'
                    position='absolute'
                    right='-8px'
                    top='40%'
                    zIndex={10}
                    bg='black'
                    borderRadius={6}
                    display={{ base: 'none', md: 'flex' }} // скрыть на мобилках
                />
            </Box>
        </Box>
    );
};
