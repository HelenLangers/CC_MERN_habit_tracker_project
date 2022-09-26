const baseURL = 'http://localhost:9000/api/entries/'

export const getEntries = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postEntry = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const updateEntry = (entry) => {
    const {_id, ...entryWithoutId} = entry
    return fetch(baseURL + _id, {
        method: 'PUT',
        body: JSON.stringify(entryWithoutId),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
}

export const deleteEntry = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}