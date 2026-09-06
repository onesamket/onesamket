import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, Github, Linkedin, Send, Check } from 'lucide-react'

// ─── Clean envelope SVG ───
const EnvelopeSVG: React.FC = () => (
  <svg
    viewBox="0 0 300 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="animate-float"
    style={{ width: '100%', maxWidth: 280, display: 'block' }}
  >
    <rect x="20" y="40" width="260" height="145" rx="5" stroke="#1a1208" strokeWidth="2" fill="rgba(245,240,224,0.9)" />
    <path d="M20 45 L150 118 L280 45" stroke="#1a1208" strokeWidth="2" fill="none" strokeLinejoin="round" />
    <path d="M20 185 L108 112 M280 185 L192 112" stroke="#1a1208" strokeWidth="1.5" opacity="0.25" />
    <circle cx="150" cy="132" r="18" fill="#c9873e" opacity="0.9" />
    <circle cx="150" cy="132" r="14" fill="#c9873e" />
    <text x="150" y="137" textAnchor="middle" fill="#f5f0e0" fontSize="12" fontWeight="900" fontFamily="'Playfair Display', serif">TB</text>
    <circle cx="150" cy="132" r="16" stroke="#a36830" strokeWidth="1" fill="none" opacity="0.6" />
    <rect x="224" y="52" width="44" height="34" rx="2.5" stroke="#1a1208" strokeWidth="1.5" strokeDasharray="2 2" fill="rgba(201,135,62,0.1)" />
    <text x="246" y="66" textAnchor="middle" fill="#1a1208" fontSize="8" fontWeight="700" fontFamily="'Lato', sans-serif" letterSpacing="0.08em">ETH</text>
    <line x1="228" y1="71" x2="264" y2="71" stroke="#1a1208" strokeWidth="0.8" opacity="0.4" />
    <text x="246" y="81" textAnchor="middle" fill="#8b7d60" fontSize="8" fontFamily="'Lato', sans-serif">2026</text>
    <circle cx="216" cy="68" r="18" stroke="#1a1208" strokeWidth="1" fill="none" opacity="0.2" />
    <text x="216" y="65" textAnchor="middle" fill="#1a1208" fontSize="6" fontFamily="'Lato', sans-serif" letterSpacing="0.12em">ADDIS</text>
    <text x="216" y="73" textAnchor="middle" fill="#1a1208" fontSize="6" fontFamily="'Lato', sans-serif">ABABA</text>
  </svg>
)

const socialLinks = [
  { label: 'GitHub', Icon: Github, href: 'https://github.com/onesamket', handle: '@onesamket' },
  { label: 'LinkedIn', Icon: Linkedin, href: 'https://linkedin.com/in/ln-onesamket', handle: '/in/ln-onesamket' },
  { label: 'Email', Icon: Mail, href: 'mailto:onesamket@gmail.com', handle: 'onesamket@gmail.com' },
]

const inputStyle: React.CSSProperties = {
  background: 'transparent',
  border: '1.5px solid rgba(26,18,8,0.14)',
  borderRadius: 2,
  padding: '10px 12px',
  fontSize: 13.5,
  color: '#1a1208',
  fontFamily: "'Lato', sans-serif",
  outline: 'none',
  width: '100%',
  transition: 'border-color 0.2s',
}

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message) return
    const subject = encodeURIComponent(`Message from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.open(`mailto:onesamket@gmail.com?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" style={{ padding: '5rem 0' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          style={{ marginBottom: 48 }}
        >
          <p style={{
            fontSize: 10.5, fontWeight: 900, letterSpacing: '0.28em',
            textTransform: 'uppercase', color: '#8b7d60', marginBottom: 8,
            fontFamily: "'Lato', sans-serif",
          }}>
            Contact
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 900,
            fontSize: 'clamp(30px, 4vw, 44px)', color: '#1a1208', lineHeight: 1.1,
          }}>
            Let's build together.
          </h2>
          <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.75, color: '#4a3f28', maxWidth: 420, fontFamily: "'Lato', sans-serif" }}>
            Open to freelance contracts, full-time roles, and interesting collaborations. I usually reply within 24 hours.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gap: 40 }} className="lg:grid-cols-[1fr_300px]">

          {/* ── Form ── */}
          <motion.form
            onSubmit={handleSubmit}
            className="card-vintage"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ padding: '2rem' }}
          >
            <div style={{ display: 'grid', gap: 16, marginBottom: 16 }} className="sm:grid-cols-2">
              {[
                { label: 'Your Name', type: 'text', value: name, onChange: setName, placeholder: 'Alex Johnson' },
                { label: 'Email', type: 'email', value: email, onChange: setEmail, placeholder: 'alex@company.com' },
              ].map(({ label, type, value, onChange, placeholder }) => (
                <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{
                    fontSize: 10.5, fontWeight: 900, letterSpacing: '0.2em',
                    textTransform: 'uppercase', color: '#8b7d60', fontFamily: "'Lato', sans-serif",
                  }}>
                    {label}
                  </label>
                  <input
                    type={type} required value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#1a1208')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(26,18,8,0.14)')}
                  />
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 24 }}>
              <label style={{
                fontSize: 10.5, fontWeight: 900, letterSpacing: '0.2em',
                textTransform: 'uppercase', color: '#8b7d60', fontFamily: "'Lato', sans-serif",
              }}>
                Message
              </label>
              <textarea
                required rows={5} value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project or idea..."
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#1a1208')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(26,18,8,0.14)')}
              />
            </div>

            <motion.button
              type="submit"
              className="btn-ink"
              whileHover={{ y: -2, boxShadow: '0 6px 20px rgba(26,18,8,0.18)' }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              {sent ? <Check size={14} /> : <Send size={14} />}
              {sent ? 'Email Client Opened!' : 'Send Message'}
            </motion.button>
          </motion.form>

          {/* ── Right panel ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem 0' }}>
              <EnvelopeSVG />
            </div>

            <div className="card-vintage" style={{ padding: '1.25rem 1.5rem' }}>
              <p style={{
                fontSize: 10, fontWeight: 900, letterSpacing: '0.28em',
                textTransform: 'uppercase', color: '#8b7d60', marginBottom: 16,
                fontFamily: "'Lato', sans-serif",
              }}>
                Also find me on
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {socialLinks.map(({ label, Icon, href, handle }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                    style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: '#1a1208' }}
                  >
                    <Icon size={15} strokeWidth={2} style={{ color: '#8b7d60', flexShrink: 0 }} />
                    <div>
                      <p style={{ fontSize: 10.5, fontWeight: 900, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8b7d60', fontFamily: "'Lato', sans-serif", margin: 0 }}>
                        {label}
                      </p>
                      <p style={{ fontSize: 13, fontWeight: 700, color: '#1a1208', fontFamily: "'Lato', sans-serif", margin: 0 }}>
                        {handle}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
