const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            token: localStorage.getItem("token") || null,
            user: { id: null, name: null, lastname: null, email: null }
        },
        actions: {
<<<<<<< HEAD
            // logIn: data => {
            //     alert(data);
            // },
=======
>>>>>>> 7088938e9c1e45c715eeda8db9d99a12f5763b5b
            createUser: async info => {
                try {
                    const resp = await fetch(
                        import.meta.env.VITE_BACKEND_URL + "/user",
                        {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                name: info.name,
                                lastname: info.lastname,
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
                    localStorage.setItem("token", data.token);
                    setStore({ token: data.token });
                    return data;
                } catch (error) {
                    console.log("Error generating Token", error);
                }
            },
            identificateUser: async token => {
                try {
                    const resp = await fetch(
                        import.meta.env.VITE_BACKEND_URL + "/user",
                        {
                            headers: {
                                "Content-Type": "application/json",
                                authorization: "Bearer " + token
                            }
                        }
                    );
                    const data = await resp.json();
                    console.log(data);
                    setStore({
                        user: {
                            name: data.name,
                            id: data.id,
                            lastname: data.lastname,
                            email: data.email
                        }
                    });
                    return data;
                } catch (error) {
                    console.log("There has been an error", error);
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
