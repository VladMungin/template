import { useEffect } from 'react'
import { useSetAtom } from 'jotai'
import { userAtom, accessTokenAtom } from '@/entities/auth'

export const WithAuth = ({ children }: { children: React.ReactNode }) => {
  const setUser = useSetAtom(userAtom)
  const setAccessToken = useSetAtom(accessTokenAtom)

  useEffect(() => {
    // Восстанавливаем состояние авторизации из localStorage
    const savedToken = localStorage.getItem('accessToken')
    const savedUser = localStorage.getItem('user')

    if (savedToken && savedUser) {
      try {
        setAccessToken(savedToken)
        setUser(JSON.parse(savedUser))
      } catch (error) {
        // Если данные повреждены, очищаем их
        localStorage.removeItem('accessToken')
        localStorage.removeItem('user')
      }
    }
  }, [setUser, setAccessToken])

  return <>{children}</>
}
