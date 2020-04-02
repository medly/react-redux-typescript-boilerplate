import { Text } from '@medly-components/core';
import React from 'react';
import { hot } from 'react-hot-loader/root';

export const App: React.SFC = () => (
    <Text textSize="L3" textWeight="Strong">
        React Redux Typescript boilerplate
    </Text>
);

export default hot(App);
