import { SignInRequestPayload, SignUpRequestPayload } from 'types'

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
}
