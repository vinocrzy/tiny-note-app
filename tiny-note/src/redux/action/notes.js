import axios from 'axios';

const IP = 'http://localhost:3001/api';


export const getNotes = () => {
    return {
        type: 'GET_NOTES',
        payload: axios.get(`${IP}/notes`)
    }
}


export const insertNotes = (data) => {
    return {
        type: 'INSERT_NOTES',
        payload: axios.post(`${IP}/notes`, data)
    }
}

export const updateNotes = (data) => {
    return {
        type: 'UPDATE_NOTES',
        payload: axios.put(`${IP}/notes/${data.id}`, data)
    }
}

export const deleteNotes = (id) => {
    return {
        type: 'DELETE_NOTES',
        payload: axios.delete(`${IP}/notes/${id}`)
    }
}

