import { json } from "react-router-dom";

const baseUrl = 'http://localhost:3030/data/fighters'

export const create = async (fighterData) => {

    const resposne = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(fighterData)
    })

    const result = await resposne.json();

    return result;
}


export const getAll = async () => {
    const response = await fetch(baseUrl, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    })

    if (!response.ok) {
        throw new Error('Network response was not ok' + response.statusText);
    }

    const result = await response.json()


    return result;
}

export const getOne = async (fighterId) => {
    const response = await fetch(`${baseUrl}/${fighterId}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    });

    if (!response.ok) {
        throw new Error('Network response was not ok' + response.statusText);
    }

    const result = await response.json()


    return result
}