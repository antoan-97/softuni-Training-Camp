const baseUrl = 'http://localhost:3030/jsonstore'

export const create = async (fighterData) => {

    const resposne = await fetch(`${baseUrl}/fighters`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(fighterData)
    })

    const result = await resposne.json();

    return result;
}