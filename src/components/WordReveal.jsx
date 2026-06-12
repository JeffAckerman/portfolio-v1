import { motion, useReducedMotion } from 'framer-motion'

export default function WordReveal({ text, startDelay = 0 }) {
  const reduce = useReducedMotion()
  if (reduce) return <>{text}</>
  return (
    <>
      {text.split(' ').map((w, i) => (
        <span key={w + i}>
          <span className="word-mask">
            <motion.span
              className="word"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                delay: startDelay + i * 0.08,
                ease: [0.21, 0.65, 0.32, 1],
              }}
            >
              {w}
            </motion.span>
          </span>{' '}
        </span>
      ))}
    </>
  )
}
