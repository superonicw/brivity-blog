import {
  createContext,
  useContext,
  useCallback,
  useReducer,
  ReactNode,
} from 'react'
import {
  Pagination,
  Post,
  User,
  Comment,
  GetCommentsRequestPayload,
  SignInRequestPayload,
  SignUpRequestPayload,
  CreatePostRequestPayload,
  UpdatePostRequestPayload,
} from 'config/types'
import { API_CONFIG } from 'config/api'
import {
  AppReducer,
  signIn,
  signInFail,
  signInSuccess,
  signUp,
  signUpFail,
  signUpSuccess,
  signOut,
  getPosts,
  getPostsSuccess,
  getPostsFail,
  getPost,
  getPostSuccess,
  getPostFail,
  getComments,
  getCommentsSuccess,
  getCommentsFail,
  getInitialState,
  createPost,
  createPostSuccess,
  createPostFail,
  updatePost,
  updatePostSuccess,
  updatePostFail,
  deletePost,
  deletePostSuccess,
  deletePostFail,
} from 'store/reducers'
import { apiRequest } from 'utils'
import { API_TOKEN_KEY, USER_PROFILE } from 'config/base'

export interface AppContextType {
  user: {
    profile: User | null
    loading: boolean
    error: any
  }
  posts: {
    posts: Post[]
    meta: Pagination
    loading: boolean
    error: any
  }
  post: {
    post: Post | null
    loading: boolean
    error: any
  }
  comments: {
    comments: Comment[]
    meta: Pagination
    loading: boolean
    error: null
  }
  onSignIn: (payload: SignInRequestPayload) => void
  onSignUp: (payload: SignUpRequestPayload) => void
  onSignOut: () => void
  onGetPosts: (params?: any) => void
  onGetPost: (postId: number) => void
  onGetComments: (payload: GetCommentsRequestPayload) => void
  onCreatePost: (payload: CreatePostRequestPayload) => void
  onUpdatePost: (payload: UpdatePostRequestPayload) => void
  onDeletePost: (postId: number) => void
}

export interface AppProviderType {
  children: ReactNode
}

const AppContext = createContext<AppContextType>(null!)
AppContext.displayName = 'App'

export const AppProvider = ({ children }: AppProviderType) => {
  const [state, dispatch] = useReducer(AppReducer, getInitialState())

  const onSignIn = useCallback(payload => {
    dispatch(signIn(payload))

    apiRequest(API_CONFIG.signIn(payload))
      .then(({ data, headers }) => {
        localStorage.setItem(API_TOKEN_KEY, headers.authorization)
        localStorage.setItem(USER_PROFILE, JSON.stringify(data))
        dispatch(signInSuccess(data))
      })
      .catch(error => {
        dispatch(signInFail(error))
      })
  }, [])

  const onSignUp = useCallback(payload => {
    dispatch(signUp(payload))

    apiRequest(API_CONFIG.signUp(payload))
      .then(({ data }) => {
        dispatch(signUpSuccess(data))
      })
      .catch(error => {
        dispatch(signUpFail(error))
      })
  }, [])

  const onSignOut = useCallback(() => {
    localStorage.removeItem(API_TOKEN_KEY)
    localStorage.removeItem(USER_PROFILE)
    dispatch(signOut())
  }, [])

  const onGetPosts = useCallback(payload => {
    dispatch(getPosts(payload))

    apiRequest(API_CONFIG.getPosts(payload))
      .then(({ data }) => {
        dispatch(getPostsSuccess(data))
      })
      .catch(error => {
        dispatch(getPostsFail(error))
      })
  }, [])

  const onGetComments = useCallback(payload => {
    dispatch(getComments(payload))

    apiRequest(API_CONFIG.getComments(payload))
      .then(({ data }) => {
        dispatch(getCommentsSuccess(data))
      })
      .catch(error => {
        dispatch(getCommentsFail(error))
      })
  }, [])

  const onGetPost = useCallback(
    payload => {
      dispatch(getPost(payload))

      apiRequest(API_CONFIG.getPost(payload))
        .then(({ data }) => {
          dispatch(getPostSuccess(data))
          onGetComments({ id: payload })
        })
        .catch(error => {
          dispatch(getPostFail(error))
        })
    },
    [onGetComments],
  )

  const onCreatePost = useCallback(
    payload => {
      dispatch(createPost(payload))

      apiRequest(API_CONFIG.createPost(payload))
        .then(({ data }) => {
          dispatch(createPostSuccess(data))
          onGetPosts({ page: 1 })
        })
        .catch(error => {
          dispatch(createPostFail(error))
        })
    },
    [onGetPosts],
  )

  const onUpdatePost = useCallback(
    payload => {
      dispatch(updatePost(payload))

      apiRequest(API_CONFIG.updatePost(payload))
        .then(({ data }) => {
          dispatch(updatePostSuccess(data))
          onGetPosts({ page: state.posts.meta.current_page })
        })
        .catch(error => {
          dispatch(updatePostFail(error))
        })
    },
    [state.posts.meta.current_page, onGetPosts],
  )

  const onDeletePost = useCallback(
    payload => {
      dispatch(deletePost(payload))

      apiRequest(API_CONFIG.deletePost(payload))
        .then(({ data }) => {
          dispatch(deletePostSuccess(data))
          onGetPosts({ page: state.posts.meta.current_page })
        })
        .catch(error => {
          dispatch(deletePostFail(error))
        })
    },
    [state.posts.meta.current_page, onGetPosts],
  )

  return (
    <AppContext.Provider
      value={{
        ...state,
        onSignIn,
        onSignUp,
        onSignOut,
        onGetPosts,
        onGetPost,
        onGetComments,
        onCreatePost,
        onUpdatePost,
        onDeletePost,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppProvider = () => useContext(AppContext)
