export interface User {
  id: string
  email: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string
  password: string
}

export interface AuthResponse {
  accessToken: string
  user: User
}

export interface AuthError {
  message: string
  code: string
}
