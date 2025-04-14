import { Box, Card, CardBody, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';

import { categoryTags } from '~/contants/CategoryTagsData';

import { CategoryTag } from '../CategoryTag/CategoryTag';
import FavIcon from '../icons/FavIcon/FavIcon';
import ViewIcon from '../icons/ViewIcon/ViewIcon';

type CarouselCardProps = {
    title: string;
    description: string;
    views?: number;
    bookmarks?: number;
    image: string;
    categoryId: string;
};

export const CarouselCard: React.FC<CarouselCardProps> = ({
    title,
    description,
    views,
    bookmarks,
    image,
    categoryId,
}) => {
    const category = categoryTags[categoryId];

    return (
        <Card
            maxW={{ sm: '158px', md: '277px', xl: '322px' }}
            w='100%'
            borderRadius={8}
            overflow='hidden'
        >
            <Box position='relative'>
                <Image src={image} alt={title} objectFit='cover' w='100%' />
                {category && (
                    <Box
                        position='absolute'
                        top={2}
                        left={2}
                        display={{ base: 'block', md: 'none' }}
                    >
                        <CategoryTag category={category} colorSchemeOverride='lime.150' />
                    </Box>
                )}
            </Box>

            <CardBody>
                <Stack>
                    <Heading
                        fontSize={{ base: '16px', md: '18px', xl: '20px' }}
                        noOfLines={{ base: 2, md: 1 }}
                        fontWeight='500'
                    >
                        {title}
                    </Heading>
                    <Text
                        fontSize='sm'
                        noOfLines={3}
                        display={{ base: 'none', md: '-webkit-box' }}
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            wordBreak: 'break-word',
                        }}
                    >
                        {description}
                    </Text>

                    <HStack justify='space-between' pt={2}>
                        {category && (
                            <Box display={{ base: 'none', md: 'block' }}>
                                <CategoryTag category={category} colorSchemeOverride='lime.150' />
                            </Box>
                        )}
                        <HStack>
                            {typeof views === 'number' && (
                                <HStack spacing={1}>
                                    <FavIcon />
                                    <Text fontSize='sm'>{views}</Text>
                                </HStack>
                            )}
                            {typeof bookmarks === 'number' && (
                                <HStack spacing={1}>
                                    <ViewIcon />
                                    <Text fontSize='sm'>{bookmarks}</Text>
                                </HStack>
                            )}
                        </HStack>
                    </HStack>
                </Stack>
            </CardBody>
        </Card>
    );
};
