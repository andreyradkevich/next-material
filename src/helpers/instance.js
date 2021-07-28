import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://www.boredapi.com/api/',
  timeout: 5000
})
