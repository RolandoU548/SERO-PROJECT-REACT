const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            token: localStorage.getItem("token") || null,
            theme: null,
            user: {
                id: null,
                name: "Prueba",
                lastname: "Sero",
                email: null,
                role: ["user", "admin"]
            },
            clients: [],
            users: [],
            payments: [],
            tasks: []
        },
        actions: {
            changeTheme: theme => {
                setStore({ theme });
            },
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
                                password: info.password,
                                role: info.role,
                                status: "Active"
                            })
                        }
                    );
                    const data = await resp.json();
                    return data;
                } catch (error) {
                    console.log("There has been an error", error);
                }
            },
            updateUser: async info => {
                const store = getStore();
                try {
                    const resp = await fetch(
                        import.meta.env.VITE_BACKEND_URL + `/user/${info.id}`,
                        {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json",
                                authorization: "Bearer " + store.token
                            },
                            body: JSON.stringify(info)
                        }
                    );

                    if (resp.ok) {
                        const data = await resp.json();
                        return data;
                    } else {
                        console.log(
                            "Error updating user. Status:",
                            resp.status
                        );
                        return null;
                    }
                } catch (error) {
                    console.log("There has been an error", error);
                    return null;
                }
            },
            deleteUser: async id => {
                const store = getStore();
                try {
                    const resp = await fetch(
                        import.meta.env.VITE_BACKEND_URL + `/user/${id}`,
                        {
                            method: "DELETE",
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
                                ...data,
                                role: data.role.map(role => {
                                    return role.role;
                                }),
                                createdAt: new Date(data.createdAt),
                                birthday: new Date(data.birthday)
                            }
                        });
                        return true;
                    }
                    return false;
                } catch (error) {
                    console.log("There has been an error", error);
                }
            },
            getAllUsers: async token => {
                try {
                    const resp = await fetch(
                        import.meta.env.VITE_BACKEND_URL + "/users",
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
                            users: data.map(user => {
                                user.role = user.role.map(role => {
                                    return role.role;
                                });
                                return user;
                            })
                        });
                        return true;
                    }
                    return false;
                } catch (error) {
                    console.log("There has been an error", error);
                }
            },
            signOut: () => {
                setStore({
                    token: null,
                    user: {
                        id: null,
                        name: null,
                        lastname: null,
                        email: null,
                        role: []
                    },
                    users: null
                });
                localStorage.removeItem("token");
            },
            getAllClients: async () => {
                const store = getStore();
                try {
                    const resp = await fetch(
                        import.meta.env.VITE_BACKEND_URL + "/clients",
                        {
                            headers: {
                                authorization: "Bearer " + store.token
                            }
                        }
                    );
                    const data = await resp.json();
                    setStore({ clients: data });
                    // return data;
                } catch (error) {
                    console.log("There has been an error", error);
                }
            },
            updateClient: async (id, client) => {
                const store = getStore();
                try {
                    const response = await fetch(
                        import.meta.env.VITE_BACKEND_URL + `/clients/${id}`,
                        {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json",
                                authorization: "Bearer " + store.token
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
                const store = getStore();
                try {
                    const response = await fetch(
                        import.meta.env.VITE_BACKEND_URL + "/clients",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                authorization: "Bearer " + store.token
                            },
                            body: JSON.stringify(client)
                        }
                    );
                    const data = await response.json();
                    setStore({ clients: [...getStore().clients, data] });
                    localStorage.setItem("client", JSON.stringify(data));
                    return data;
                } catch (error) {
                    console.error(error);
                }
            },
            createClientFromClHash: async client => {
                try {
                    const response = await fetch(
                        import.meta.env.VITE_BACKEND_URL +
                            "/clients_with_clhash",
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
                    localStorage.setItem("client", JSON.stringify(data));
                    return data;
                } catch (error) {
                    console.error(error);
                }
            },
            getAllPayments: async () => {
                try {
                    const resp = await fetch(
                        import.meta.env.VITE_BACKEND_URL + "/payments"
                    );
                    const data = await resp.json();
                    setStore({ payments: data });
                    // return data;
                } catch (error) {
                    console.log("There has been an error", error);
                }
            },
            createPayment: async FormData => {
                try {
                    const response = await fetch(
                        import.meta.env.VITE_BACKEND_URL + "/payments",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(FormData)
                        }
                    );
                    const data = await response.json();
                    setStore({ payments: [...getStore().payments, data] });
                    return data;
                } catch (error) {
                    console.error(error);
                }
            },
            updatePayment: async (id, payment) => {
                try {
                    const response = await fetch(
                        import.meta.env.VITE_BACKEND_URL + `/payments/${id}`,
                        {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(payment)
                        }
                    );
                    const data = await response.json();
                    const updatedPayments = getStore().payments.map(p => {
                        if (p.id === id) {
                            return data;
                        }
                        return p;
                    });
                    setStore({
                        payments: updatedPayments
                    });
                } catch (error) {
                    console.error(error);
                }
            },
            deletePayment: async id => {
                try {
                    const resp = await fetch(
                        import.meta.env.VITE_BACKEND_URL + `/payments/${id}`,
                        {
                            method: "DELETE"
                        }
                    );
                    const data = await resp.json();
                    setStore({
                        payments: [
                            ...getStore().payments.filter(x => x.id !== id)
                        ]
                    });
                    return data;
                } catch (error) {
                    console.log("There has been an error", error);
                }
            },
            getAllTask: async () => {
                try {
                    const resp = await fetch(
                        import.meta.env.VITE_BACKEND_URL + "/tasks"
                    );
                    const data = await resp.json();
                    setStore({ tasks: data });
                } catch (error) {
                    console.log("There has been an error", error);
                }
            },
            createTask: async taskData => {
                try {
                    const response = await fetch(
                        import.meta.env.VITE_BACKEND_URL + "/tasks",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(taskData)
                        }
                    );
                    const data = await response.json();
                    setStore({ tasks: [...getStore().tasks, data] });
                    return data;
                } catch (error) {
                    console.error(error);
                }
            },
            updateTask: async (id, taskData) => {
                try {
                    const response = await fetch(
                        import.meta.env.VITE_BACKEND_URL + `/tasks/${id}`,
                        {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(taskData)
                        }
                    );
                    const data = await response.json();
                    const updatedTasks = getStore().tasks.map(t => {
                        if (t.id === id) {
                            return data;
                        }
                        return t;
                    });
                    setStore({
                        tasks: updatedTasks
                    });
                    return data;
                } catch (error) {
                    console.error(error);
                }
            },
            deleteTask: async id => {
                try {
                    const resp = await fetch(
                        import.meta.env.VITE_BACKEND_URL + `/tasks/${id}`,
                        {
                            method: "DELETE"
                        }
                    );
                    const data = await resp.json();
                    setStore({
                        tasks: [...getStore().tasks.filter(x => x.id !== id)]
                    });
                    return data;
                } catch (error) {
                    console.log("There has been an error", error);
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
            },
            generateInvitationClientForm: async () => {
                const store = getStore();
                try {
                    const resp = await fetch(
                        import.meta.env.VITE_BACKEND_URL + `/inviteclientform`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                authorization: "Bearer " + store.token
                            },
                            body: JSON.stringify({})
                        }
                    );
                    const data = await resp.json();
                    return data;
                } catch (error) {
                    console.log("There has been an error", error);
                }
            },
            existsInvitationClientForm: async clhash => {
                try {
                    const resp = await fetch(
                        import.meta.env.VITE_BACKEND_URL +
                            `/inviteclientform/${clhash}`
                    );
                    const data = await resp.json();
                    return data !== undefined && data !== null;
                } catch (error) {
                    console.log("There has been an error", error);
                    return false;
                }
            },
            generateInvitationDbForm: async () => {
                const store = getStore();
                try {
                    const resp = await fetch(
                        import.meta.env.VITE_BACKEND_URL + `/invitedbform`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                authorization: "Bearer " + store.token
                            },
                            body: JSON.stringify({})
                        }
                    );
                    const data = await resp.json();
                    return data;
                } catch (error) {
                    console.log("There has been an error", error);
                }
            },
            columnsInvitationDbForm: async dbhash => {
                try {
                    const resp = await fetch(
                        import.meta.env.VITE_BACKEND_URL +
                            `/invitedbform/${dbhash}`
                    );
                    const data = await resp.json();
                    return data;
                } catch (error) {
                    console.log("There has been an error", error);
                    return null;
                }
            },
            addRowInvitationDbForm: async (dbhash, row) => {
                try {
                    const resp = await fetch(
                        import.meta.env.VITE_BACKEND_URL +
                            `/invitedbform/${dbhash}`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(row)
                        }
                    );
                    const data = await resp.json();
                    return data;
                } catch (error) {
                    console.log("There has been an error", error);
                    return null;
                }
            }
        }
    };
};

export default getState;
