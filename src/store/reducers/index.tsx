import update from 'immutability-helper'
import { Action } from 'config/types'
import { createAction, failAction, successAction } from 'utils'
import { API_TOKEN_KEY, USER_PROFILE } from 'config/base'

/* Constants */
export const SIGN_IN = 'SIGN_IN'
export const SIGN_UP = 'SIGN_UP'
export const SIGN_OUT = 'SIGN_OUT'

export const GET_POSTS = 'GET_POSTS'
export const CREATE_POST = 'CREATE_POST'
export const GET_POST = 'GET_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'

export const GET_COMMENTS = 'GET_COMMENTS'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

/* Actions */
export const signIn = createAction(SIGN_IN)
export const signInSuccess = createAction(successAction(SIGN_IN))
export const signInFail = createAction(failAction(SIGN_IN))

export const signUp = createAction(SIGN_UP)
export const signUpSuccess = createAction(successAction(SIGN_UP))
export const signUpFail = createAction(failAction(SIGN_UP))

export const signOut = createAction(SIGN_OUT)

export const getPosts = createAction(GET_POSTS)
export const getPostsSuccess = createAction(successAction(GET_POSTS))
export const getPostsFail = createAction(failAction(GET_POSTS))

export const createPost = createAction(CREATE_POST)
export const createPostSuccess = createAction(successAction(CREATE_POST))
export const createPostFail = createAction(failAction(CREATE_POST))

export const getPost = createAction(GET_POST)
export const getPostSuccess = createAction(successAction(GET_POST))
export const getPostFail = createAction(failAction(GET_POST))

export const updatePost = createAction(UPDATE_POST)
export const updatePostSuccess = createAction(successAction(UPDATE_POST))
export const updatePostFail = createAction(failAction(UPDATE_POST))

export const deletePost = createAction(DELETE_POST)
export const deletePostSuccess = createAction(successAction(DELETE_POST))
export const deletePostFail = createAction(failAction(DELETE_POST))

export const getComments = createAction(GET_COMMENTS)
export const getCommentsSuccess = createAction(successAction(GET_COMMENTS))
export const getCommentsFail = createAction(failAction(GET_COMMENTS))

export const createComment = createAction(CREATE_COMMENT)
export const createCommentSuccess = createAction(successAction(CREATE_COMMENT))
export const createCommentFail = createAction(failAction(CREATE_COMMENT))

export const updateComment = createAction(UPDATE_COMMENT)
export const updateCommentSuccess = createAction(successAction(UPDATE_COMMENT))
export const updateCommentFail = createAction(failAction(UPDATE_COMMENT))

export const deleteComment = createAction(DELETE_COMMENT)
export const deleteCommentSuccess = createAction(successAction(DELETE_COMMENT))
export const deleteCommentFail = createAction(failAction(DELETE_COMMENT))

const INITIAL_STATE = {
  user: {
    profile: null,
    loading: false,
    error: null,
  },
  posts: {
    posts: [],
    meta: { current_page: 1, per_page: 30, total_entries: 1 },
    loading: false,
    error: null,
  },
  post: {
    post: null,
    loading: false,
    error: null,
  },
  comments: {
    comments: [],
    meta: { current_page: 1, per_page: 30, total_entries: 1 },
    loading: false,
    error: null,
  },
}

export const getInitialState = () => {
  try {
    const token = localStorage.getItem(API_TOKEN_KEY)
    const profile = JSON.parse(localStorage.getItem(USER_PROFILE) || '')

    if (token && profile.id && profile.display_name) {
      return {
        ...INITIAL_STATE,
        user: {
          ...INITIAL_STATE.user,
          profile,
        },
      }
    }
  } catch {}
  return INITIAL_STATE
}

export const AppReducer = (
  state = getInitialState(),
  { type, payload }: Action,
) => {
  switch (type) {
    case SIGN_IN:
    case SIGN_UP:
      return update(state, {
        user: {
          $set: {
            profile: null,
            loading: true,
            error: null,
          },
        },
      })
    case successAction(SIGN_IN):
    case successAction(SIGN_UP):
      return update(state, {
        user: {
          $merge: {
            profile: payload,
            loading: false,
          },
        },
      })

    case failAction(SIGN_IN):
    case failAction(SIGN_UP):
      return update(state, {
        user: {
          $merge: {
            loading: false,
            error: payload,
          },
        },
      })

    case SIGN_OUT:
      return update(state, {
        user: {
          $set: INITIAL_STATE.user,
        },
      })

    case GET_POSTS:
      return update(state, {
        posts: {
          $merge: {
            loading: true,
            error: null,
          },
        },
      })

    case successAction(GET_POSTS):
      return update(state, {
        posts: {
          $merge: {
            ...payload,
            loading: false,
          },
        },
      })

    case failAction(GET_POSTS):
      return update(state, {
        posts: {
          $merge: {
            loading: false,
            error: payload,
          },
        },
      })

    case GET_POST:
      return update(state, {
        post: {
          $merge: {
            loading: true,
            error: null,
          },
        },
        comments: {
          $set: INITIAL_STATE.comments,
        },
      })

    case successAction(GET_POST):
      return update(state, {
        post: {
          $merge: {
            ...payload,
            loading: false,
          },
        },
      })

    case failAction(GET_POST):
      return update(state, {
        post: {
          $merge: {
            loading: false,
            error: payload,
          },
        },
      })

    case GET_COMMENTS:
      return update(state, {
        comments: {
          $merge: {
            loading: true,
            error: null,
          },
        },
      })

    case successAction(GET_COMMENTS):
      return update(state, {
        comments: {
          $merge: {
            ...payload,
            loading: false,
          },
        },
      })

    case failAction(GET_COMMENTS):
      return update(state, {
        comments: {
          $merge: {
            loading: false,
            error: payload,
          },
        },
      })

    case CREATE_POST:
      return update(state, {
        post: {
          $merge: {
            loading: true,
            error: null,
          },
        },
      })

    case successAction(CREATE_POST):
      return update(state, {
        post: {
          $merge: {
            loading: false,
          },
        },
      })

    case failAction(CREATE_POST):
      return update(state, {
        post: {
          $merge: {
            loading: false,
            error: payload,
          },
        },
      })

    case UPDATE_POST:
    case DELETE_POST:
      return update(state, {
        posts: {
          $merge: {
            loading: true,
            error: null,
          },
        },
      })

    case successAction(UPDATE_POST):
    case successAction(DELETE_POST):
      return update(state, {
        posts: {
          $merge: {
            loading: false,
          },
        },
      })

    case failAction(UPDATE_POST):
    case failAction(DELETE_POST):
      return update(state, {
        posts: {
          $merge: {
            loading: false,
            error: payload,
          },
        },
      })

    default:
      return state
  }
}
