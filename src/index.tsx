import { store } from '@store';
import { ThemeProvider } from '@styled';
import { defaultTheme } from '@theme';
import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
            <>
                <App />
            </>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root'),
);
