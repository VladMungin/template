import type { ReactNode } from 'react'
import { Provider } from 'jotai'

export const WithJotai = ({ children }: { children: ReactNode }) => {
  return <Provider>{children}</Provider>
}
