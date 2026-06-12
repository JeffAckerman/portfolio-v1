import { useEffect, useRef } from 'react'

function hexToRgb(hex) {
  const h = hex.replace('#', '').trim()
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h
  const n = parseInt(full, 16)
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`
}

export default function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf
    let particles = []
    const mouse = { x: -9999, y: -9999 }
    let colors = { accent: '0, 229, 204', line: '140, 150, 170' }

    function readColors() {
      const cs = getComputedStyle(document.documentElement)
      const accent = cs.getPropertyValue('--accent')
      const muted = cs.getPropertyValue('--muted')
      if (accent.includes('#')) colors.accent = hexToRgb(accent)
      if (muted.includes('#')) colors.line = hexToRgb(muted)
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(90, Math.floor(canvas.offsetWidth / 16))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.4 + 0.6,
      }))
    }

    function frame() {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const d2 = dx * dx + dy * dy
        if (d2 < 16000) {
          const d = Math.sqrt(d2) || 1
          p.vx += (dx / d) * 0.06
          p.vy += (dy / d) * 0.06
        }
        p.vx = Math.max(-0.6, Math.min(0.6, p.vx))
        p.vy = Math.max(-0.6, Math.min(0.6, p.vy))
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < 13000) {
            const alpha = (1 - d2 / 13000) * 0.16
            ctx.strokeStyle = `rgba(${colors.line}, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const p of particles) {
        ctx.fillStyle = `rgba(${colors.accent}, 0.5)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(frame)
    }

    function onMouse(e) {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
    }
    function onLeave() {
      mouse.x = -9999
      mouse.y = -9999
    }

    // Re-read palette when the theme attribute flips.
    const themeObserver = new MutationObserver(readColors)
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    readColors()
    resize()
    if (!reduced) {
      frame()
      window.addEventListener('resize', resize)
      window.addEventListener('mousemove', onMouse)
      window.addEventListener('mouseout', onLeave)
    } else {
      // Static render for reduced-motion users
      frame()
      cancelAnimationFrame(raf)
    }
    return () => {
      cancelAnimationFrame(raf)
      themeObserver.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('mouseout', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />
}
