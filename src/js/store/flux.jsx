const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            token: localStorage.getItem("token") || null,
            user: { email: null }
        },
        actions: {
            logIn: data => {
                alert(data);
            },
            createUser: async info => {
                try {
                    const resp = await fetch(
                        import.meta.env.VITE_BACKEND_URL + "/user",
                        {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                email: info.email,
                                password: info.password
                            })
                        }
                    );
                    const data = await resp.json();
                    if (!resp.ok) {
                        alert(JSON.stringify(data.message));
                    }
                    return data;
                } catch (error) {
                    console.log("There has been an error", error);
                }
            },
            generateToken: async info => {
                try {
                    const resp = await fetch(
                        import.meta.env.VITE_BACKEND_URL + "/token",
                        {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                email: info.email,
                                password: info.password
                            })
                        }
                    );
                    const data = await resp.json();
                    if (!resp.ok) {
                        alert(JSON.stringify(data.message));
                    }
                    localStorage.setItem("token", data.access_token);
                    setStore({ token: data.access_token });
                    return data;
                } catch (error) {
                    console.log("Error generating Token.", error);
                }
            },
            signOut: () => {
                setStore({
                    token: null,
                    user: { email: null }
                });
                localStorage.removeItem("token");
            }
        }
    };
};

export default getState;
