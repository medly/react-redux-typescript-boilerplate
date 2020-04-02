import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxSaga from 'redux-saga';
import { rootSaga } from './sagas';
import { initialState as userInitialState, user } from './user';

export const initialState = {
        user: userInitialState,
    },
    sagaMiddleware = reduxSaga(),
    rootReducer = combineReducers({
        user,
    }),
    store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof rootReducer>;
