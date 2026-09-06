import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { ContactSection } from '@/components/contact-section'
import { ExperienceTimeline } from '@/components/experience-timeline'
import { FeaturedWork } from '@/components/featured-work'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { SkillsMatrix } from '@/components/skills-matrix'

export const Route = createFileRoute('/')({
  component: HomePage,
})

// ── Architectural skyline SVG ──
const SkylineSVG = () => (
  <svg
    viewBox="0 0 900 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ width: '100%', maxWidth: 900, display: 'block', opacity: 0.18 }}
    preserveAspectRatio="xMidYMax meet"
  >
    {/* Ground line */}
    <line x1="0" y1="155" x2="900" y2="155" stroke="#1a1208" strokeWidth="1.5" />

    {/* Building 1 — tall slim tower */}
    <rect x="30" y="60" width="36" height="95" fill="#1a1208" />
    <rect x="33" y="64" width="8" height="12" fill="#f5f0e0" opacity="0.6" />
    <rect x="45" y="64" width="8" height="12" fill="#f5f0e0" opacity="0.6" />
    <rect x="33" y="82" width="8" height="12" fill="#f5f0e0" opacity="0.3" />
    <rect x="45" y="82" width="8" height="12" fill="#f5f0e0" opacity="0.6" />
    <rect x="33" y="100" width="8" height="12" fill="#f5f0e0" opacity="0.6" />
    <rect x="45" y="100" width="8" height="12" fill="#f5f0e0" opacity="0.3" />
    <rect x="33" y="118" width="8" height="12" fill="#f5f0e0" opacity="0.6" />
    <rect x="45" y="118" width="8" height="12" fill="#f5f0e0" opacity="0.6" />
    {/* Antenna */}
    <line x1="48" y1="60" x2="48" y2="40" stroke="#1a1208" strokeWidth="2" />
    <circle cx="48" cy="39" r="3" fill="#c9873e" />

    {/* Building 2 — wide office */}
    <rect x="80" y="90" width="70" height="65" fill="#3d3426" />
    <rect x="84" y="95" width="12" height="16" fill="#f5f0e0" opacity="0.5" />
    <rect x="100" y="95" width="12" height="16" fill="#f5f0e0" opacity="0.3" />
    <rect x="116" y="95" width="12" height="16" fill="#f5f0e0" opacity="0.5" />
    <rect x="84" y="118" width="12" height="16" fill="#f5f0e0" opacity="0.3" />
    <rect x="100" y="118" width="12" height="16" fill="#f5f0e0" opacity="0.5" />
    <rect x="116" y="118" width="12" height="16" fill="#f5f0e0" opacity="0.3" />
    <rect x="98" y="138" width="18" height="17" fill="#c9873e" opacity="0.5" />

    {/* Building 3 — stepped pyramid */}
    <rect x="166" y="105" width="50" height="50" fill="#1a1208" />
    <rect x="172" y="85" width="38" height="22" fill="#1a1208" />
    <rect x="178" y="70" width="26" height="17" fill="#1a1208" />
    <rect x="184" y="57" width="14" height="15" fill="#1a1208" />
    <line x1="191" y1="57" x2="191" y2="42" stroke="#1a1208" strokeWidth="2.5" />

    {/* Building 4 — arched facade */}
    <rect x="232" y="95" width="55" height="60" fill="#4a3f28" />
    <path d="M232 95 Q259 70 286 95" fill="#1a1208" />
    <rect x="248" y="110" width="14" height="45" fill="#f5f0e0" opacity="0.2" />
    <rect x="239" y="100" width="8" height="10" fill="#f5f0e0" opacity="0.4" />
    <rect x="271" y="100" width="8" height="10" fill="#f5f0e0" opacity="0.4" />

    {/* Building 5 — modern glass tower */}
    <rect x="302" y="30" width="44" height="125" fill="#1a1208" />
    {[35,50,65,80,95,110,125].map((y) => (
      <rect key={y} x="305" y={y} width="38" height="10" fill="#f5f0e0" opacity={y % 30 === 5 ? "0.35" : "0.15"} />
    ))}
    <rect x="318" y="28" width="18" height="4" fill="#c9873e" opacity="0.7" />

    {/* Building 6 — cathedral-style */}
    <rect x="362" y="100" width="60" height="55" fill="#3d3426" />
    <path d="M362 100 L392 55 L422 100Z" fill="#1a1208" />
    <path d="M374 100 L392 72 L410 100Z" fill="#4a3f28" />
    <line x1="392" y1="55" x2="392" y2="38" stroke="#1a1208" strokeWidth="3" />
    <rect x="384" y="38" width="16" height="2" fill="#1a1208" />
    <rect x="384" y="115" width="16" height="40" fill="#f5f0e0" opacity="0.15" />

    {/* Building 7 — wide low rise */}
    <rect x="438" y="110" width="80" height="45" fill="#1a1208" />
    <rect x="438" y="90" width="80" height="22" fill="#3d3426" />
    {[444,460,476,492,504].map((x) => (
      <rect key={x} x={x} y={93} width="10" height="14" fill="#f5f0e0" opacity="0.3" />
    ))}
    {[444,456,468,480,492,504].map((x) => (
      <rect key={x} x={x} y={115} width="8" height="10" fill="#f5f0e0" opacity="0.2" />
    ))}

    {/* Building 8 — slim corner tower */}
    <rect x="534" y="70" width="30" height="85" fill="#1a1208" />
    <rect x="564" y="85" width="24" height="70" fill="#3d3426" />
    <line x1="549" y1="70" x2="549" y2="50" stroke="#1a1208" strokeWidth="2.5" />
    <rect x="536" y="76" width="7" height="9" fill="#f5f0e0" opacity="0.4" />
    <rect x="548" y="76" width="7" height="9" fill="#f5f0e0" opacity="0.3" />
    <rect x="536" y="92" width="7" height="9" fill="#f5f0e0" opacity="0.3" />
    <rect x="548" y="92" width="7" height="9" fill="#f5f0e0" opacity="0.4" />

    {/* Building 9 — large civic */}
    <rect x="605" y="80" width="90" height="75" fill="#4a3f28" />
    <rect x="612" y="60" width="76" height="22" fill="#3d3426" />
    <rect x="620" y="45" width="60" height="17" fill="#1a1208" />
    {/* Columns */}
    {[616,632,648,664,680].map((x) => (
      <rect key={x} x={x} y={80} width="5" height="75" fill="#f5f0e0" opacity="0.08" />
    ))}
    <rect x="636" y="110" width="28" height="45" fill="#f5f0e0" opacity="0.12" />
    {/* Dome */}
    <path d="M630 45 Q650 24 670 45" fill="#1a1208" />
    <circle cx="650" cy="25" r="5" fill="#c9873e" opacity="0.8" />

    {/* Building 10 — far right tower */}
    <rect x="714" y="50" width="38" height="105" fill="#1a1208" />
    {[55,72,89,106,123].map((y) => (
      <g key={y}>
        <rect x="717" y={y} width="10" height="12" fill="#f5f0e0" opacity="0.35" />
        <rect x="731" y={y} width="10" height="12" fill="#f5f0e0" opacity="0.2" />
      </g>
    ))}
    <line x1="733" y1="50" x2="733" y2="28" stroke="#1a1208" strokeWidth="3" />
    <circle cx="733" cy="27" r="4" fill="#c9873e" />

    {/* Building 11 — warehouse */}
    <rect x="768" y="105" width="65" height="50" fill="#3d3426" />
    <path d="M768 105 Q800 85 833 105" fill="#1a1208" />
    <rect x="785" y="112" width="30" height="43" fill="#f5f0e0" opacity="0.08" />

    {/* Building 12 — slim far right */}
    <rect x="850" y="75" width="28" height="80" fill="#1a1208" />
    <rect x="853" y="80" width="7" height="10" fill="#f5f0e0" opacity="0.4" />
    <rect x="864" y="80" width="7" height="10" fill="#f5f0e0" opacity="0.3" />
    <rect x="853" y="97" width="7" height="10" fill="#f5f0e0" opacity="0.3" />
    <rect x="864" y="97" width="7" height="10" fill="#f5f0e0" opacity="0.4" />
    <line x1="864" y1="75" x2="864" y2="58" stroke="#1a1208" strokeWidth="2" />

    {/* Stars / ambient dots */}
    <circle cx="70" cy="20" r="1.5" fill="#c9873e" opacity="0.5" />
    <circle cx="200" cy="15" r="1" fill="#1a1208" opacity="0.4" />
    <circle cx="380" cy="10" r="1.5" fill="#c9873e" opacity="0.4" />
    <circle cx="570" cy="18" r="1" fill="#1a1208" opacity="0.4" />
    <circle cx="760" cy="12" r="1.5" fill="#c9873e" opacity="0.5" />
  </svg>
)

