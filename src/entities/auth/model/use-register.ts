import { useMutation } from '@tanstack/react-query'
import { register } from './_request'
import type { RegisterRequest } from './_types'
import { useLocalStorage } from '@/shared/hooks'
import { useCookies } from 'react-cookie'

export const useRegister = () => {
  const { set } = useLocalStorage('user')
  const [_, setCookie] = useCookies(['accessToken'])

  return useMutation({
    mutationFn: (data: RegisterRequest) => register(data),
    onSuccess: response => {
      set(response.user)
      setCookie('accessToken', response.accessToken)
    },
  })
}
