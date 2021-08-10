const initialProfileState = {
    currentUser: {}
};

export const profileReducer = (state = initialProfileState, action) => {
    switch (action.type) {
        case 'profile/getProfile':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
};