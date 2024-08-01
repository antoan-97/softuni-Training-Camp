const baseUrl = 'http://localhost:3030/data';

const getToken = () => {
    const token = localStorage.getItem('accessToken');
    console.log('Retrieved token:', token); // Log the token
    return token;
};

export const create = async (fighterData) => {
    const token = getToken(); // Retrieve token from local storage

    if (!token) {
        throw new Error('No access token found');
    }

    const response = await fetch(`${baseUrl}/fighters`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token // Use X-Authorization header
        },
        body: JSON.stringify(fighterData)
    });

    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }

    const result = await response.json();
    return result;
};

export const getAll = async () => {
    const response = await fetch(`${baseUrl}/fighters`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    });

    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }

    const result = await response.json();
    return result;
};

export const getOne = async (fighterId) => {
    const response = await fetch(`${baseUrl}/fighters/${fighterId}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    });

    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }

    const result = await response.json();
    return result;
};


export const update = async (fighterId, fighterData) => {
    const token = getToken(); // Retrieve token from local storage

    if (!token) {
        throw new Error('No access token found');
    }


    const response = await fetch(`${baseUrl}/fighters/${fighterId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(fighterData)
    });

    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }

    const result = await response.json();
    return result;

};

export const remove = async (fighterId) => {
    const token = getToken();

    try {
        const response = await fetch(`${baseUrl}/fighters/${fighterId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': token
            },
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            console.error('Error response:', errorResponse);
            throw new Error('Failed to delete fighter')
        }
    } catch (error) {
        console.log('Error deleting fighter');
        throw error;
    }
};

export const signUpForFighter = async (fighterId, userId) => {
    const token = getToken()

    if (!token) {
        throw new Error('No acces token found!')
    }
    console.log('Signing up with payload:', { userId });

    const response = await fetch(`${baseUrl}/signup`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ userId, fighterId })
    });

    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }

    const result = await response.json();

    return result
};


export const checkSignUpStatus = async (userId, fighterId) => {
    const response = await fetch(`${baseUrl}/signup`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });

    if (!response.ok) {
        if (response.status === 404) {
            // Handle the case where no data is found
            console.log('No sign-up records found for this user and fighter.');
            return []; // Return an empty array or similar
        }
        throw new Error('Network response was not ok ' + response.statusText);
    }
    const result = await response.json();

    return result;
}

