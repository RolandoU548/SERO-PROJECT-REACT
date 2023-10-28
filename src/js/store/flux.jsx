const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            token: localStorage.getItem("token") || null,
            user: { id: 0, name: " ", lastname: " ", email: " " },
            clients: []
        },
        actions: {
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
                    if (resp.ok) {
                        setStore({
                            user: {
                                id: data.id,
                                name: data.name,
                                lastname: data.lastname,
                                email: data.email
                            }
                        });
                    }

                    return data;
                } catch (error) {
                    console.log("There has been an error", error);
                }
            },
            signOut: () => {
                setStore({
                    token: null,
                    user: {
                        id: 0,
                        name: " ",
                        lastname: " ",
                        email: " "
                    }
                });
                localStorage.removeItem("token");
            },
            getAllClients: async () => {
                try {
                    const resp = await fetch(
                        import.meta.env.VITE_BACKEND_URL + "/clients"
                    );
                    const data = await resp.json();
                    setStore({ clients: data });
                    return data;
                } catch (error) {
                    console.log("There has been an error", error);
                }
            },
            updateClient: async (id, client) => {
                try {
                    const response = await fetch(
                        import.meta.env.VITE_BACKEND_URL + `/clients/${id}`,
                        {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(client)
                        }
                    );
                    const data = await response.json();
                    const updatedClients = getStore().clients.map(c => {
                        if (c.id === id) {
                            return data;
                        }
                        return c;
                    });
                    setStore({
                        clients: updatedClients
                    });
                } catch (error) {
                    console.error(error);
                }
            },

            deleteClient: async id => {
                try {
                    const resp = await fetch(
                        import.meta.env.VITE_BACKEND_URL + `/clients/${id}`,
                        {
                            method: "DELETE"
                        }
                    );
                    const data = await resp.json();
                    setStore({
                        clients: [
                            ...getStore().clients.filter(x => x.id !== id)
                        ]
                    });
                    return data;
                } catch (error) {
                    console.log("There has been an error", error);
                }
            },
            createClient: async client => {
                try {
                    const response = await fetch(
                        import.meta.env.VITE_BACKEND_URL + "/clients",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(client)
                        }
                    );
                    const data = await response.json();
                    setStore({ clients: [...getStore().clients, data] });
                    return data;
                } catch (error) {
                    console.error(error);
                }
            },
            sendRow: async object => {
                const store = getStore();
                try {
                    const resp = await fetch(
                        import.meta.env.VITE_BACKEND_URL + "/row",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                authorization: "Bearer " + store.token
                            },
                            body: JSON.stringify({
                                text: object
                            })
                        }
                    );
                    const data = await resp.json();
                    console.log(data);
                    if (!resp.ok) {
                        alert(JSON.stringify(data.message));
                    }
                    return data;
                } catch (error) {
                    console.log("There has been an error", error);
                }
            },
            getRow: async id => {
                const store = getStore();
                try {
                    const resp = await fetch(
                        `${import.meta.env.VITE_BACKEND_URL}/row/${id}`,
                        {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                                authorization: "Bearer " + store.token
                            }
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
            getRows: async () => {
                const store = getStore();
                try {
                    const resp = await fetch(
                        `${import.meta.env.VITE_BACKEND_URL}/user_rows`,
                        {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                                authorization: "Bearer " + store.token
                            }
                        }
                    );
                    const data = await resp.json();
                    return data;
                } catch (error) {
                    console.log("There has been an error", error);
                }
            }
        }
    };
};

export default getState;
