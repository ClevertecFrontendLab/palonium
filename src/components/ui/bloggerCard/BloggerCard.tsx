import { Avatar, Box, Flex, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';

import { Blogger } from '~/contants/BloggersCardData';

interface BloggerCardProps {
    blogger: Blogger;
}

export const BloggerCard: FC<BloggerCardProps> = ({ blogger }) => (
    <Box bg='white' p={4} borderRadius={8}>
        <VStack align='start' spacing={{ md: 4, xl: 7 }}>
            <Flex gap={3}>
                <Avatar name={blogger.name} src={blogger.avatar} />
                <Box>
                    <Text
                        size={{ base: 'md', md: 'lg' }}
                        fontWeight='medium'
                        noOfLines={1}
                        display='-webkit-box'
                        wordBreak='break-all'
                    >
                        {blogger.name}
                    </Text>
                    <Text fontSize={{ base: 'xs', md: 'sm' }} color='blackAlpha.700'>
                        {blogger.username}
                    </Text>
                </Box>
            </Flex>
            <Text
                fontSize='sm'
                noOfLines={3}
                display='-webkit-box'
                sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    wordBreak: 'break-word',
                }}
            >
                {blogger.quote}
            </Text>
        </VStack>
    </Box>
);
