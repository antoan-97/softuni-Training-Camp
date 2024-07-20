const baseUrl = 'http://localhost:3030/data/fighters';

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

    const response = await fetch(baseUrl, {
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
    const response = await fetch(baseUrl, {
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
    const response = await fetch(`${baseUrl}/${fighterId}`, {
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
