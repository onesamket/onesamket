import React, { useState } from 'react'
import { Mail, Github, Linkedin, Send, Check } from 'lucide-react'

/* Vintage SVG: envelope + decorative pen */
const EnvelopeIllustration: React.FC = () => (
  <svg
    viewBox="0 0 260 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="animate-float w-full max-w-[240px] opacity-80"
  >
    {/* Envelope body */}
    <rect
      x="10"
      y="30"
      width="240"
      height="120"
      rx="4"
      stroke="#1a1208"
      strokeWidth="2"
      fill="rgba(245,240,224,0.8)"
    />
    {/* Envelope flap */}
    <path
      d="M10 34 L130 98 L250 34"
      stroke="#1a1208"
      strokeWidth="2"
      fill="none"
      strokeLinejoin="round"
    />
    {/* Lower V crease */}
    <path
      d="M10 150 L100 90 M250 150 L160 90"
      stroke="#1a1208"
      strokeWidth="1.5"
      opacity="0.35"
    />
    {/* Wax seal */}
    <circle cx="130" cy="110" r="14" fill="#c9873e" opacity="0.85" />
    <text x="130" y="115" textAnchor="middle" fill="#f5f0e0" fontSize="11" fontWeight="900" fontFamily="'Playfair Display', serif">
      TB
    </text>
    {/* Decorative stamp */}
    <rect x="192" y="42" width="40" height="30" rx="2" stroke="#1a1208" strokeWidth="1.3" fill="rgba(201,135,62,0.08)" />
    <text x="212" y="54" textAnchor="middle" fill="#1a1208" fontSize="8" fontWeight="700" fontFamily="'Lato', sans-serif" letterSpacing="1">
      ETH
    </text>
    <line x1="196" y1="58" x2="228" y2="58" stroke="#1a1208" strokeWidth="0.8" opacity="0.4" />
    <text x="212" y="68" textAnchor="middle" fill="#1a1208" fontSize="8" fontFamily="'Lato', sans-serif">
      2026
    </text>
    {/* Corner curl */}
    <path d="M220 42 Q228 34 236 42" stroke="#1a1208" strokeWidth="1" fill="none" opacity="0.3" />
  </svg>
)

const socialLinks = [
  {
    label: 'GitHub',
    icon: Github,
    href: 'https://github.com/onesamket',
    handle: '@onesamket',
  },
  {
    label: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/ln-onesamket',
    handle: '/in/ln-onesamket',
  },
  {
    label: 'Email',
    icon: Mail,
    href: 'mailto:onesamket@gmail.com',
    handle: 'onesamket@gmail.com',
  },
]

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message) return
    const subject = encodeURIComponent(`Portfolio message from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.open(`mailto:onesamket@gmail.com?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-2">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#8b7d60]">
            Contact
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: 'clamp(30px, 4vw, 44px)',
              color: '#1a1208',
              lineHeight: 1.1,
            }}
          >
            Let's build together.
          </h2>
          <p className="max-w-md text-[14px] leading-relaxed text-[#4a3f28]">
            Open to freelance contracts, full-time roles, and interesting
            collaborations. Drop a line — I usually respond within 24 hours.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          {/* Contact form */}
          <form onSubmit={handleSubmit} className="card-vintage p-7">
            <div className="mb-5 grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10.5px] font-black uppercase tracking-[0.2em] text-[#8b7d60]">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Abebe Girma"
                  className="w-full rounded-sm border border-[rgba(26,18,8,0.15)] bg-transparent px-3 py-2.5 text-sm text-[#1a1208] placeholder-[#8b7d60]/60 outline-none transition-colors focus:border-[#1a1208]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10.5px] font-black uppercase tracking-[0.2em] text-[#8b7d60]">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-sm border border-[rgba(26,18,8,0.15)] bg-transparent px-3 py-2.5 text-sm text-[#1a1208] placeholder-[#8b7d60]/60 outline-none transition-colors focus:border-[#1a1208]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                />
              </div>
            </div>
            <div className="mb-6 flex flex-col gap-1.5">
              <label className="text-[10.5px] font-black uppercase tracking-[0.2em] text-[#8b7d60]">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project or idea..."
                className="w-full resize-none rounded-sm border border-[rgba(26,18,8,0.15)] bg-transparent px-3 py-2.5 text-sm text-[#1a1208] placeholder-[#8b7d60]/60 outline-none transition-colors focus:border-[#1a1208]"
                style={{ fontFamily: "'Lato', sans-serif" }}
              />
            </div>
            <button type="submit" className="btn-ink w-full justify-center sm:w-auto">
              {sent ? (
                <>
                  <Check size={14} /> Email Client Opened!
                </>
              ) : (
                <>
                  <Send size={14} /> Send Message
                </>
              )}
            </button>
          </form>

          {/* Right column: illustration + social */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-center">
              <EnvelopeIllustration />
            </div>

            <div className="card-vintage p-5">
              <p className="mb-4 text-[10px] font-black uppercase tracking-[0.28em] text-[#8b7d60]">
                Also find me on
              </p>
              <div className="flex flex-col gap-3">
                {socialLinks.map(({ label, icon: Icon, href, handle }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#1a1208] no-underline transition-opacity hover:opacity-70"
                  >
                    <Icon size={16} strokeWidth={2} />
                    <div>
                      <p className="text-[10.5px] font-black uppercase tracking-[0.18em] text-[#8b7d60]">
                        {label}
                      </p>
                      <p
                        className="text-[13px] font-bold text-[#1a1208]"
                        style={{ fontFamily: "'Lato', sans-serif" }}
                      >
                        {handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
