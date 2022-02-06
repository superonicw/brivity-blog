import {
  SignInRequestPayload,
  SignUpRequestPayload,
  GetCommentsRequestPayload,
  CreatePostRequestPayload,
  UpdatePostRequestPayload,
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
  getPost: (id: number) => ({
    method: 'GET',
    url: `/posts/${id}`,
  }),
  getComments: ({ id, params }: GetCommentsRequestPayload) => ({
    method: 'GET',
    url: `/posts/${id}/comments`,
    params,
  }),
  createPost: (payload: CreatePostRequestPayload) => ({
    method: 'POST',
    url: '/posts',
    data: { post: payload },
  }),
  updatePost: (payload: UpdatePostRequestPayload) => ({
    method: 'PATCH',
    url: `/posts/${payload.id}`,
    data: { post: payload.data },
  }),
  deletePost: (id: number) => ({
    method: 'DELETE',
    url: `/posts/${id}`,
  }),
}
