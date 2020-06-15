import { Header, PageLayout, Routes, SideNav } from '@components';
import { CssBaseline } from '@medly-components/core';
import { store } from '@store';
import { ThemeProvider } from '@styled';
import { defaultTheme } from '@theme';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

export const App: React.SFC = () => (
    <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
            <>
                <CssBaseline />
                <Router>
                    <PageLayout>
                        <SideNav />
                        <Header />
                        <Routes />
                    </PageLayout>
                </Router>
            </>
        </ThemeProvider>
    </Provider>
);

export default hot(App);
