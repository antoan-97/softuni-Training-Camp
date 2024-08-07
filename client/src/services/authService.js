
const baseUrl = `${import.meta.env.VITE_API_URL}/users`

const getToken = () => {
    const token = localStorage.getItem('accessToken');
    console.log('Retrieved token:', token); // Log the token
    return token;
};

export const login = async (email, password) => {
    const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })


    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
    }

    const data = await response.json();
    return data
}


export const register = async (email, password) => {
    const response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })


    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
    }

    const data = await response.json();
    return data
}


export const logout = async () => {
    const token = getToken();

    const headers = {
        'content-type': 'application/json'
    };

    if (token) {
        headers['X-Authorization'] = token; // Add the token to headers if it exists
    }

    try {
        const response = await fetch(`${baseUrl}/logout`, {
            method: 'GET',
            headers: headers,
        });

        if (response.status === 204) {
            return {}; // Logout successful
        }

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to logout: ${errorText}`);
        }

        const result = response
        return result;
    } catch (error) {
        throw new Error(`Failed to logout: ${error.message}`);
    }
}