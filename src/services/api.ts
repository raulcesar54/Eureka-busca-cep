import axios from 'axios'

export const cepApi = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
})
export const localApi = axios.create({
    baseURL:'http://localhost:3333/'
})