export interface User {
  id: number
  display_name: string
}

export interface Post {
  id: number
  title: string
  body: string
  created_at: string
  updated_at: string
  comment_count: number
  user: User
}

export interface Comment {
  id: number
  content: string
  created_at: string
  updated_at: string
  user: User
}

export interface Pagination {
  current_page: number
  per_page: number
  total_entries: number
}

export interface Action {
  type: string
  payload: any
}

export interface SignInRequestPayload {
  email: string
  password: string
}

export interface SignUpRequestPayload {
  email: string
  password: string
  display_name: string
}

export interface GetCommentsRequestPayload {
  id: number
  params: any
}

export interface CreatePostRequestPayload {
  title: string
  body: string
}

export interface UpdatePostRequestPayload {
  id: number
  data: {
    title: string
    body: string
  }
}
