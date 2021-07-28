import { instance } from '@helpers/instance'

export const get = (url, params) => {
  return instance.get(url, params).then((res) => res.data)
}
