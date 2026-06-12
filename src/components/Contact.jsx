import { useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import WordReveal from './WordReveal.jsx'
import Magnetic from './Magnetic.jsx'
import { EMAIL, LINKEDIN, GITHUB } from '../data.js'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  // mailto still fires; the clipboard copy is the fallback for users
  // without a configured mail client.
  function onEmailClick() {
    try {
      navigator.clipboard?.writeText(EMAIL).then(() => {
        setCopied(true)
        clearTimeout(timer.current)
        timer.current = setTimeout(() => setCopied(false), 2000)
      })
    } catch {}
  }

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <Reveal>
        <p className="section-kicker mono">Contact</p>
        <h2 className="contact-headline" id="contact-title">
          <WordReveal text="Let's build something" />{' '}
          <em className="gradient-text"><WordReveal text="that ships." startDelay={0.24} /></em>
        </h2>
        <p className="contact-sub">
          Open to Applied AI Engineer, AI Platform Engineer, and Full Stack AI
          Engineer roles — Chennai, Bangalore, or Remote.
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="contact-actions">
          <Magnetic>
            <span className="resume-wrap">
              <a className="btn btn-primary" href={`mailto:${EMAIL}`} onClick={onEmailClick}>
                {EMAIL}
              </a>
              {copied && (
                <span className="action-tip mono" role="status">
                  Email copied!
                </span>
              )}
            </span>
          </Magnetic>
          <Magnetic>
            <a className="btn btn-ghost" href={LINKEDIN} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </Magnetic>
          <Magnetic>
            <a className="btn btn-ghost" href={GITHUB} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </Magnetic>
        </div>
        <p className="contact-status mono">
          <span className="pulse-dot" aria-hidden="true" />
          Currently available — responding within 24hrs
        </p>
      </Reveal>
    </section>
  )
}
