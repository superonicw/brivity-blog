import { Action } from 'types'
import { createAction, failAction, successAction } from 'utils'

/* Constants */
export const SIGN_IN = 'SIGN_IN'

export const SIGN_UP = 'SIGN_UP'

export const SIGN_OUT = 'SIGN_OUT'

/* Actions */
export const signIn = createAction(SIGN_IN)
export const signInSuccess = createAction(successAction(SIGN_IN))
export const signInFail = createAction(failAction(SIGN_IN))

export const signUp = createAction(SIGN_UP)
export const signUpSuccess = createAction(successAction(SIGN_UP))
export const signUpFail = createAction(failAction(SIGN_UP))

export const signOut = createAction(SIGN_OUT)

export const INITIAL_STATE = {
  user: {
    profile: null,
    loading: false,
    error: null,
  },
  posts: {
    data: [],
    meta: {},
    loading: false,
  },
  post: {
    data: null,
    loading: false,
  },
}

export const AppReducer = (
  state = INITIAL_STATE,
  { type, payload }: Action,
) => {
  switch (type) {
    case SIGN_IN:
    case SIGN_UP:
      return {
        ...state,
        user: {
          profile: null,
          loading: true,
          error: null,
        },
      }

    case successAction(SIGN_IN):
    case successAction(SIGN_UP):
      return {
        ...state,
        user: {
          ...state.user,
          profile: payload,
          loading: false,
        },
      }

    case failAction(SIGN_IN):
    case failAction(SIGN_UP):
      return {
        ...state,
        user: {
          ...state.user,
          error: payload,
          loading: false,
        },
      }

    case SIGN_OUT:
      return {
        ...state,
        user: INITIAL_STATE.user,
      }

    default:
      return state
  }
}
