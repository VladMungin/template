import { validateCredentials, userExists, createUser } from '@/shared/api/mocks/auth'
import type { LoginRequest, RegisterRequest, AuthResponse } from './_types'

export const login = async (data: LoginRequest): Promise<AuthResponse> => {
  // Для демонстрации используем моки
  const user = validateCredentials(data.email, data.password)

  if (!user) {
    throw new Error('Неверный email или пароль')
  }

  const token = `mock-token-${Date.now()}`

  return {
    accessToken: token,
    user,
  }
}

export const register = async (data: RegisterRequest): Promise<AuthResponse> => {
  // Для демонстрации используем моки
  if (userExists(data.email)) {
    throw new Error('Пользователь уже существует')
  }

  const user = createUser(data.email, data.password)
  const token = `mock-token-${Date.now()}`

  return {
    accessToken: token,
    user,
  }
}
