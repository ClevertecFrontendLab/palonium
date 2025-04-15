import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';

function Search() {
    return (
        <InputGroup size={{ base: 'sm', md: 'lg' }} maxW='458px'>
            <Input
                placeholder='Название или ингредиент...'
                size={{ base: 'sm', md: 'lg' }}
                border='1px solid #0000007a'
                borderRadius={4}
                pr='3rem'
                _placeholder={{ color: 'lime.800', fontSize: '18px' }}
            />
            <InputRightElement pointerEvents='none'>
                <SearchIcon />
            </InputRightElement>
        </InputGroup>
    );
}

export default Search;
