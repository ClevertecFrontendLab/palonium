import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Grid, Heading } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router';

import { RecipeCard } from '~/components/ui/RecipeCard/RecipeCard';
import { recipesData } from '~/contants/JuicyRecipeCardData';

export const RecipesJuicyMainSection: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/juicy');
    };

    return (
        <Box my={10}>
            <Flex justify='space-between'>
                <Heading mb={4} size={{ base: 'lg', md: 'xl', xl: '2xl' }} fontWeight='500'>
                    Самое сочное
                </Heading>

                <Button
                    bg='lime.400'
                    color='black'
                    rightIcon={<ArrowForwardIcon />}
                    size={{ md: 'md', lg: 'lg' }}
                    display={{ base: 'none', md: 'flex' }}
                    onClick={handleNavigate}
                    data-test-id='juiciest-link'
                >
                    Вся подборка
                </Button>
            </Flex>

            <Grid
                templateColumns={{
                    base: 'none',
                    sm: 'repeat(2, 1fr)',
                    md: 'none',
                    xl: 'repeat(2, 1fr)',
                }}
                gap={{ base: '6', md: '4' }}
            >
                {recipesData.slice(0, 4).map((recipe) => (
                    <RecipeCard key={recipe.id} data={recipe} />
                ))}
            </Grid>

            <Button
                bg='lime.400'
                color='black'
                rightIcon={<ArrowForwardIcon />}
                size='md'
                display={{ base: 'flex', md: 'none' }}
                mx='auto'
                mt={3}
                onClick={handleNavigate}
                data-test-id='juiciest-link-mobile'
            >
                Вся подборка
            </Button>
        </Box>
    );
};
