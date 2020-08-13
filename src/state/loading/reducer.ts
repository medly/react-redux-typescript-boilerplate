import { Reducer } from 'redux';
import storeKeys from './storeKeys';
import { LoadingState } from './types';

export const initialState = storeKeys.reduce(
    (acc, curr) => ({
        ...acc,
        [curr]: {
            isLoading: false
        }
    }),
    {} as LoadingState
);

/* eslint-disable @typescript-eslint/no-explicit-any */
export const loading: Reducer<LoadingState, any> = (state = initialState, action) => {
    const apiCallMatch = /@@(.*)\/FETCH/.exec(action.type),
        storeKey = apiCallMatch && apiCallMatch[1];

    switch (true) {
        case /.*FETCH_\w*REQUEST/.test(action.type):
            return {
                ...state,
                [storeKey]: {
                    isLoading: true
                }
            };

        case /.*FETCH_SUCCESS/.test(action.type):
        case /.*FETCH_FAILURE/.test(action.type):
            return {
                ...state,
                [storeKey]: {
                    isLoading: false
                }
            };

        default:
            return state;
    }
};
