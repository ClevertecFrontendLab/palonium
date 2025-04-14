import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Box, CloseButton, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

import AllergenOption from './AllergenOption';
import CustomAllergenInput from './CustomAllergenInput';

const allergens = [
    'Молочные продукты',
    'Яйцо',
    'Рыба',
    'Моллюски',
    'Орехи',
    'Томат (помидор)',
    'Цитрусовые',
    'Клубника (ягоды)',
    'Шоколад',
];

const AllergenSelect = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string[]>([]);
    const [custom, setCustom] = useState<string[]>([]);

    const toggle = (value: string) => {
        setSelected((prev) =>
            prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
        );
    };

    const addCustom = (value: string) => {
        if (value && !custom.includes(value)) {
            setCustom((prev) => [...prev, value]);
            setSelected((prev) => [...prev, value]);
        }
    };

    const removeTag = (value: string) => {
        setSelected((prev) => prev.filter((v) => v !== value));
    };

    return (
        <Box w='100%' maxW='234px' position='relative'>
            <Flex
                justify='space-between'
                align='center'
                px={4}
                py={2}
                border='1px'
                borderColor='blackAlpha.200'
                color='blackAlpha.700'
                borderRadius='md'
                onClick={() => setIsOpen(!isOpen)}
                cursor='pointer'
                flexWrap='wrap'
                gap={1}
                _hover={{ borderColor: 'lime.300', color: 'gray.700' }}
                bg='white'
            >
                {selected.length > 0 ? (
                    <Flex wrap='wrap' gap={1}>
                        {selected.map((item) => (
                            <Flex
                                key={item}
                                align='center'
                                border='1px'
                                borderColor='lime.400'
                                borderRadius={6}
                                px={2}
                                py={0.5}
                                fontSize='xs'
                                fontWeight='Medium'
                                color='lime.600'
                            >
                                {item}
                                <CloseButton
                                    size='sm'
                                    ml={1}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeTag(item);
                                    }}
                                />
                            </Flex>
                        ))}
                    </Flex>
                ) : (
                    <Text fontSize='sm' color='inherit'>
                        Выберите из списка...
                    </Text>
                )}
                {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </Flex>

            {isOpen && (
                <Box
                    position='absolute'
                    top='100%'
                    left={0}
                    right={0}
                    mt={2}
                    bg='white'
                    border='1px solid'
                    borderColor='blackAlpha.200'
                    borderRadius='md'
                    zIndex={10}
                    boxShadow='md'
                    overflowY='auto'
                >
                    {[...allergens, ...custom].map((item, idx) => (
                        <Box
                            key={item}
                            bg={idx % 2 === 0 ? 'blackAlpha.100' : 'white'}
                            px={2}
                            py={1}
                            borderRadius='md'
                        >
                            <AllergenOption
                                label={item}
                                checked={selected.includes(item)}
                                onChange={() => toggle(item)}
                            />
                        </Box>
                    ))}
                    <CustomAllergenInput onAdd={addCustom} />
                </Box>
            )}
        </Box>
    );
};

export default AllergenSelect;
