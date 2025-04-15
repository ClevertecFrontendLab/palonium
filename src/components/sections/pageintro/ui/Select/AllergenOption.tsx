import { Checkbox } from '@chakra-ui/react';

type Props = {
    label: string;
    checked: boolean;
    onChange: () => void;
};

const AllergenOption = ({ label, checked, onChange }: Props) => (
    <Checkbox
        isChecked={checked}
        onChange={onChange}
        iconColor='green.600'
        color='gray.800'
        sx={{
            '.chakra-checkbox__control': {
                bg: 'white', // по умолчанию белый фон
                borderColor: 'lime.150', // обводка lime.150
                _hover: {
                    borderColor: 'lime.300',
                },
            },
            '&[data-checked] .chakra-checkbox__control': {
                bg: 'lime.150', // при активации фон становится lime.150
                borderColor: 'lime.300', // можно сделать чуть ярче
            },
        }}
    >
        {label}
    </Checkbox>
);

export default AllergenOption;