function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f5f0e0', color: '#1a1208' }}>
      <Navbar />

      <main>
        <Hero />
        <FeaturedWork />
        <ExperienceTimeline />
        <SkillsMatrix />
        <ContactSection />

        {/* ── Footer ── */}
        <footer
          style={{
            background: '#1a1208',
            color: '#f5f0e0',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Skyline illustration — sits at bottom of footer */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
            <SkylineSVG />
          </div>

          {/* Footer content above the skyline */}
          <div
            style={{
              maxWidth: 1000, margin: '0 auto',
              padding: '3.5rem 2rem 12rem',
              position: 'relative', zIndex: 1,
            }}
          >
            {/* Top row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'flex', flexWrap: 'wrap',
                alignItems: 'flex-start', justifyContent: 'space-between',
                gap: '2rem', marginBottom: '2.5rem',
                paddingBottom: '2.5rem',
                borderBottom: '1px dashed rgba(245,240,224,0.15)',
              }}
            >
              {/* Wordmark + tagline */}
              <div>
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 32, fontWeight: 900, color: '#f5f0e0',
                  letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 8,
                }}>
                  TB.
                </p>
                <p style={{
                  fontSize: 12, color: 'rgba(245,240,224,0.5)',
                  fontFamily: "'Lato', sans-serif", letterSpacing: '0.05em',
                }}>
                  Full-Stack & Product Engineer
                </p>
              </div>

              {/* Nav columns */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
                <div>
                  <p style={{
                    fontSize: 9.5, fontWeight: 900, letterSpacing: '0.28em',
                    textTransform: 'uppercase', color: 'rgba(245,240,224,0.4)',
                    marginBottom: 14, fontFamily: "'Lato', sans-serif",
                  }}>
                    Navigate
                  </p>
                  {['About', 'Work', 'Experience', 'Skills', 'Contact'].map((item) => (
                    <div key={item} style={{ marginBottom: 8 }}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        style={{
                          fontSize: 13, fontWeight: 700,
                          color: 'rgba(245,240,224,0.7)',
                          fontFamily: "'Lato', sans-serif",
                          textDecoration: 'none',
                          transition: 'color 0.18s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#f5f0e0')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,240,224,0.7)')}
                      >
                        {item}
                      </a>
                    </div>
                  ))}
                </div>
                <div>
                  <p style={{
                    fontSize: 9.5, fontWeight: 900, letterSpacing: '0.28em',
                    textTransform: 'uppercase', color: 'rgba(245,240,224,0.4)',
                    marginBottom: 14, fontFamily: "'Lato', sans-serif",
                  }}>
                    Connect
                  </p>
                  {[
                    { label: 'GitHub', href: 'https://github.com/onesamket' },
                    { label: 'LinkedIn', href: 'https://linkedin.com/in/ln-onesamket' },
                    { label: 'Email', href: 'mailto:onesamket@gmail.com' },
                  ].map(({ label, href }) => (
                    <div key={label} style={{ marginBottom: 8 }}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          fontSize: 13, fontWeight: 700,
                          color: 'rgba(245,240,224,0.7)',
                          fontFamily: "'Lato', sans-serif",
                          textDecoration: 'none',
                          transition: 'color 0.18s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#c9873e')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,240,224,0.7)')}
                      >
                        {label}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Bottom row */}
            <div style={{
              display: 'flex', flexWrap: 'wrap', alignItems: 'center',
              justifyContent: 'space-between', gap: '1rem',
            }}>
              <p style={{
                fontSize: 11.5, color: 'rgba(245,240,224,0.35)',
                fontFamily: "'Lato', sans-serif",
              }}>
                &copy; {new Date().getFullYear()} Tewodros Birhanu. All rights reserved.
              </p>
              <p style={{
                fontSize: 11, color: 'rgba(245,240,224,0.25)',
                fontFamily: "'Lato', sans-serif", letterSpacing: '0.05em',
              }}>
                Built with React · TypeScript · TanStack · motion
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
