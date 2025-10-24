import { useSetAtom } from 'jotai'
import { userAtom, accessTokenAtom } from './_store'

export const useLogout = () => {
  const setUser = useSetAtom(userAtom)
  const setAccessToken = useSetAtom(accessTokenAtom)

  return () => {
    setUser(null)
    setAccessToken(null)
    localStorage.removeItem('accessToken')
    localStorage.removeItem('user')
  }
}
