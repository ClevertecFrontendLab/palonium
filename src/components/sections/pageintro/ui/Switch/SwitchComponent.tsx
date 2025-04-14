import { FormControl, FormLabel, Switch } from '@chakra-ui/react';

function SwitchComponent() {
    return (
        <FormControl display='flex' alignItems='center'>
            <FormLabel mb='0'>Исключить мои аллергены</FormLabel>
            <Switch />
        </FormControl>
    );
}

export default SwitchComponent;
