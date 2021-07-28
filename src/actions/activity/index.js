import { get } from '@helpers/request'

export const getActivity = () => {
  return get('activity')
}
