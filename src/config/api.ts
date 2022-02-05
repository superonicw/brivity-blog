import {
  SignInRequestPayload,
  SignUpRequestPayload,
  GetCommentsRequestPayload,
} from 'config/types'

export const API_CONFIG = {
  signIn: (payload: SignInRequestPayload) => ({
    method: 'POST',
    url: '/users/sign_in',
    data: { user: payload },
  }),
  signUp: (payload: SignUpRequestPayload) => ({
    method: 'POST',
    url: '/users',
    data: { user: payload },
  }),
  getPosts: (params: any) => ({
    method: 'GET',
    url: '/posts',
    params,
  }),
  getPost: (id: string) => ({
    method: 'GET',
    url: `/posts/${id}`,
  }),
  getComments: ({ id, params }: GetCommentsRequestPayload) => ({
    method: 'GET',
    url: `/posts/${id}/comments`,
    params,
  }),
}
