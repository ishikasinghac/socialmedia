import thunk from 'react-thunk';
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { authReducer } from './auth/auth.reducer';
const rootReducers=combineReducers({
    auth:authReducer

})

export const store=legacy_createStore(rootReducers,applyMiddleware(thunk))