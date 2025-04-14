import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    breakpoints: {
        base: '0em', // 0px
        sm: '48em', // 768px
        md: '90em', // 1440px
        xl: '120em', // 1920px
    },
    colors: {
        lime: {
            50: '#FFFFD3',
            100: '#EAFFC7',
            150: '#D7FF94',
            300: '#C4FF61',
            400: '#B1FF2E',
            600: '#2DB100',
            800: '#134B00',
        },

        black: {
            600: '#0000007a',
        },
    },
    fonts: {
        body: `Inter,sans-serif`,
        heading: `Inter,sans-serif`,
    },
});
