import { useMutation } from '@tanstack/react-query'
import { register } from './_request'
import { useSetAtom } from 'jotai'
import { userAtom, accessTokenAtom } from './_store'
import type { RegisterRequest } from './_types'

export const useRegister = () => {
  const setUser = useSetAtom(userAtom)
  const setAccessToken = useSetAtom(accessTokenAtom)

  return useMutation({
    mutationFn: (data: RegisterRequest) => register(data),
    onSuccess: response => {
      setUser(response.user)
      setAccessToken(response.accessToken)
      // Сохраняем токен в localStorage
      localStorage.setItem('accessToken', response.accessToken)
      localStorage.setItem('user', JSON.stringify(response.user))
    },
  })
}
