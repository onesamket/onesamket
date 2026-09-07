import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, Github, Linkedin, Send, Check } from 'lucide-react'
import { PillBadge } from '@/components/pill-badge'

const socialLinks = [
  { label: 'GitHub', Icon: Github, href: 'https://github.com/onesamket', handle: '@onesamket' },
  { label: 'LinkedIn', Icon: Linkedin, href: 'https://linkedin.com/in/ln-onesamket', handle: '/in/ln-onesamket' },
  { label: 'Email', Icon: Mail, href: 'mailto:onesamket@gmail.com', handle: 'onesamket@gmail.com' },
]

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
    <section id="contact" className="section section-contact" aria-labelledby="contact-heading">
      <div className="aurora aurora-c" aria-hidden="true" />
      <div className="site-wrap" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="section-head"
        >
          <PillBadge>Contact</PillBadge>
          <h2 id="contact-heading" className="section-title" style={{ marginTop: 22 }}>
            Let’s build together
          </h2>
          <p className="section-lead">
            Open to freelance contracts, full-time roles, and interesting
            collaborations. I usually reply within 24 hours.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.form
            onSubmit={handleSubmit}
            className="card-surface form-card"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            noValidate={false}
          >
            <div
              style={{ display: 'grid', gap: 16, marginBottom: 16 }}
              className="sm:grid-cols-2"
            >
              {[
                { id: 'contact-name', label: 'Your name', type: 'text', autoComplete: 'name', value: name, onChange: setName, placeholder: 'Alex Johnson' },
                { id: 'contact-email', label: 'Email', type: 'email', autoComplete: 'email', value: email, onChange: setEmail, placeholder: 'alex@company.com' },
              ].map(({ id, label, type, autoComplete, value, onChange, placeholder }) => (
                <div key={id} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label
                    htmlFor={id}
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: 'var(--text-faint)',
                    }}
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    name={id}
                    type={type}
                    autoComplete={autoComplete}
                    required
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className="field-input"
                  />
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 24 }}>
              <label
                htmlFor="contact-message"
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: 'var(--text-faint)',
                }}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project or idea..."
                className="field-input"
                style={{ resize: 'none' }}
              />
            </div>

            <motion.button
              type="submit"
              className="btn-ink"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              {sent ? <Check size={14} /> : <Send size={14} />}
              {sent ? 'Email client opened' : 'Send message'}
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            className="card-surface"
            style={{ padding: '1.5rem' }}
          >
            <p
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: 'var(--text-faint)',
                marginBottom: 16,
              }}
            >
              Also find me on
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {socialLinks.map(({ label, Icon, href, handle }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    textDecoration: 'none',
                    color: 'var(--text)',
                  }}
                >
                  <span
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 99,
                      border: '1px solid var(--line)',
                      background: 'var(--input-bg)',
                      display: 'grid',
                      placeItems: 'center',
                      color: 'var(--text-muted)',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={15} strokeWidth={2} />
                  </span>
                  <div>
                    <p
                      style={{
                        fontSize: 12,
                        fontWeight: 500,
                        color: 'var(--text-faint)',
                        margin: 0,
                      }}
                    >
                      {label}
                    </p>
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: 'var(--text)',
                        margin: 0,
                      }}
                    >
                      {handle}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
