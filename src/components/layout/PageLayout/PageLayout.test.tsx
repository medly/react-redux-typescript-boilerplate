import { renderWithStoreAndRouter } from '@test-utils';
import React from 'react';
import Header from '../Header';
import PageContent from '../PageContent';
import PageLayout from './PageLayout';

describe('PageLayout component', () => {
    beforeEach(() => {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(() => {
            return null;
        });
    });

    afterEach(() => {
        // @ts-ignore
        console.error.mockRestore();
    });
    it('should render properly', () => {
        const dummy = jest
            .fn()
            .mockReturnValueOnce(() => {
                throw new Error('Something went wrong');
            })
            .mockReturnValue(() => 'Success');

        const ErrorComponent = () => <div>{dummy()()}</div>;
        const { container } = renderWithStoreAndRouter(
            <PageLayout>
                <Header />
                <PageContent>
                    <ErrorComponent />
                </PageContent>
            </PageLayout>
        );
        expect(container).toHaveTextContent('Success');
    });
});
