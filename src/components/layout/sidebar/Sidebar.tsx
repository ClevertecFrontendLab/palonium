import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';

import { menuData } from './MenuData';
import { MenuIcon } from './MenuIcon';

export const SidebarMenu: React.FC = () => {
    const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);
    const location = useLocation();
    const navigate = useNavigate();

    const handleToggle = (index: number, label: string) => {
        if (label === 'Веганская кухня') {
            navigate('/vegan/main-courses');
        }

        setExpandedIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
        );
    };

    return (
        <Accordion
            allowMultiple
            index={expandedIndexes}
            onChange={(idx) => setExpandedIndexes(Array.isArray(idx) ? idx : [idx])}
            w='64'
            h='100%'
            overflowY='auto'
            bg='white'
            boxShadow={expandedIndexes.length > 0 ? 'md' : 'none'}
            sx={{
                '&::-webkit-scrollbar': {
                    width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: 'rgba(0, 0, 0, 0.16)',
                    borderRadius: '8px',
                },
                '&::-webkit-scrollbar-track': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    borderRadius: '8px',
                },
            }}
        >
            {menuData.map((section, index) => (
                <AccordionItem
                    key={section.label}
                    border='none'
                    ml={2.5}
                    mr={4}
                    data-test-id={section.dataTestId}
                >
                    <AccordionButton
                        onClick={() => handleToggle(index, section.label)}
                        _expanded={{ bg: '#EAFFC7' }}
                        px={2}
                        py={3}
                        _hover={{ bg: '#F7FFF0' }}
                    >
                        <Flex align='center' flex='1' textAlign='left' columnGap={2}>
                            <MenuIcon src={section.icon} />
                            <Text
                                fontWeight={expandedIndexes.includes(index) ? 'bold' : 'medium'}
                                fontSize='md'
                            >
                                {section.label}
                            </Text>
                        </Flex>
                        <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel px={2} py={1}>
                        {section.items.map((item) => {
                            const isActive = location.pathname === item.href;
                            return (
                                <Box
                                    key={item.href}
                                    borderLeft={isActive ? '8px solid' : '2px solid'}
                                    borderColor='lime.300'
                                    ml={6}
                                    pl={3}
                                    my={2}
                                >
                                    <Link
                                        to={item.href}
                                        style={{
                                            textDecoration: 'none',
                                            fontWeight: isActive ? 'bold' : 'normal',
                                        }}
                                    >
                                        <Text fontSize='sm'>{item.label}</Text>
                                    </Link>
                                </Box>
                            );
                        })}
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
};
