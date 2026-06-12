import { EMAIL, LINKEDIN, GITHUB } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <span className="mono">© {new Date().getFullYear()} Jeffrey William</span>
      <span className="mono footer-meta">
        Built with React · Framer Motion · Deployed on Vercel
      </span>
      <div className="footer-links mono">
        <a href={`mailto:${EMAIL}`}>Email</a>
        <a href={LINKEDIN} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={GITHUB} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  )
}
