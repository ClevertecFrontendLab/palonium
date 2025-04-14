import { Grid, GridItem } from '@chakra-ui/react';
import { ReactNode } from 'react';

import Aside from './aside/Aside';
import { Footer } from './Footer/footer';
import Header from './header/Header';
import { SidebarLayout } from './sidebar-layout/SidebarLayout';

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => (
    <Grid
        templateRows={{ base: 'auto 1fr auto', md: 'auto 1fr' }}
        templateColumns={{ base: '1fr', md: '256px 1fr 240px' }}
        templateAreas={{
            base: `
          "header"
          "main"
          "footer"
        `,
            md: `
          "header header header"
          "sidebar main aside"
        `,
        }}
        minH='100vh'
        overflowY={{ base: 'hidden', md: 'auto' }}
        overflowX='hidden'
    >
        <GridItem
            area='header'
            position='fixed'
            top={0}
            left={0}
            right={0}
            zIndex={1000}
            bg='white'
        >
            <Header />
        </GridItem>

        <GridItem
            area='sidebar'
            display={{ base: 'none', md: 'block' }}
            position='fixed'
            top={{ base: '64px', md: '80px' }}
            left={0}
            borderRight='1px solid rgba(0, 0, 0, 0.12)'
            w='256px'
            h='calc(100vh - 64px)'
            overflowY='auto'
            zIndex={900}
        >
            {/* <SidebarMenu/> */}
            <SidebarLayout />
        </GridItem>

        <GridItem
            area='main'
            px={{ base: 4, md: 5 }}
            pt={{ base: '64px', md: '84px' }}
            pb={{ base: '84px', md: 0 }}
            overflowY={{ base: 'auto', md: 'visible' }}
            overflowX='hidden'
            minH={{ md: 'calc(100vh - 84px)' }}
        >
            {children}
        </GridItem>

        <GridItem
            area='aside'
            display={{ base: 'none', md: 'block' }}
            position='fixed'
            top={{ base: '64px', md: '80px' }}
            right={0}
            w='240px'
            h='calc(100vh - 64px)'
            overflowY='auto'
            zIndex={900}
            bg='white'
        >
            <Aside />
        </GridItem>

        {/* Footer можно добавить при необходимости */}

        <GridItem
            area='footer'
            display={{ base: 'block', md: 'none' }}
            position='fixed'
            bottom={0}
            left={0}
            right={0}
            zIndex={1000}
        >
            {/* Вставь здесь свой компонент футера */}
            <Footer />
        </GridItem>
    </Grid>
);

export default AppLayout;
