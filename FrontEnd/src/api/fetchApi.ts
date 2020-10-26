import axios from 'axios'
import ITechnology, { NewTechnology } from '../model/technology'

const API_URL = 'http://localhost:8080/technologies'

export const getTechnologies = async (): Promise<ITechnology[]> => {
    const { data } = await axios.get(API_URL)
    return data
}

export const deleteTechnology = async (id: string): Promise<void> => {
    const { data } = await axios.delete(`${API_URL}/${id}`)
    return data
}

export const createTechnology = async (form: NewTechnology): Promise<ITechnology> => {
    const { data } = await axios.post(API_URL, form)
    return data
}