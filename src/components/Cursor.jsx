import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  // Spring gives the lerp-style lag behind the real pointer.
  const sx = useSpring(x, { stiffness: 400, damping: 32, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 400, damping: 32, mass: 0.5 })
  // Slower spring ≈ the spec'd ~100ms trailing spotlight.
  const lx = useSpring(x, { stiffness: 120, damping: 22, mass: 0.6 })
  const ly = useSpring(y, { stiffness: 120, damping: 22, mass: 0.6 })

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!fine.matches) return
    setEnabled(true)

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setActive(Boolean(e.target.closest('a, button, [data-hover]')))
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  if (!enabled) return null
  return (
    <>
      <motion.div className="cursor-spotlight" style={{ x: lx, y: ly }} aria-hidden="true" />
      <motion.div className="cursor" style={{ x: sx, y: sy }} aria-hidden="true">
        <span className={`cursor-dot${active ? ' is-active' : ''}`} />
      </motion.div>
    </>
  )
}
