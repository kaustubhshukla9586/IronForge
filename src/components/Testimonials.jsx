import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rahul M.',
    duration: 'Member for 8 months',
    initials: 'RM',
    quote:
      'IronForge changed how I train. The coaches actually pay attention, the equipment is world-class, and the energy in here is unmatched. I hit a 180kg deadlift last month — something I never thought possible.',
  },
  {
    name: 'Sneha K.',
    duration: 'Member for 1 year',
    initials: 'SK',
    quote:
      "I've tried 4 gyms in Mumbai. This is the first one where I actually look forward to showing up. The HIIT classes with Priya are brutal in the best way. Down 12kg and feeling stronger than ever.",
  },
  {
    name: 'Arjun P.',
    duration: 'Member for 3 months',
    initials: 'AP',
    quote:
      "Three months in and I'm already seeing results I didn't get in a year at my old gym. The 1-on-1 coaching is worth every rupee. Jake's programming is next level.",
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

export default function Testimonials() {
  return (
    <section style={{ padding: '120px 24px', backgroundColor: '#161616' }}>
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
            <span style={{ color: '#fff' }}>WHAT MEMBERS</span>{' '}
            <span style={{ color: '#FF4D00' }}>SAY</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariant}
              whileHover={{ y: -4, borderColor: '#FF4D00' }}
              transition={{ duration: 0.2 }}
              style={{
                backgroundColor: '#0D0D0D',
                border: '1px solid #2A2A2A',
                borderRadius: 12,
                padding: 28,
              }}
            >
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="#FF4D00"
                    color="#FF4D00"
                  />
                ))}
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  color: '#ccc',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                  margin: '0 0 24px 0',
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="shrink-0 flex items-center justify-center"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: '#2A2A2A',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#FF4D00',
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#fff',
                      margin: 0,
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12,
                      color: '#888',
                      margin: 0,
                    }}
                  >
                    {t.duration}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
