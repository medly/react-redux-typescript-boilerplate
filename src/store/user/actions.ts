import { AddUserAction, RemoveUserAction, UserActionTypes, UserRoles } from './types';

export const addUser = (userName: string, email: string, phoneNumber: string, groups: UserRoles[]): AddUserAction => ({
    userName,
    email,
    phoneNumber,
    groups,
    type: UserActionTypes.ADD_USER
});

export const removeUser = (): RemoveUserAction => ({
    type: UserActionTypes.REMOVE_USER
});
