import { LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_SUCCESS, REGISTER_FAILURE } from './authTypes';
import authService from './authService';

export const login = (email, password) => async dispatch => {
    try {
        const token = await authService.login(email, password);
        dispatch({ type: LOGIN_SUCCESS, payload: token });
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, error });
    }
};

export const register = (email, password) => async dispatch => {
    try {
        await authService.register(email, password);
        dispatch({ type: REGISTER_SUCCESS });
    } catch (error) {
        dispatch({ type: REGISTER_FAILURE, error });
    }
};
