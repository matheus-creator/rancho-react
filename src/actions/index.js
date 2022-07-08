// Action creator
export const setUser = (user) => {
    // Return an action
    return {
        type: 'USER_SET',
        payload: user
    };
};