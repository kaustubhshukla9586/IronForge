import { motion } from 'framer-motion'
import { Dumbbell, Users, Trophy, Heart } from 'lucide-react'

const features = [
  {
    icon: Dumbbell,
    title: 'Elite Equipment',
    description: 'Rogue, Eleiko, and Hammer Strength — no shortcuts on gear.',
  },
  {
    icon: Users,
    title: 'Expert Coaches',
    description: 'Certified trainers with 5+ years of real coaching experience.',
  },
  {
    icon: Trophy,
    title: 'Proven Results',
    description: '92% of members hit their first milestone within 90 days.',
  },
  {
    icon: Heart,
    title: 'Real Community',
    description: 'Not just a gym. A crew that shows up, pushes hard, and lifts each other.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function WhyIronForge() {
  return (
    <section style={{ backgroundColor: '#0D0D0D' }}>
      <div style={{ padding: '120px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16"
        >
          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(36px, 5vw, 56px)',
              textTransform: 'uppercase',
              color: '#fff',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            WHY <span style={{ color: '#FF4D00' }}>IRONFORGE</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h3
              style={{
                fontFamily: "'Clash Display', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(28px, 4vw, 40px)',
                color: '#fff',
                margin: '0 0 20px 0',
                lineHeight: 1.1,
              }}
            >
              We don&apos;t do average.
            </h3>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 16,
                color: '#888',
                lineHeight: 1.7,
                maxWidth: 420,
              }}
            >
              Every detail in this facility exists for one reason — to help you
              get stronger. No gimmicks. No filler. Just iron, coaching, and
              results.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col gap-8"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariant}
                className="flex items-start gap-5"
              >
                <div
                  className="shrink-0 flex items-center justify-center"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 10,
                    backgroundColor: 'rgba(255,77,0,0.08)',
                    border: '1px solid rgba(255,77,0,0.2)',
                  }}
                >
                  <feature.icon size={22} color="#FF4D00" />
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "'Clash Display', sans-serif",
                      fontWeight: 700,
                      fontSize: 18,
                      color: '#fff',
                      margin: '0 0 6px 0',
                    }}
                  >
                    {feature.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      color: '#888',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Full-width quote image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="relative w-full overflow-hidden"
        style={{ height: 'clamp(280px, 40vw, 420px)' }}
      >
        <img
          src="/images/lifting.jpg"
          alt="Training at IronForge"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 flex items-center justify-center px-6"
          style={{
            background:
              'linear-gradient(to bottom, rgba(13,13,13,0.75), rgba(13,13,13,0.85))',
          }}
        >
          <p
            className="text-center"
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(18px, 3vw, 32px)',
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              maxWidth: 700,
              lineHeight: 1.3,
            }}
          >
            &ldquo;THE ONLY BAD WORKOUT IS THE ONE THAT DIDN&apos;T
            HAPPEN.&rdquo;
          </p>
        </div>
      </motion.div>
    </section>
  )
}
