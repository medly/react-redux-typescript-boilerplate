import storeKeys from './storeKeys';

export type StoreKeys = typeof storeKeys[number];

export interface LoadingField {
    readonly isLoading?: boolean;
}

export type LoadingState = {
    [k in StoreKeys]: LoadingField;
};
