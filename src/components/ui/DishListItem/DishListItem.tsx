import { Button, Flex, HStack, Image, Text } from '@chakra-ui/react';

type DishListItemProps = {
    title: string;
    icon?: string;
    onClick: () => void;
};

export const DishListItem = ({ title, icon }: DishListItemProps) => (
    <Flex justify='space-between' p={3} borderWidth='1px' borderRadius={8}>
        <HStack>
            <Image src={icon} alt={title} />
            <Text
                wordBreak='break-all'
                noOfLines={1}
                fontWeight='500'
                fontSize={{ base: 'md', md: 'lg', xl: 'xl' }}
            >
                {title}
            </Text>
        </HStack>
        <Button
            w={{ base: '70px', lg: '82px' }}
            fontSize={{ base: 'xs', lg: 'sm' }}
            size={{ md: 'xs', xl: 'sm' }}
            p={2}
            variant='outline'
            borderColor='lime.600'
            color='lime.600'
            flexShrink={0}
        >
            Готовить
        </Button>
    </Flex>
);
