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
  SignInRequestPayload,
  SignUpRequestPayload,
  User,
} from 'types'
import { API_CONFIG } from 'config/api'
import {
  AppReducer,
  INITIAL_STATE,
  signIn,
  signInFail,
  signInSuccess,
  signUp,
  signUpFail,
  signUpSuccess,
  signOut,
} from 'store/reducers'
import { apiRequest } from 'utils'

export interface AppContextType {
  user: {
    profile: User | null
    loading: boolean
    error: any
  }
  posts: {
    data: Post[]
    meta: Pagination | {}
    loading: boolean
  }
  post: {
    data: Post | null
    loading: boolean
  }
  onSignIn: (data: SignInRequestPayload) => void
  onSignUp: (data: SignUpRequestPayload) => void
  onSignOut: () => void
}

export interface AppProviderType {
  children: ReactNode
}

const AppContext = createContext<AppContextType>(null!)
AppContext.displayName = 'App'

export const AppProvider = ({ children }: AppProviderType) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE)

  const onSignIn = useCallback(payload => {
    dispatch(signIn(payload))

    apiRequest(API_CONFIG.signIn(payload))
      .then(({ data }) => {
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
    dispatch(signOut())
  }, [])

  return (
    <AppContext.Provider value={{ ...state, onSignIn, onSignUp, onSignOut }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppProvider = () => useContext(AppContext)
