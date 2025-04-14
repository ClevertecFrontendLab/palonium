import {
    Avatar,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Flex,
    HStack,
    IconButton,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';
import React from 'react';

import { CategoryTag } from '~/components/ui/CategoryTag/CategoryTag';
import { categoryTags } from '~/contants/CategoryTagsData';
import { JuicyRecipeCardData } from '~/contants/JuicyRecipeCardData';

import FavIcon from '../icons/FavIcon/FavIcon';

interface RecipeCardProps {
    data: JuicyRecipeCardData;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ data }) => {
    const category = categoryTags[data.categoryId];

    return (
        <Card
            direction='row'
            overflow='hidden'
            variant='outline'
            borderRadius={8}
            _hover={{ boxShadow: 'md' }}
            cursor='pointer'
        >
            <Box
                position='relative'
                w={{ base: '50%', md: 'auto' }}
                h={{ base: '100%', md: 'auto' }}
                flexShrink={0}
            >
                <Box position='relative'>
                    <Image objectFit='cover' w='100%' h='100%' src={data.image} alt={data.title} />
                    {category && (
                        <Box
                            position='absolute'
                            top={2}
                            left={2}
                            display={{ base: 'block', md: 'none' }}
                        >
                            <CategoryTag category={category} colorSchemeOverride='lime.50' />
                        </Box>
                    )}
                </Box>
                {data.recommendedBy && (
                    <Box
                        position='absolute'
                        bottom={2}
                        left={2}
                        bg='lime.150'
                        py={1}
                        px={2}
                        borderRadius='md'
                        display={{ base: 'none', md: 'flex' }}
                        alignItems='center'
                        gap={2}
                        fontSize='sm'
                    >
                        <Avatar size='xs' name={data.recommendedBy} w={4} h={4} />
                        {data.recommendedBy}
                    </Box>
                )}
            </Box>

            <Stack flex='1'>
                <CardBody pt={{ base: 1, md: 5 }} px={{ base: 1, md: 6 }} pb={0}>
                    <Flex justify='space-between' align='center'>
                        {category && (
                            <Box display={{ base: 'none', md: 'block' }}>
                                <CategoryTag category={category} colorSchemeOverride='lime.50' />
                            </Box>
                        )}
                        <HStack spacing={{ base: 0.5, md: 2 }}>
                            <Button
                                variant='chost'
                                size='xs'
                                fontSize={{ base: 'xs', md: 'sm' }}
                                leftIcon={<FavIcon boxSize='12px' />}
                                color='lime.600'
                                p={1}
                            >
                                {data.views}
                            </Button>
                            <Button
                                variant='chost'
                                size='xs'
                                fontSize={{ base: 'xs', md: 'sm' }}
                                leftIcon={<FavIcon boxSize='12px' />}
                                color='lime.600'
                                p={1}
                            >
                                {data.bookmarks}
                            </Button>
                        </HStack>
                    </Flex>

                    <Text
                        fontSize={{ base: 'md', md: 'xl' }}
                        fontWeight='500'
                        mt={0}
                        mb={{ base: 5, md: 0 }}
                        noOfLines={1}
                        wordBreak='break-all'
                    >
                        {data.title}
                    </Text>
                    <Text
                        fontSize='sm'
                        mt={2}
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
                        {data.description}
                    </Text>
                </CardBody>

                <CardFooter pt={0} pb={{ base: 1, md: 5 }}>
                    <Flex justify='flex-end' w='100%'>
                        <HStack spacing={3}>
                            {/* Только иконка на base */}
                            <IconButton
                                aria-label='Сохранить'
                                icon={<FavIcon boxSize='14px' />}
                                size='xs'
                                variant='outline'
                                bgColor='whiteAlpha.100'
                                color='blackAlpha.800'
                                borderColor='blackAlpha.800'
                                borderRadius={6}
                                display={{ base: 'inline-flex', md: 'none' }}
                            />

                            {/* Полная кнопка начиная с md */}
                            <Button
                                leftIcon={<FavIcon boxSize='14px' />}
                                size='sm'
                                variant='outline'
                                bgColor='whiteAlpha.100'
                                color='blackAlpha.800'
                                borderColor='blackAlpha.800'
                                borderRadius={6}
                                display={{ base: 'none', md: 'inline-flex' }}
                            >
                                Сохранить
                            </Button>

                            <Button
                                size={{ base: 'xs', md: 'sm' }}
                                color='white'
                                bgColor='blackAlpha.900'
                                borderRadius={6}
                            >
                                Готовить
                            </Button>
                        </HStack>
                    </Flex>
                </CardFooter>
            </Stack>
        </Card>
    );
};
