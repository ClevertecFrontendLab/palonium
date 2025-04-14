// components/sections/aside/Aside.tsx
import { Box, Button, IconButton, Text, VStack } from '@chakra-ui/react';

import EditIcon from '~/components/ui/icons/EditIcon/EditIcon';
import FavIcon from '~/components/ui/icons/FavIcon/FavIcon';
import PeopleIcon from '~/components/ui/icons/PeopleIcon/PeopleIcon';
import ViewIcon from '~/components/ui/icons/ViewIcon/ViewIcon';
const Aside = () => (
    <Box
        as='aside'
        position='fixed'
        right='0'
        top='80px'
        height='calc(100vh - 80px)'
        bg='white'
        zIndex={15}
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        py={4}
        px={2}
        width='240px'
    >
        <VStack spacing={4} align='center' width='100%'>
            <Button
                size='md'
                variant='chost'
                leftIcon={<FavIcon boxSize='16px' />}
                color='lime.600'
            >
                185
            </Button>
            <Button
                size='md'
                variant='chost'
                leftIcon={<PeopleIcon boxSize='16px' />}
                color='lime.600'
            >
                589
            </Button>
            <Button
                size='md'
                variant='chost'
                leftIcon={<ViewIcon boxSize='16px' />}
                color='lime.600'
            >
                587
            </Button>
        </VStack>

        <Box display='flex' flexDirection='column' alignItems='center'>
            <Box
                position='relative'
                display='inline-flex'
                alignItems='center'
                justifyContent='center'
            >
                <IconButton
                    aria-label='Записать рецепт'
                    icon={<EditIcon boxSize='24px' />}
                    isRound
                    size='lg'
                    bg='black'
                    position='relative'
                    zIndex={1}
                    boxShadow='0 0 40px 10px #c4ff61'
                />
            </Box>
            <Text fontSize='sm' color='blackAlpha.700' mt={2}>
                Записать рецепт
            </Text>
        </Box>
    </Box>
);

export default Aside;
