const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: { token: null },
        actions: {
            logIn: data => {
                alert(data);
            },
            signUp: data => {
                alert(data);
            },
            setToken: token => {
                setStore({ token });
            }
        }
    };
};

export default getState;
