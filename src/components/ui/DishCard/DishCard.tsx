import { Button, Card, Flex, HStack, Text, VStack } from '@chakra-ui/react';

import { CategoryTag } from '~/components/ui/CategoryTag/CategoryTag';
import { categoryTags } from '~/contants/CategoryTagsData';

import FavIcon from '../icons/FavIcon/FavIcon';
import ViewIcon from '../icons/ViewIcon/ViewIcon';

type DishCardProps = {
    title: string;
    description: string;
    category: string; // теперь это ID (например, "mains", "kids")
    likes: number;
    views: number;
};

export const DishCard = ({ title, description, category, views, likes }: DishCardProps) => {
    const categoryInfo = categoryTags[category];

    return (
        <Card
            maxW={{
                base: '100%',
                sm: '232px',
                md: '282px',
                xl: '322px',
            }}
            w='100%'
            transition='box-shadow 0.2s ease'
            _hover={{
                boxShadow:
                    '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
            }}
            p={{ base: 3, md: 4, xl: 6 }}
        >
            <VStack align='start' spacing={2}>
                <Text
                    fontWeight='500'
                    fontSize={{ base: 'md', md: 'xl' }}
                    noOfLines={1}
                    sx={{ wordBreak: 'break-all' }}
                >
                    {title}
                </Text>

                <Text
                    fontSize='sm'
                    color='gray.600'
                    mb={6}
                    noOfLines={3}
                    sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        wordBreak: 'break-word',
                    }}
                >
                    {description}
                </Text>

                <Flex pt={2} justify='space-between' w='100%' align='center'>
                    {categoryInfo && (
                        <CategoryTag category={categoryInfo} colorSchemeOverride='lime.50' />
                    )}

                    <HStack fontSize='sm' color='gray.500' columnGap={2} ml='auto'>
                        <Button
                            leftIcon={<FavIcon boxSize='12px' />}
                            bgColor='white'
                            size='xs'
                            color='lime.600'
                            p={0}
                        >
                            {likes}{' '}
                        </Button>
                        <Button
                            leftIcon={<ViewIcon boxSize='12px' />}
                            bgColor='white'
                            size='xs'
                            color='lime.600'
                            p={0}
                        >
                            {views}
                        </Button>
                    </HStack>
                </Flex>
            </VStack>
        </Card>
    );
};
