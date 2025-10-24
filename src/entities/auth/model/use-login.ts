import { useMutation } from '@tanstack/react-query'
import { login } from './_request'
import type { LoginRequest } from './_types'
import { useLocalStorage } from '@/shared/hooks'
import { useCookies } from 'react-cookie'

export const useLogin = () => {
  const { set } = useLocalStorage('user')
  const [_, setCookie] = useCookies(['accessToken'])
  return useMutation({
    mutationFn: (data: LoginRequest) => login(data),
    onSuccess: response => {
      set(response.user)
      setCookie('accessToken', response.accessToken)
    },
  })
}
