import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const sun = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5.3 5.3l1.7 1.7M17 17l1.7 1.7M18.7 5.3L17 7M7 17l-1.7 1.7" />
  </svg>
)
const moon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
    <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z" />
  </svg>
)

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light',
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {}
  }, [theme])

  const next = theme === 'dark' ? 'light' : 'dark'
  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          className="theme-toggle-icon"
          initial={{ opacity: 0, rotate: -50, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 50, scale: 0.6 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          {theme === 'dark' ? moon : sun}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
