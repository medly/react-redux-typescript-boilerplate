import { render } from '@test-utils';
import React from 'react';
import Header from './Header';

describe('Header', () => {
    it('should render properly', () => {
        const { container } = render(<Header />);
        expect(container).toMatchSnapshot();
    });
});
