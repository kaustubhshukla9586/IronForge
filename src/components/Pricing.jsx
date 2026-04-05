import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'STARTER',
    price: '1,499',
    features: ['Access to gym floor', 'Locker room', 'Basic fitness assessment'],
    popular: false,
  },
  {
    name: 'PRO',
    price: '2,499',
    features: [
      'Everything in Starter',
      'Group classes',
      'Monthly check-in',
    ],
    popular: true,
  },
  {
    name: 'ELITE',
    price: '3,999',
    features: [
      'Everything in Pro',
      '4x PT sessions/mo',
      'Nutrition guidance',
      'Priority booking',
    ],
    popular: false,
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

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: '120px 24px', backgroundColor: '#0D0D0D' }}>
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
            <span style={{ color: '#fff' }}>SIMPLE</span>{' '}
            <span style={{ color: '#FF4D00' }}>PRICING</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={cardVariant}
              whileHover={{ y: -4, borderColor: '#FF4D00' }}
              transition={{ duration: 0.2 }}
              className="relative flex flex-col"
              style={{
                backgroundColor: '#161616',
                border: tier.popular
                  ? '1px solid #FF4D00'
                  : '1px solid #2A2A2A',
                borderRadius: 12,
                padding: 28,
                transform: tier.popular ? 'scale(1.03)' : 'none',
              }}
            >
              {tier.popular && (
                <span
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    color: '#fff',
                    backgroundColor: '#FF4D00',
                    padding: '5px 16px',
                    borderRadius: 100,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  Most Popular
                </span>
              )}

              <div className="mb-8">
                <h3
                  style={{
                    fontFamily: "'Clash Display', sans-serif",
                    fontWeight: 700,
                    fontSize: 20,
                    color: '#888',
                    margin: '0 0 16px 0',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span
                    style={{
                      fontFamily: "'Clash Display', sans-serif",
                      fontWeight: 800,
                      fontSize: 48,
                      color: '#fff',
                      lineHeight: 1,
                    }}
                  >
                    &#8377;{tier.price}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      color: '#888',
                    }}
                  >
                    /mo
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check size={16} color="#AAFF00" strokeWidth={3} />
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 14,
                        color: '#ccc',
                      }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <motion.a
                href="#booking"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center justify-center w-full text-center"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  height: 48,
                  borderRadius: 100,
                  backgroundColor: tier.popular ? '#FF4D00' : 'transparent',
                  color: '#fff',
                  textDecoration: 'none',
                  border: tier.popular ? 'none' : '1px solid #2A2A2A',
                }}
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
