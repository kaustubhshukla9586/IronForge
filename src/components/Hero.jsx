import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

function CountUp({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = Date.now()
          const tick = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const headlineVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const wordVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(13,13,13,0.7) 0%, rgba(13,13,13,0.95) 100%)',
        }}
      />

      <div
        className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-20"
        style={{ maxWidth: 1200, width: '100%', margin: '0 auto' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span
            className="inline-flex items-center gap-2"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              color: '#888',
              border: '1px solid #2A2A2A',
              borderRadius: 100,
              padding: '10px 20px',
              letterSpacing: '0.02em',
            }}
          >
            <span style={{ color: '#FF4D00' }}>&bull;</span> Mumbai&apos;s
            Premier Strength Facility &rarr;
          </span>
        </motion.div>

        <motion.h1
          variants={headlineVariants}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontWeight: 900,
            textTransform: 'uppercase',
            lineHeight: 0.92,
            margin: 0,
          }}
        >
          <motion.span
            variants={wordVariant}
            className="block"
            style={{ fontSize: 'clamp(48px, 10vw, 100px)', color: '#fff' }}
          >
            FORGE YOUR
          </motion.span>
          <motion.span
            variants={wordVariant}
            className="block"
            style={{ fontSize: 'clamp(48px, 10vw, 100px)', color: '#FF4D00' }}
          >
            LIMITS.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 16,
            color: '#888',
            maxWidth: 480,
            marginTop: 28,
            lineHeight: 1.7,
          }}
        >
          Train with purpose. Lift with precision. Join 1,200+ members who
          stopped making excuses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <motion.a
            href="#booking"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.15 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              fontWeight: 600,
              height: 48,
              padding: '0 32px',
              borderRadius: 100,
              backgroundColor: '#FF4D00',
              color: '#fff',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            Start Training
          </motion.a>
          <motion.a
            href="#programs"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.15 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              fontWeight: 600,
              height: 48,
              padding: '0 32px',
              borderRadius: 100,
              backgroundColor: 'transparent',
              color: '#fff',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              border: '1px solid #2A2A2A',
            }}
          >
            Explore Programs
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex items-center justify-center mt-16 flex-wrap"
        >
          {[
            { value: 1200, suffix: '+', label: 'MEMBERS' },
            { value: 8, suffix: '', label: 'EXPERT TRAINERS' },
            { value: 49, suffix: '\u2605', label: 'AVERAGE RATING', display: '4.9' },
          ].map((stat, i) => (
            <div key={i} className="flex items-center">
              {i > 0 && (
                <div
                  className="hidden sm:block"
                  style={{
                    width: 1,
                    height: 48,
                    backgroundColor: '#2A2A2A',
                    margin: '0 32px',
                  }}
                />
              )}
              <div className="text-center px-4 py-2">
                <div
                  style={{
                    fontFamily: "'Clash Display', sans-serif",
                    fontSize: 'clamp(32px, 5vw, 48px)',
                    fontWeight: 700,
                    color: '#fff',
                    lineHeight: 1,
                  }}
                >
                  {stat.display ? (
                    <span>
                      {stat.display}
                      {stat.suffix}
                    </span>
                  ) : (
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 11,
                    fontWeight: 500,
                    color: '#888',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginTop: 8,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={24} color="#888" />
        </motion.div>
      </div>
    </section>
  )
}
