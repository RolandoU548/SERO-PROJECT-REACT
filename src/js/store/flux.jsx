import { fetchWithAuth } from "../utils/fetchWithAuth";

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            accessToken: null,
            theme: null,
            user: {
                _id: null,
                name: "Prueba",
                lastname: "Sero",
                email: "prueba@sero.com",
                role: "user"
            },
            clients: [],
            tryclients: [],
            payments: [],
            users: [],
            tasks: [],
            paymentform: {}
        },
        actions: {
            changeTheme: theme => {
                setStore({ theme });
            },
            setUser: user => {
                setStore({ user });
            },
            changeAccessToken: accessToken => {
                setStore({ accessToken });
            },
            login: async info => {
                try {
                    const resp = await fetch(
                        import.meta.env.VITE_BACKEND_URL + "/auth/login",
                        {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            credentials: "include",
                            body: JSON.stringify({
                                email: info.email,
                                password: info.password
                            })
                        }
                    );
                    const data = await resp.json();
                    setStore({ user: data.user });
                    setStore({ accessToken: data.accessToken });
                    return data;
                } catch (error) {
                    console.log("Error generating Token", error);
                }
            },
            signOut: async () => {
                setStore({
                    accessToken: null,
                    user: {
                        id: null,
                        name: null,
                        lastname: null,
                        email: null,
                        role: null
                    },
                    users: null
                });
                try {
                    await fetch(
                        import.meta.env.VITE_BACKEND_URL + "/auth/logout",
                        {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            credentials: "include"
                        }
                    );
                } catch (error) {
                    console.log("Error logging out", error);
                }
            },
            createUser: async info => {
                try {
                    const resp = await fetch(
                        import.meta.env.VITE_BACKEND_URL + "/users",
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
            updateOwnUser: async user => {
                const store = getStore();
                try {
                    return await fetchWithAuth(
                        import.meta.env.VITE_BACKEND_URL + "/users/me",
                        {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(user)
                        },
                        store.accessToken,
                        setStore
                    );
                } catch (error) {
                    console.log("There has been an error", error);
                    return null;
                }
            },
            updateUserById: async user => {
                const store = getStore();
                try {
                    return await fetchWithAuth(
                        import.meta.env.VITE_BACKEND_URL + "/users/" + user._id,
                        {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(user)
                        },
                        store.accessToken,
                        setStore
                    );
                } catch (error) {
                    console.log("There has been an error", error);
                    return null;
                }
            },
            deleteUserById: async userId => {
                const store = getStore();
                try {
                    return await fetchWithAuth(
                        import.meta.env.VITE_BACKEND_URL + "/users/" + userId,
                        {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        },
                        store.accessToken,
                        setStore
                    );
                } catch (error) {
                    console.log("There has been an error", error);
                    return null;
                }
            },
            getAllUsers: async () => {
                const store = getStore();
                try {
                    const data = await fetchWithAuth(
                        import.meta.env.VITE_BACKEND_URL + "/users",
                        {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        },
                        store.accessToken,
                        setStore
                    );
                    setStore({ users: data.users });
                    return data;
                } catch (error) {
                    console.log("There has been an error", error);
                }
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
                const store = getStore();
                try {
                    const resp = await fetch(
                        import.meta.env.VITE_BACKEND_URL + `/clients/${id}`,
                        {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json",
                                authorization: "Bearer " + store.token
                            }
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
            storePayments: data => {
                setStore({ paymentform: data });
                return data;
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
            sendSpreadsheet: async object => {
                const store = getStore();
                try {
                    return await fetchWithAuth(
                        import.meta.env.VITE_BACKEND_URL + "/spreadsheets",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                user: store.user._id,
                                tableData: object
                            })
                        },
                        store.accessToken,
                        setStore
                    );
                } catch (error) {
                    console.log("There has been an error", error);
                }
            },
            getSpreadsheet: async () => {
                const store = getStore();
                try {
                    return await fetchWithAuth(
                        import.meta.env.VITE_BACKEND_URL + "/spreadsheets/me",
                        {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        },
                        store.accessToken,
                        setStore
                    );
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
            },
            createSuggestion: async (name, email, text) => {
                try {
                    const resp = await fetch(
                        import.meta.env.VITE_BACKEND_URL + "/suggestion",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                name,
                                email,
                                text
                            })
                        }
                    );
                    const data = await resp.json();
                    return data;
                } catch (error) {
                    console.log("There has been an error", error);
                    return null;
                }
            },
            getAllSuggestions: async () => {
                const store = getStore();
                try {
                    const resp = await fetch(
                        import.meta.env.VITE_BACKEND_URL + "/suggestions",
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
                    return null;
                }
            },
            deleteSuggestion: async id => {
                const store = getStore();
                try {
                    const resp = await fetch(
                        `${import.meta.env.VITE_BACKEND_URL}/suggestion/${id}`,
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
            }
        }
    };
};

export default getState;
