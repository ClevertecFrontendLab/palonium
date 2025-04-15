import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

import { categories } from '~/config/categoryConfig';

type Props = {
    activeCategory: string;
    onCategorySelect: (slug: string) => void;
};

const HorizontalMenu: React.FC<Props> = ({ activeCategory, onCategorySelect }) => (
    <Box
        overflowX='auto'
        px={2}
        css={{ scrollbarWidth: 'none' }}
        sx={{ '&::-webkit-scrollbar': { display: 'none' } }}
    >
        <Flex as='nav' py={2} minW='max-content' justify='center'>
            {categories.map(({ slug, label }) => {
                const isActive = slug === activeCategory;
                return (
                    <Text
                        key={slug}
                        fontWeight='500'
                        color={isActive ? 'lime.600' : 'lime.800'}
                        borderBottom={isActive ? '2px solid' : 'none'}
                        borderColor={isActive ? 'lime.600' : 'transparent'}
                        py={2}
                        px={4}
                        cursor='pointer'
                        onClick={() => onCategorySelect(slug)}
                    >
                        {label}
                    </Text>
                );
            })}
        </Flex>
    </Box>
);

export default HorizontalMenu;
