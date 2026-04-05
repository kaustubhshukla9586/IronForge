import { motion } from 'framer-motion'
import { Instagram, Twitter } from 'lucide-react'

const trainers = [
  {
    name: 'Marcus Reid',
    specialty: 'Strength & Powerlifting',
    bio: 'Former national-level powerlifter. 12 years coaching experience. Specializes in building raw strength from the ground up.',
    image: '/images/trainer1.jpg',
  },
  {
    name: 'Priya Sharma',
    specialty: 'HIIT & Conditioning',
    bio: 'Certified CrossFit L3 and sports conditioning coach. Known for sessions that leave you gasping — and coming back for more.',
    image: '/images/trainer2.jpg',
  },
  {
    name: 'Jake Torres',
    specialty: 'Personal Training',
    bio: 'NASM-certified with a focus on body recomposition. Combines nutrition science with smart programming for lasting results.',
    image: '/images/trainer3.jpg',
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

export default function Trainers() {
  return (
    <section id="trainers" style={{ padding: '120px 24px', backgroundColor: '#0D0D0D' }}>
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
            <span style={{ color: '#fff' }}>MEET YOUR</span>{' '}
            <span style={{ color: '#FF4D00' }}>COACHES</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {trainers.map((trainer) => (
            <motion.div
              key={trainer.name}
              variants={cardVariant}
              whileHover={{ y: -4, borderColor: '#FF4D00' }}
              transition={{ duration: 0.2 }}
              className="group"
              style={{
                backgroundColor: '#161616',
                border: '1px solid #2A2A2A',
                borderRadius: 12,
                overflow: 'hidden',
              }}
            >
              <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div style={{ padding: 28 }}>
                <h3
                  className="transition-transform duration-200 group-hover:-translate-y-0.5"
                  style={{
                    fontFamily: "'Clash Display', sans-serif",
                    fontWeight: 700,
                    fontSize: 22,
                    color: '#fff',
                    margin: '0 0 4px 0',
                  }}
                >
                  {trainer.name}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    color: '#FF4D00',
                    margin: '0 0 12px 0',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {trainer.specialty}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    color: '#888',
                    lineHeight: 1.6,
                    margin: '0 0 20px 0',
                  }}
                >
                  {trainer.bio}
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="transition-colors duration-200"
                    style={{ color: '#888' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FF4D00')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="#"
                    className="transition-colors duration-200"
                    style={{ color: '#888' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FF4D00')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
