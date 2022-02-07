import {
  SignInRequestPayload,
  SignUpRequestPayload,
  GetCommentsRequestPayload,
  CreatePostRequestPayload,
  UpdatePostRequestPayload,
  CreateCommentRequestPayload,
  UpdateCommentRequestPayload,
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
  getComments: ({ id, params }: GetCommentsRequestPayload) => ({
    method: 'GET',
    url: `/posts/${id}/comments`,
    params,
  }),
  createComment: (payload: CreateCommentRequestPayload) => ({
    method: 'POST',
    url: '/comments',
    data: { comment: payload },
  }),
  updateComment: (payload: UpdateCommentRequestPayload) => ({
    method: 'PATCH',
    url: `/comments/${payload.id}`,
    data: { comment: payload.data },
  }),
  deleteComment: (id: number) => ({
    method: 'DELETE',
    url: `/comments/${id}`,
  }),
}
