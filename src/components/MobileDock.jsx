import { useEffect, useState } from 'react'

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const items = [
  {
    id: 'work',
    label: 'Work',
    icon: (
      <g {...stroke}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </g>
    ),
  },
  {
    id: 'about',
    label: 'About',
    icon: (
      <g {...stroke}>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-3.9 3.6-6.5 8-6.5s8 2.6 8 6.5" />
      </g>
    ),
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: (
      <g {...stroke}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </g>
    ),
  },
]

export default function MobileDock() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-35% 0px -60% 0px' },
    )
    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="mobile-dock" aria-label="Section navigation">
      {items.map(({ id, label, icon }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`dock-btn${active === id ? ' is-active' : ''}`}
          aria-label={label}
        >
          <span className="dock-dot" aria-hidden="true" />
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            {icon}
          </svg>
        </a>
      ))}
    </nav>
  )
}
