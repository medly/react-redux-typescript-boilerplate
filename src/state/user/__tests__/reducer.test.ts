import { addUser, removeUser } from '../actions';
import { initialState, user } from '../reducer';
import { UserState } from '../types';

describe('User reducer', () => {
    it('should return initial on first load', () => {
        expect(user(undefined, { type: undefined })).toEqual(initialState);
    });

    it('should handle ADD_USER action', () => {
        const expected = {
            email: 'dummy@dummy.com',
            phoneNumber: '+913434398394834',
            userName: 'Demo username',
            groups: ['admin', '2k+']
        };
        expect(user(initialState, addUser('Demo username', 'dummy@dummy.com', '+913434398394834', ['admin', '2k+']))).toEqual(expected);
    });

    it('should handle REMOVE_USER action', () => {
        const userSate: UserState = {
            userName: 'Demo username',
            email: 'dummy@dummy.com',
            phoneNumber: '+919082375498',
            groups: ['admin', '2k+']
        };
        expect(user(userSate, removeUser())).toEqual(initialState);
    });
});
