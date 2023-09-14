const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            theme: "dark",
            demo: [
                {
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ]
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            changeTheme: () => {
                const theme = getStore().theme;
                setStore({ theme: theme === "light" ? "dark" : "light" });
            }
        }
    };
};

export default getState;
