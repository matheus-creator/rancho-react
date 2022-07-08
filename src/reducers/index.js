import { combineReducers } from "redux";

const currentUserReducer = (currentUser = null, action) => {
    if (action.type === 'USER_SET') {
        return action.payload;
    }

    return currentUser;
};

export default combineReducers({
    currentUser: currentUserReducer
});