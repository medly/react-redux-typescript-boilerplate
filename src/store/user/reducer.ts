import { Reducer } from 'redux';
import { UserActions, UserActionTypes, UserState } from './types';

export const initialState: UserState = {
    userName: '',
    email: '',
    phoneNumber: '',
    groups: []
};

export const user: Reducer<UserState, UserActions> = (state = initialState, { type, ...payload }) => {
    switch (type) {
        case UserActionTypes.ADD_USER:
            return {
                ...state,
                ...payload
            };
        case UserActionTypes.REMOVE_USER:
            return {
                ...initialState
            };
        default:
            return state;
    }
};
