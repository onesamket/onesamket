import { Github, Linkedin, Mail, MapPin, Twitter } from 'lucide-react'
import React from 'react'

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-10 border-t-2 border-[#0759bd] pt-12"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#0759bd]">
            Contact
          </p>
          <h2 className="mt-2 text-4xl font-black leading-none text-[#0759bd] md:text-5xl">
            Let&apos;s Build Something Clean
          </h2>
          <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-[#244f8f]">
            I am open to frontend, fullstack, desktop, and React Native work.
            Send a short note with the project goal, timeline, and where you
            need help.
          </p>
          <a
            href="mailto:onesamket@gmail.com?subject=Project%20Inquiry"
            className="mt-8 inline-flex rounded-md bg-[#0759bd] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-[#f4f0e8] hover:bg-[#073f8f]"
          >
            Email Me
          </a>
        </div>

        <div className="rounded-md border border-[#0759bd]/35 bg-[#f8f5ef] p-6">
          <div className="space-y-5">
            <ContactLink
              icon={<Mail size={18} />}
              label="Email"
              value="onesamket@gmail.com"
              href="mailto:onesamket@gmail.com"
            />
            <ContactLink
              icon={<Github size={18} />}
              label="GitHub"
              value="@onesamket"
              href="https://github.com/onesamket"
            />
            <ContactLink
              icon={<Linkedin size={18} />}
              label="LinkedIn"
              value="Tewodros Birhanu"
              href="https://www.linkedin.com/in/ln-onesamket/"
            />
            <ContactLink
              icon={<Twitter size={18} />}
              label="Twitter / X"
              value="@onesamket"
              href="https://twitter.com/onesamket"
            />
          </div>

          <div className="mt-6 flex items-start gap-3 border-t border-[#0759bd]/25 pt-6">
            <MapPin size={18} className="mt-0.5 text-[#0759bd]" />
            <div>
              <p className="text-sm font-extrabold text-[#073f8f]">
                Addis Ababa, Ethiopia
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-[#527db4]">
                Available for remote work worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ContactLink: React.FC<{
  icon: React.ReactNode
  label: string
  value: string
  href: string
}> = ({ icon, label, value, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 hover:underline"
  >
    <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#0759bd]/35 text-[#0759bd]">
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#527db4]">
        {label}
      </p>
      <p className="mt-1 text-sm font-bold text-[#073f8f]">{value}</p>
    </div>
  </a>
)

export default Contact
