import { Box, Center, Container, Flex, Heading, Text, VStack } from '@chakra-ui/react';

import FilterButton from '~/components/sections/pageintro/ui/FilterButton/FilterButton';
import SwitchComponent from '~/components/sections/pageintro/ui/Switch/SwitchComponent';

import Search from './Search';
import AllergenSelect from './ui/Select/AllergenSelect';

interface TitleProps {
    title: string;
    description?: string; // добавляем необязательное описание
}

function PageIntro({ title, description }: TitleProps) {
    return (
        <Container maxW='container.lg' py={8}>
            <Center>
                <VStack spacing={4} align='center' w='full'>
                    <Heading
                        as='h1'
                        size='xl'
                        fontSize={{ base: '2xl', md: '5xl' }}
                        textAlign='center'
                    >
                        {title}
                    </Heading>

                    {description && (
                        <Text
                            fontSize={{ base: 'sm', md: 'md' }}
                            textAlign='center'
                            color='blackAlpha.600'
                            maxW='2xl'
                        >
                            {description}
                        </Text>
                    )}

                    <Flex gap={3} w='full' justify='center' flexWrap='wrap'>
                        <FilterButton />
                        <Search />
                    </Flex>

                    <Flex
                        align='center'
                        justify='center'
                        gap={4}
                        flexWrap='nowrap'
                        display={{ base: 'none', md: 'flex' }}
                    >
                        <Flex align='center' minW='max-content' whiteSpace='nowrap'>
                            <Box mr={2}>
                                <SwitchComponent />
                            </Box>
                        </Flex>
                        <AllergenSelect />
                    </Flex>
                </VStack>
            </Center>
        </Container>
    );
}

export default PageIntro;
