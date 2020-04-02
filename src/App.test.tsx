import { render } from '@test-utils';
import React from 'react';
import { App } from './App';

describe('App', () => {
    it('should render properly', () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
    });
});
