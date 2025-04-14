import { Image } from '@chakra-ui/react';

interface Props {
    src: string;
}

export const MenuIcon: React.FC<Props> = ({ src }) => (
    <Image src={src} alt='icon' boxSize='24px' mr={2} />
);
