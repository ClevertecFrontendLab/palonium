import { IconButton } from '@chakra-ui/react';

import { FilterIcon } from './FilterIcon';

function FilterButton() {
    return (
        <IconButton
            aria-label='Filter'
            icon={<FilterIcon />}
            bgColor='#fff'
            border='1px solid #0000007a'
            width={{ base: '32px', md: '48px' }}
            height={{ base: '32px', md: '48px' }}
            padding='0'
            minWidth='auto'
            minHeight='auto'
            variant='unstyled' // отключает лишние стили Chakra UI
        />
    );
}

export default FilterButton;
