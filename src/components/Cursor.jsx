import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  // Spotlight gets a short trailing lag; the dot itself tracks 1:1 —
  // any spring on the dot reads as input latency.
  const lx = useSpring(x, { stiffness: 260, damping: 30, mass: 0.4 })
  const ly = useSpring(y, { stiffness: 260, damping: 30, mass: 0.4 })

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!fine.matches) return
    setEnabled(true)

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setActive(Boolean(e.target.closest('a, button, [data-hover]')))
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  if (!enabled) return null
  return (
    <>
      <motion.div className="cursor-spotlight" style={{ x: lx, y: ly }} aria-hidden="true" />
      <motion.div className="cursor" style={{ x, y }} aria-hidden="true">
        <span className={`cursor-dot${active ? ' is-active' : ''}`} />
      </motion.div>
    </>
  )
}
