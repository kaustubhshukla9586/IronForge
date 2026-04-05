import { motion } from 'framer-motion'
import { Clock, Flame } from 'lucide-react'

const programs = [
  {
    name: 'STRENGTH & POWER',
    description:
      'Build raw strength with progressive overload training. Squats, deadlifts, bench — the fundamentals done right.',
    image: '/images/strength.jpg',
    duration: '60 min',
    intensity: 'High',
  },
  {
    name: 'HIIT & CONDITIONING',
    description:
      'Torch calories and build endurance with high-intensity intervals designed to push your limits every session.',
    image: '/images/hiit.jpg',
    duration: '45 min',
    intensity: 'Extreme',
  },
  {
    name: '1-ON-1 COACHING',
    description:
      'Personalized programming, form correction, and accountability from certified coaches who actually care.',
    image: '/images/coaching.jpg',
    duration: 'Custom',
    intensity: 'Tailored',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Programs() {
  return (
    <section id="programs" style={{ padding: '120px 24px', backgroundColor: '#0D0D0D' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(36px, 5vw, 56px)',
              textTransform: 'uppercase',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            <span style={{ color: '#fff' }}>BUILT FOR</span>{' '}
            <span style={{ color: '#FF4D00' }}>EVERY GOAL</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {programs.map((program) => (
            <motion.div
              key={program.name}
              variants={cardVariant}
              whileHover={{ y: -4, borderColor: '#FF4D00' }}
              transition={{ duration: 0.2 }}
              style={{
                backgroundColor: '#161616',
                border: '1px solid #2A2A2A',
                borderRadius: 12,
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              <div style={{ height: 220, overflow: 'hidden' }}>
                <img
                  src={program.image}
                  alt={program.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div style={{ padding: 28 }}>
                <h3
                  style={{
                    fontFamily: "'Clash Display', sans-serif",
                    fontWeight: 700,
                    fontSize: 24,
                    color: '#fff',
                    margin: '0 0 12px 0',
                  }}
                >
                  {program.name}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    color: '#888',
                    lineHeight: 1.6,
                    margin: '0 0 20px 0',
                  }}
                >
                  {program.description}
                </p>
                <div className="flex items-center gap-4 mb-5">
                  <span
                    className="inline-flex items-center gap-1.5"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12,
                      color: '#888',
                      backgroundColor: '#0D0D0D',
                      padding: '6px 12px',
                      borderRadius: 100,
                      border: '1px solid #2A2A2A',
                    }}
                  >
                    <Clock size={12} /> {program.duration}
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12,
                      color: '#FF4D00',
                      backgroundColor: 'rgba(255,77,0,0.08)',
                      padding: '6px 12px',
                      borderRadius: 100,
                      border: '1px solid rgba(255,77,0,0.2)',
                    }}
                  >
                    <Flame size={12} /> {program.intensity}
                  </span>
                </div>
                <a
                  href="#booking"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#FF4D00',
                    textDecoration: 'none',
                  }}
                >
                  Learn More &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
