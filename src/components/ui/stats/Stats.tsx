// RecipeStats.tsx
import { StarIcon, ViewIcon } from '@chakra-ui/icons';
import { HStack, IconButton, Text } from '@chakra-ui/react';

type Props = {
    views: number;
    bookmarks: number;
};

export const Stats: React.FC<Props> = ({ views, bookmarks }) => (
    <HStack spacing={4}>
        <HStack spacing={1}>
            <IconButton icon={<ViewIcon />} variant='ghost' size='sm' aria-label='Просмотры' />
            <Text fontSize='sm'>{views}</Text>
        </HStack>
        <HStack spacing={1}>
            <IconButton icon={<StarIcon />} variant='ghost' size='sm' aria-label='Закладки' />
            <Text fontSize='sm'>{bookmarks}</Text>
        </HStack>
    </HStack>
);
