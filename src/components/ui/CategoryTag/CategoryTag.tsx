import { Image, Tag } from '@chakra-ui/react';
import React from 'react';

import { CategoryTagInfo } from '~/contants/CategoryTagsData';

interface CategoryTagProps {
    category: CategoryTagInfo;
    colorSchemeOverride?: string;
}

export const CategoryTag: React.FC<CategoryTagProps> = ({ category, colorSchemeOverride }) => (
    <Tag
        bgColor={colorSchemeOverride || category.colorScheme}
        fontSize='sm'
        fontWeight='400'
        display='flex'
        alignItems='center'
        gap={{ base: 0.5, md: 2 }}
        px={{ base: 1, md: 2 }}
    >
        <Image src={category.icon} alt={category.label} boxSize='16px' />
        {category.label}
    </Tag>
);
