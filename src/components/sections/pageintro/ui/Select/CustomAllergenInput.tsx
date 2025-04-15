import { AddIcon } from '@chakra-ui/icons';
import { Box, IconButton, Input } from '@chakra-ui/react';
import { useState } from 'react';

const CustomAllergenInput = ({ onAdd }: { onAdd: (v: string) => void }) => {
    const [value, setValue] = useState('');

    const handleAdd = () => {
        onAdd(value.trim());
        setValue('');
    };

    return (
        <Box display='flex' gap={2} mt={2}>
            <Input
                placeholder='Другой аллерген'
                size='sm'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                borderColor='green.300'
                _hover={{ borderColor: 'green.400' }}
                _focus={{ borderColor: 'green.500', boxShadow: '0 0 0 1px green.500' }}
                borderRadius='md'
            />
            <IconButton
                aria-label='Добавить'
                icon={<AddIcon />}
                size='sm'
                colorScheme='green'
                onClick={handleAdd}
                borderRadius='md'
            />
        </Box>
    );
};

export default CustomAllergenInput;
