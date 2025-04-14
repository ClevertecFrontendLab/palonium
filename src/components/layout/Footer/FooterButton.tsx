import { Avatar, IconButton, Text, VStack } from '@chakra-ui/react';
import { ReactElement } from 'react';

type FooterButtonProps = {
    icon?: ReactElement;
    label: string;
    isActive?: boolean;
    onClick?: () => void;
    isAvatar?: boolean;
    avatarSrc?: string;
};

export const FooterButton = ({
    icon,
    label,
    isActive = false,
    onClick,
    isAvatar = false,
    avatarSrc,
}: FooterButtonProps) => (
    <VStack spacing={1} onClick={onClick} cursor='pointer'>
        {isAvatar ? (
            <Avatar size='sm' src={avatarSrc} />
        ) : (
            <IconButton
                aria-label={label}
                icon={icon!} // уверены, что он точно передан
                variant='ghost'
                isRound
                bg={isActive ? 'black' : 'transparent'}
            />
        )}
        <Text fontSize='xs'>{label}</Text>
    </VStack>
);
