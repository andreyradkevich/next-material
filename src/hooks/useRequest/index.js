import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://www.boredapi.com/api/',
  timeout: 5000
})

const useRequest = () => {
  const get = (url, params) => {
    return instance.get(url, params).then((res) => res.data)
  }

  return {
    get
  }
}

export default useRequest
