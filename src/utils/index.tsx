import axios from 'axios'

export const createAction = (action: string) => (payload?: any) => ({
  type: action,
  payload,
})

export const successAction = (action: string) => `${action}/success`
export const failAction = (action: string) => `${action}/fail`

export const apiRequest = (config: any) => axios.request(config)
