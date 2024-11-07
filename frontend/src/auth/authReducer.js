const initialState = {
    token: null,
    error: null,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, token: action.payload };
        case LOGIN_FAILURE:
            return { ...state, error: action.error };
        case REGISTER_SUCCESS:
            return state;
        case REGISTER_FAILURE:
            return { ...state, error: action.error };
        default:
            return state;
    }
}
