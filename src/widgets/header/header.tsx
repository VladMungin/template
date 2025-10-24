import { useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTheme } from '@/app/providers/_with-theme.tsx'
import { Button } from '@/shared/ui'
import { Moon, Sun } from 'lucide-react'

export const Header = () => {
  const { scrollY } = useScroll()
  const { theme, setTheme } = useTheme()

  const isDark = useMemo(() => theme === 'dark', [theme])

  const borderRadius = useTransform(scrollY, [0, 100], [24, 0])

  const borderColor = useTransform(
    scrollY,
    [0, 100],
    [
      isDark ? 'rgba(51, 65, 85, 0.5)' : 'rgba(226, 232, 240, 0.8)',
      isDark ? 'rgba(51, 65, 85, 0.8)' : 'rgba(226, 232, 240, 0.9)',
    ]
  )

  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    [
      isDark
        ? '0 4px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)'
        : '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      isDark
        ? '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)'
        : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    ]
  )

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius,

        borderBottom: '1px solid',
        borderColor,
        boxShadow,
      }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center space-x-3 cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                isDark
                  ? 'bg-gradient-to-br from-blue-400 via-purple-400 to-cyan-400'
                  : 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'
              }`}
              whileHover={{ rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={`font-bold text-sm ${isDark ? 'text-gray-900' : 'text-white'}`}>
                YB
              </span>
            </motion.div>
            <motion.span
              className={`text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                isDark ? 'from-blue-200 to-cyan-200' : 'from-gray-900 to-gray-700'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              YourBrand
            </motion.span>
          </motion.div>
          {/*  тут ссылки */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer group"
            whileHover={{ scale: 1.11 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              className="cursor-pointer"
              onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark')
              }}
              variant="outline"
            >
              {isDark ? <Sun /> : <Moon />}
            </Button>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  )
}
