import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, AlertCircle } from 'lucide-react'
import { supabase } from '../lib/supabase'

const inputStyle = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 14,
  width: '100%',
  backgroundColor: '#0D0D0D',
  border: '1px solid #2A2A2A',
  borderRadius: 8,
  color: '#fff',
  padding: '14px 16px',
  outline: 'none',
  transition: 'border-color 0.2s',
}

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    date: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFocus = (e) => {
    e.target.style.borderColor = '#FF4D00'
  }

  const handleBlur = (e) => {
    e.target.style.borderColor = '#2A2A2A'
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    if (formData.phone.length !== 10) {
    setError('Phone number must be exactly 10 digits.')
    return
      }

    try {
      const { error } = await supabase
        .from('demo_bookings')
        .insert([
          {
            full_name: form.name,
            email: form.email,
            phone: form.phone,
            preferred_program: form.program,
            preferred_date: form.date,
          },
        ])

      if (error) throw error
      setStatus('success')
    } catch (err) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section
      id="booking"
      style={{ padding: '120px 24px', backgroundColor: '#0D0D0D' }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center"
        style={{ maxWidth: 1200, margin: '0 auto' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(36px, 5vw, 56px)',
              textTransform: 'uppercase',
              margin: '0 0 20px 0',
              lineHeight: 1.1,
            }}
          >
            <span style={{ color: '#fff' }}>BOOK YOUR</span>
            <br />
            <span style={{ color: '#FF4D00' }}>FREE SESSION</span>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              color: '#888',
              lineHeight: 1.7,
              maxWidth: 420,
              margin: '0 0 32px 0',
            }}
          >
            Walk in. Experience the facility. Train with a coach. Zero
            commitment.
          </p>
          <div className="flex flex-col gap-4">
            {[
              'Full facility tour with a coach',
              'One complimentary training session',
              'Personalized fitness assessment',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  color: '#ccc',
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    backgroundColor: '#FF4D00',
                    flexShrink: 0,
                  }}
                />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          style={{
            backgroundColor: '#161616',
            border: '1px solid #2A2A2A',
            borderRadius: 16,
            padding: 'clamp(24px, 4vw, 40px)',
          }}
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="flex flex-col items-center justify-center text-center"
                style={{ minHeight: 360 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 15,
                    delay: 0.1,
                  }}
                >
                  <CheckCircle size={56} color="#AAFF00" />
                </motion.div>
                <h3
                  style={{
                    fontFamily: "'Clash Display', sans-serif",
                    fontWeight: 700,
                    fontSize: 24,
                    color: '#fff',
                    margin: '24px 0 12px 0',
                  }}
                >
                  You&apos;re In.
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    color: '#888',
                  }}
                >
                  We&apos;ll contact you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                <div>
                  <label
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      fontWeight: 500,
                      color: '#888',
                      display: 'block',
                      marginBottom: 8,
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="John Doe"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      fontWeight: 500,
                      color: '#888',
                      display: 'block',
                      marginBottom: 8,
                    }}
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="you@email.com"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      fontWeight: 500,
                      color: '#888',
                      display: 'block',
                      marginBottom: 8,
                    }}
                  >
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="+91 98765 43210"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      fontWeight: 500,
                      color: '#888',
                      display: 'block',
                      marginBottom: 8,
                    }}
                  >
                    Preferred Program
                  </label>
                  <select
                    name="program"
                    required
                    value={form.program}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={{
                      ...inputStyle,
                      appearance: 'none',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23888888' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 16px center',
                    }}
                  >
                    <option value="" disabled>
                      Select a program
                    </option>
                    <option value="strength">Strength & Power</option>
                    <option value="hiit">HIIT & Conditioning</option>
                    <option value="coaching">1-on-1 Coaching</option>
                    <option value="general">General Fitness</option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      fontWeight: 500,
                      color: '#888',
                      display: 'block',
                      marginBottom: 8,
                    }}
                  >
                    Preferred Date
                  </label>
                  <input
                    name="date"
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={form.date}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={inputStyle}
                  />
                </div>

                {status === 'error' && (
                  <div
                    className="flex items-center gap-2"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      color: '#ef4444',
                    }}
                  >
                    <AlertCircle size={16} />
                    {errorMsg}
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 15,
                    fontWeight: 600,
                    height: 48,
                    width: '100%',
                    borderRadius: 100,
                    backgroundColor: '#FF4D00',
                    color: '#fff',
                    border: 'none',
                    cursor: status === 'loading' ? 'wait' : 'pointer',
                    opacity: status === 'loading' ? 0.7 : 1,
                    marginTop: 4,
                  }}
                >
                  {status === 'loading'
                    ? 'Submitting...'
                    : 'Book My Free Session'}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
