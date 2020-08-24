import { renderWithRouter } from '@test-utils';
import React from 'react';
import reduxMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { initialState } from '@store';
import Dashboard from './Dashboard.container';

describe('Dashboard', () => {
    const mockStore = reduxMockStore(),
        renderDashboard = (store: ReturnType<typeof mockStore>) =>
            renderWithRouter(
                <Provider store={store}>
                    <Dashboard />
                </Provider>
            );

    it('should render properly', () => {
        const store = mockStore({ ...initialState, loading: { dashboard: { isLoading: false } } });
        const { container } = renderDashboard(store);
        expect(container).toMatchSnapshot();
    });

    it('should show loading if isLoading Prop is true', () => {
        const store = mockStore({ ...initialState, loading: { dashboard: { isLoading: true } } });
        const { container } = renderDashboard(store);
        expect(container).toMatchSnapshot();
    });
});
