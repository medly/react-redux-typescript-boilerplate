import { renderWithStoreAndRouter } from '@test-utils';
import React from 'react';
import PageContent from '../PageContent';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary component', () => {
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
            <ErrorBoundary>
                <PageContent>
                    <ErrorComponent />
                </PageContent>
            </ErrorBoundary>
        );
        expect(container).toHaveTextContent('Success');
    });
});
