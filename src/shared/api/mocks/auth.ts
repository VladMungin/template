// Простые моки для тестирования авторизации
export const mockUsers = [
  {
    id: '1',
    email: 'admin@gmail.com',
    password: '123456',
  },
  {
    id: '2',
    email: 'user@gmail.com',
    password: 'password',
  },
]

export const mockTokens = new Map<string, string>()

// Функция для проверки учетных данных
export const validateCredentials = (email: string, password: string) => {
  const user = mockUsers.find(u => u.email === email && u.password === password)
  return user ? { id: user.id, email: user.email } : null
}

// Функция для проверки существования пользователя
export const userExists = (email: string) => {
  return mockUsers.some(u => u.email === email)
}

// Функция для создания нового пользователя
export const createUser = (email: string, password: string) => {
  const newUser = {
    id: String(mockUsers.length + 1),
    email,
    password,
  }
  mockUsers.push(newUser)
  return { id: newUser.id, email: newUser.email }
}
