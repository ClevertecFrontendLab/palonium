import { Box, Flex, Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react';

import { DishCard } from '~/components/ui/DishCard/DishCard';
import { DishListItem } from '~/components/ui/DishListItem/DishListItem';
import type { RecipeListItem } from '~/contants/RelevantData';

type DishCardType = {
    title: string;
    description: string;
    category: string;
    likes: number;
    views: number;
};

type RelevantSectionProps = {
    title: string;
    description: string;
    cards: DishCardType[];
    list: RecipeListItem[];
};

export const RelevantSection = ({ title, description, cards, list }: RelevantSectionProps) => (
    <Box px={{ base: 4, md: 6 }} py={{ md: 4, xl: 10 }}>
        <Flex
            direction={{ base: 'column', md: 'row' }}
            justify='space-between'
            gap={{ base: 3, md: 6 }}
            mb={{ base: 4, md: 6 }}
        >
            <Heading as='h2' size={{ base: 'lg', md: 'xl', xl: '2xl' }} fontWeight='500'>
                {title}
            </Heading>
            <Text color='blackAlpha.700' maxW='600px' fontSize='md' fontWeight='500'>
                {description}
            </Text>
        </Flex>

        <Grid
            templateColumns={{ base: '1fr', sm: '2fr 1fr', md: '2fr 1fr', xl: '1fr 1fr' }}
            gap={3}
        >
            <GridItem>
                <Grid templateColumns={{ base: '1fr', sm: '1fr 1fr' }} gap={3}>
                    {cards.map((card, idx) => (
                        <DishCard key={idx} {...card} />
                    ))}
                </Grid>
            </GridItem>
            <GridItem>
                <Stack spacing='12px'>
                    {list.map((item, idx) => (
                        <DishListItem
                            key={idx}
                            title={item.title}
                            icon={item.icon}
                            onClick={() => console.log(`Готовим: ${item.title}`)}
                        />
                    ))}
                </Stack>
            </GridItem>
        </Grid>
    </Box>
);
