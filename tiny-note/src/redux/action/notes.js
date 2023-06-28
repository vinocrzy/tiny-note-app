import axios from 'axios';

const IP = 'http://192.168.6.181:3000';


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
        payload: axios.patch(`${IP}/notes/${data.id}`, data)
    }
}

export const deleteNotes = (id) => {
    return {
        type: 'DELETE_NOTES',
        payload: axios.delete(`${IP}/notes/${id}`)
    }
}

