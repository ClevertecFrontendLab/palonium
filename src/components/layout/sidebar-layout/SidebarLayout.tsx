import { Box, Button, Flex, Text } from '@chakra-ui/react';

import { SidebarMenu } from '~/components/layout/sidebar/Sidebar';
import LeftIcon from '~/components/ui/icons/LeftIcon';

export const SidebarLayout: React.FC = () => (
    <Flex direction='column' w='64' h='100%' maxH='100%' bg='white'>
        <Box flex='1' overflow='hidden'>
            <SidebarMenu />
        </Box>

        <Box mx={6} mt={1}>
            <Text fontSize='xs' color='blackAlpha.400' mb={4}>
                Версия программы 03.25
            </Text>
            <Text fontSize='xs' color='blackAlpha.700'>
                Все права защищены,
            </Text>
            <Text fontSize='xs' color='blackAlpha.700'>
                учебный файл,
            </Text>
            <Text fontSize='xs' color='blackAlpha.700' mb={4}>
                ©Клевер Технолоджи, 2025
            </Text>
            <Button variant='ghost' colorScheme='blackAlpha' leftIcon={<LeftIcon />} px={0} mb={8}>
                <Text color='black' fontWeight='semibold'>
                    Выйти
                </Text>
            </Button>
        </Box>
    </Flex>
);
