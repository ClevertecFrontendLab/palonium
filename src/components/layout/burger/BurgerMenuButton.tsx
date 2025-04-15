import { HamburgerIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

const BurgerMenuButton = () => (
    <IconButton aria-label='Открыть меню' icon={<HamburgerIcon />} variant='ghost' size='lg' />
);

export default BurgerMenuButton;
