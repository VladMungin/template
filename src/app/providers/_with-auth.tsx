import { useEffect } from 'react'
import { useLocalStorage } from '@/shared/hooks'
import { useCookies } from 'react-cookie'

export const WithAuth = ({ children }: { children: React.ReactNode }) => {
  const { value: savedUser, set: setUser, remove } = useLocalStorage('user')
  const [cookies, setCookie, removeCookie] = useCookies(['accessToken'])

  useEffect(() => {
    if (cookies.accessToken && savedUser) {
      try {
        setCookie('accessToken', cookies.accessToken)
        setUser(savedUser)
      } catch (error) {
        removeCookie('accessToken')
        remove()
      }
    }
  }, [setUser, setCookie])

  return <>{children}</>
}
