import { Avatar, Box, Button, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';

import avatar from '~/assets/avatar.png';

import Breadcrumbs from '../../ui/BreadCrumbs/BreadCrumbs';
import FavIcon from '../../ui/icons/FavIcon/FavIcon';
import PeopleIcon from '../../ui/icons/PeopleIcon/PeopleIcon';
import ViewIcon from '../../ui/icons/ViewIcon/ViewIcon';
import BurgerMenuButton from '../burger/BurgerMenuButton';
import Logo from './Logo';
import LogoIcon from './logo-icon';

const Header: React.FC = () => (
    <Box
        bg='lime.50'
        py={{ base: 4, md: '16px' }}
        px={{ base: 5, md: 4 }}
        boxShadow='sm'
        data-test-id='header'
        w='100%'
    >
        <Flex align='center' justify='space-between' w='100%'>
            <HStack mr={32} display={{ base: 'none', sm: 'flex' }}>
                <Logo />
            </HStack>

            <HStack display={{ base: 'flex', sm: 'none' }}>
                <LogoIcon />
            </HStack>

            <HStack align='center' spacing={2} display={{ base: 'flex', md: 'none' }}>
                <Button
                    size='xs'
                    variant='chost'
                    leftIcon={<FavIcon boxSize='16px' />}
                    color='lime.600'
                >
                    185
                </Button>
                <Button
                    size='xs'
                    variant='chost'
                    leftIcon={<PeopleIcon boxSize='16px' />}
                    color='lime.600'
                >
                    589
                </Button>
                <Button
                    size='xs'
                    variant='chost'
                    leftIcon={<ViewIcon boxSize='16px' />}
                    color='lime.600'
                >
                    587
                </Button>
                <Box>
                    <BurgerMenuButton />
                </Box>
            </HStack>

            <Box
                flex={{ base: '0', md: '1' }}
                textAlign='center'
                display={{ base: 'none', md: 'block' }}
            >
                <Breadcrumbs />
            </Box>
            <HStack spacing={3} display={{ base: 'none', md: 'flex' }}>
                <Avatar size='md' name='Екатерина Константинопольская' src={avatar} />
                <Box>
                    <Text fontSize='lg' fontWeight='500'>
                        Екатерина Константинопольская
                    </Text>
                    <Text fontSize='sm' color='blackAlpha.700'>
                        @bake_and_pie
                    </Text>
                </Box>
            </HStack>
        </Flex>
    </Box>
);

export default Header;
