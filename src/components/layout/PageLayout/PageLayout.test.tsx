import { render } from '@test-utils';
import React from 'react';
import Header from '../Header';
import PageContent from '../PageContent';
import PageLayout from './PageLayout';

describe('PageLayout component', () => {
    it('should render properly', () => {
        const { container } = render(
            <PageLayout>
                <Header />
                <PageContent>
                    <div>Success</div>
                </PageContent>
            </PageLayout>
        );
        expect(container).toHaveTextContent('Success');
    });
});
