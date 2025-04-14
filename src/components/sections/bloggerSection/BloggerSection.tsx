import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';

import { BloggerCard } from '~/components/ui/bloggerCard/BloggerCard';
import { bloggers } from '~/contants/BloggersCardData';

export const BloggersSection = () => (
    <Box bg='lime.300' p={6} mb={10} borderRadius={16}>
        <Flex justify='space-between' align='center' mb={6}>
            <Heading
                size={{ base: '', md: 'md', xl: 'xl' }}
                fontWeight={{ base: '500', xl: '400' }}
            >
                Кулинарные блоги
            </Heading>
            <Flex
                display={{ base: 'none', md: 'flex' }}
                align='center'
                gap={2}
                color='blackAlpha.800'
                fontWeight='medium'
                cursor='pointer'
            >
                <Text size={{ md: 'md', xl: 'lg' }} fontWeight='600'>
                    Все авторы
                </Text>
                <ArrowForwardIcon />
            </Flex>
        </Flex>

        <SimpleGrid columns={{ base: 1, sm: 3 }} gap={{ base: 3, md: 4 }}>
            {bloggers.map((blogger) => (
                <BloggerCard key={blogger.username} blogger={blogger} />
            ))}
        </SimpleGrid>

        <Flex justify='center' mt={6} display={{ base: 'flex', md: 'none' }}>
            <Button size='md' rightIcon={<ArrowForwardIcon />} bgColor='lime.300'>
                Все авторы
            </Button>
        </Flex>
    </Box>
);
