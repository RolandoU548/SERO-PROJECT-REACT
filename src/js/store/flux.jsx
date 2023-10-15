const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {},
        actions: {
            logIn: data => {
                alert(data);
            },
            signUp: data => {
                alert(data);
            }
        }
    };
};

export default getState;
