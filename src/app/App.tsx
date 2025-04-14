import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';

import AppLayout from '~/components/layout/AppLayout';
import JuicyPage from '~/pages/JuicyPage.tsx';
import MainPage from '~/pages/MainPage';
import VeganPage from '~/pages/VeganPage.tsx';
import { useGetPostsQuery } from '~/query/services/posts.ts';

import { theme } from './theme.ts';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <ChakraProvider theme={theme}>
            <Router>
                <AppLayout>
                    <Routes>
                        <Route path='/' element={<MainPage />} />
                        <Route path='/juicy' element={<JuicyPage />} />
                        <Route path='/vegan/:category?' element={<VeganPage />} />
                    </Routes>
                </AppLayout>
            </Router>
        </ChakraProvider>
    );
}

export default App;
