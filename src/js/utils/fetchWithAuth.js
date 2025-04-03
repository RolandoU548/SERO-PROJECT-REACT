export const fetchWithAuth = async (
    url,
    options = {},
    accessToken,
    setAccessToken
) => {
    const authOptions = {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${accessToken}`
        }
    };

    try {
        const response = await fetch(url, authOptions);

        if (response.status === 403) {
            const errorData = await response.json();

            if (
                errorData?.message &&
                (errorData.message === "Invalid token" ||
                    errorData.message === "Expired token")
            ) {
                // Intentar refrescar el token
                try {
                    console.log("se intenta refrescar el token")
                    const newAccessToken = await handleRefreshToken(setAccessToken);

                    // Reintentar la petición original con el nuevo token
                    const retryOptions = {
                        ...authOptions,
                        headers: {
                            ...authOptions.headers,
                            Authorization: `Bearer ${newAccessToken}`
                        }
                    };
                    const retryResponse = await fetch(url, retryOptions);
                    return await retryResponse.json();
                } catch (refreshError) {
                    console.error("Error refreshing token:", refreshError.message);
                    alert(
                        "Tu sesión ha expirado. Por favor, inicia sesión nuevamente."
                    );
                    window.location.href = "/login";
                }
            }
        }

        return await response.json();
    } catch (error) {
        if (error.name === "TypeError") {
            alert(
                "No se pudo conectar con el servidor. Por favor, verifica tu conexión a Internet."
            );
        } else {
            console.error("Error inesperado:", error);
            alert(
                "Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde."
            );
        }
        window.location.href = "/login";
    }
};

const handleRefreshToken = async (setAccessToken) => {
    const refreshResponse = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/auth/refreshAccessToken",
        { method: "POST", credentials: "include" }
    );

    const refreshData = await refreshResponse.json();

    if (refreshResponse.ok) {
        const { accessToken } = refreshData;
        setAccessToken({ accessToken });
        return accessToken;
    } else {
        console.error("Error refreshing token:", refreshData.message);
        // Manejo específico cuando el refreshToken es inválido o expiró
        if (
            refreshData.message === "Expired token" ||
            refreshData.message === "Invalid token" ||
            refreshData.message === "User not found"
        ) {
            alert(
                "Tu sesión ha expirado. Por favor, inicia sesión nuevamente."
            );
            window.location.href = "/login"; // Redirige al login
            return;
        }
        throw new Error(refreshData.message || "Error refreshing token");
    }
};
