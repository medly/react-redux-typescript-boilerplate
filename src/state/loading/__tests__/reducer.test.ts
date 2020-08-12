import { loading, initialState } from '../reducer';

jest.mock('@medly-components/core');

describe('Loading reducer', () => {
    it('should start loading on any FETCH_*_REQUEST action', () => {
        const fetchAction = {
            type: '@@testData/FETCH_TEST_REQUEST'
        };
        expect(loading(initialState, fetchAction)).toEqual({
            ...initialState,
            testData: {
                isLoading: true
            }
        });
    });

    test.each(['FETCH_SUCCESS', 'FETCH_FAILURE'])('should done loading on any given action', action => {
        const fetchAction = {
            type: `@@testData/${action}`
        };
        expect(loading(initialState, fetchAction)).toEqual({ ...initialState, testData: { isLoading: false } });
    });
});
