import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import { GITHUB } from '../data.js'

const links = [
  ['Work', '#work'],
  ['Skills', '#skills'],
  ['About', '#about'],
  ['Contact', '#contact'],
]

export default function Nav() {
  const { scrollYProgress } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const cur = window.scrollY
      setScrolled(cur > 24)
      setHidden(cur > last && cur > 160)
      last = cur
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        }
      },
      { rootMargin: '-35% 0px -60% 0px' },
    )
    links.forEach(([, href]) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
      <motion.header
        className={`nav${scrolled ? ' is-scrolled' : ''}`}
        animate={{ y: hidden && !open ? '-100%' : '0%' }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <a href="#top" className="nav-logo" aria-label="Jeffrey William — home">
          <span className="logo-mark mono">J/W</span>
          <span className="logo-sub mono">jeffrey william · applied ai engineer</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          {links.map(([label, href]) => (
            <a key={href} href={href} className={active === href ? 'is-active' : undefined}>
              {label}
            </a>
          ))}
          <a href={GITHUB} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </nav>
        <a href="#contact" className="status-badge">
          <span className="pulse-dot" aria-hidden="true" />
          Open to Work
        </a>
        <button
          className={`nav-burger${open ? ' is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {[...links, ['GitHub ↗', GITHUB]].map(([label, href], i) => (
              <motion.a
                key={href}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i + 0.1 }}
              >
                {label}
              </motion.a>
            ))}
            <motion.div
              className="status-badge overlay-badge"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              <span className="pulse-dot" aria-hidden="true" /> Open to Work
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
