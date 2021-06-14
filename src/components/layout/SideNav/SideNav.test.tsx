import { cleanup, fireEvent, renderWithRouter } from '@test-utils';
import React from 'react';
import { SideNav } from './SideNav';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useHistory: () => ({
        push: mockHistoryPush
    })
}));

describe('SideNav', () => {
    afterEach(cleanup);

    it('should call history.push on click on dashboard', async () => {
        const { getByText } = renderWithRouter(<SideNav />);
        fireEvent.click(getByText('Dashboard'));
        expect(mockHistoryPush).toHaveBeenCalledWith('/');
    });
});
