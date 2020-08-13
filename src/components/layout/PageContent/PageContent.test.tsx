import { render } from '@test-utils';
import React from 'react';
import { PageContent } from './PageContent';

describe('PageContent component', () => {
    it('should render properly', () => {
        const { container } = render(<PageContent>Demo PageContent</PageContent>);
        expect(container).toMatchSnapshot();
    });
    it('should render with loader properly', () => {
        const { container } = render(<PageContent isLoading={true}>Demo PageContent</PageContent>);
        expect(container).toMatchSnapshot();
    });
});
