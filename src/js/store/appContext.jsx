import React, { useState, useEffect } from "react";
import getState from "./flux.jsx";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        // this will be passed as the context value
        const [state, setState] = useState(
            getState({
                getStore: () => state.store,
                getActions: () => state.actions,
                setStore: updatedStore =>
                    setState({
                        store: Object.assign(state.store, updatedStore),
                        actions: { ...state.actions }
                    })
            })
        );

        async function usuario(info) {
            try {
                const resp = await fetch(
                    import.meta.env.VITE_BACKEND_URL + "/row",
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            text: info
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
        }
        async function bien(id) {
            try {
                const resp = await fetch(
                    `${import.meta.env.VITE_BACKEND_URL}/row/${id}`,
                    {
                        method: "GET",
                        headers: { "Content-Type": "application/json" }
                    }
                );
                const data = await resp.json();
                const coche = JSON.parse(data);
                console.log(coche);
                return data;
            } catch (error) {
                console.log("There has been an error", error);
            }
        }
        useEffect(() => {
            if (
                localStorage.theme === "dark" ||
                (!("theme" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
            ) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            state.actions.identificateUser(state.store.token);
            const objeto = {
                nombre: "Raul",
                apellido: "Bien"
            };
            // usuario(objeto);
            bien(1);
        }, []);

        // The initial value for the context is not null anymore, but the current state of this component,
        // the context will now have a getStore, getActions and setStore functions available, because they were declared
        // on the state of this component
        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };
    return StoreWrapper;
};

export default injectContext;
