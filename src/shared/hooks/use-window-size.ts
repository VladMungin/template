import { useLayoutEffect, useState } from 'react'
import { MOBILE_WIDTH } from '@/shared/constants'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width?: number
    height?: number
    isMobile?: boolean
    isDesktop?: boolean
  }>({
    width: undefined,
    height: undefined,
    isMobile: undefined,
    isDesktop: undefined,
  })

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth <= MOBILE_WIDTH,
        isDesktop: window.innerWidth >= MOBILE_WIDTH
      })
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}
