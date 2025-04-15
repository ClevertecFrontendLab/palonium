import { Box, Button, Grid } from '@chakra-ui/react';
import React from 'react';

import { RecipeCard } from '~/components/ui/RecipeCard/RecipeCard';
import { recipesData } from '~/contants/JuicyRecipeCardData';

export const RecipesJuicySection: React.FC = () => (
    <Box my={10}>
        <Grid
            templateColumns={{
                base: 'none',
                sm: 'repeat(2, 1fr)',
                md: 'none',
                xl: 'repeat(2, 1fr)',
            }}
            gap={{ base: '6', md: '4' }}
        >
            {recipesData.map((recipe) => (
                <RecipeCard key={recipe.id} data={recipe} />
            ))}
        </Grid>
        <Button bg='lime.400' color='black' size='md' display='flex' mx='auto' mt={3}>
            Загрузить ещё
        </Button>
    </Box>
);
