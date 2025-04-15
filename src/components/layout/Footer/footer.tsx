import { SearchIcon } from '@chakra-ui/icons';
import { Box, HStack } from '@chakra-ui/react';

import avatar from '~/assets/avatar.png';
import EditIcon from '~/components/ui/icons/EditIcon/EditIcon-dark';
import MainIcon from '~/components/ui/icons/main-icon/PeopleIcon';

import { FooterButton } from './FooterButton';

export const Footer = () => (
    <Box
        bgColor='lime.50'
        p={4}
        position='fixed'
        bottom={0}
        width='100%'
        zIndex={10}
        data-test-id='footer'
    >
        <HStack justify='space-around'>
            <FooterButton icon={<MainIcon boxSize={5} />} label='Главная' isActive />
            <FooterButton icon={<SearchIcon boxSize={5} />} label='Поиск' />
            <FooterButton icon={<EditIcon boxSize={5} />} label='Записать' />
            <FooterButton isAvatar avatarSrc={avatar} label='Мой профиль' />
        </HStack>
    </Box>
);
