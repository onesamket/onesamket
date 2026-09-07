import React from 'react'
import { motion } from 'motion/react'
import { PillBadge } from '@/components/pill-badge'

const FACTS = [
  { label: 'Based in', value: 'Addis Ababa, Ethiopia' },
  { label: 'Availability', value: 'Remote worldwide' },
  { label: 'Open to', value: 'Full-stack, frontend & React Native' },
]

export const AboutSection: React.FC = () => (
  <section id="about" className="section section-about" aria-labelledby="about-heading">
    <div className="aurora aurora-b" aria-hidden="true" />
    <div className="site-wrap" style={{ position: 'relative', zIndex: 1 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="section-head"
      >
        <PillBadge>About</PillBadge>
        <h2 id="about-heading" className="section-title" style={{ marginTop: 22 }}>
          Background
        </h2>
      </motion.div>

      <motion.article
        className="about-intro"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="about-photo-wrap">
          <img
            src="/images/tewodros-profile.png"
            alt="Portrait of Tewodros Birhanu"
            width={280}
            height={340}
            className="about-photo"
            decoding="async"
          />
        </div>

        <div className="about-copy">
          <p className="about-role">Full-Stack Developer · React, React Native, TypeScript</p>
          <p className="about-lead">
            I design and ship high-performance web and mobile products in
            TypeScript — React and Next.js on the client, React Native on
            mobile, Node.js and SQL on the server. The standard is the same in
            every layer: fast to use, straightforward to maintain.
          </p>
          <p className="about-lead">
            I hold a B.Sc. in Information Technology from Haramaya University
            (2020–2024), with a foundation in software engineering, data
            systems, and accessible product design. I work in Amharic and
            English from Addis Ababa, with remote teams worldwide.
          </p>
          <p className="about-lead">
            Recent work includes Geez Input, an open-source engine for Ethiopic
            text entry; an accessible exam platform built for Ethiopian higher
            education; and an AI bookmark workspace for search, import, and
            notes.
          </p>

          <dl className="about-facts">
            {FACTS.map((fact) => (
              <div key={fact.label} className="about-fact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.article>
    </div>
  </section>
)
