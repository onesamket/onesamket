import { Github, Globe, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

interface AuthorSectionProps {
  name: string
  avatar: string
}

const AuthorSection: React.FC<AuthorSectionProps> = ({ name, avatar }) => {
  return (
    <section className="rounded-md border border-[#0759bd]/35 bg-[#f8f5ef] p-6 md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <img
          src={avatar}
          alt={name}
          className="h-24 w-24 rounded-md border-2 border-[#0759bd]/20 object-cover grayscale md:h-28 md:w-28"
        />
        <div className="flex-1">
          <h3 className="mt-2 text-3xl font-black leading-none text-[#0759bd]">
            {name}
          </h3>
          <p className="mt-4 max-w-2xl text-sm font-medium leading-6 text-[#244f8f]">
            Fullstack web and mobile application developer focused on clean
            interfaces, reliable code, and practical product delivery.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <SocialIcon
              icon={<Github size={18} />}
              href="https://github.com/onesamket"
              label="GitHub"
            />
            <SocialIcon
              icon={<Twitter size={18} />}
              href="https://twitter.com/onesamket"
              label="Twitter"
            />
            <SocialIcon
              icon={<Linkedin size={18} />}
              href="https://www.linkedin.com/in/ln-onesamket/"
              label="LinkedIn"
            />
            <SocialIcon
              icon={<Globe size={18} />}
              href="https://onesamket.com"
              label="Website"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const SocialIcon: React.FC<{
  icon: React.ReactNode
  href: string
  label: string
}> = ({ icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#0759bd]/35 text-[#0759bd] hover:bg-[#e8e1d5]"
  >
    {icon}
  </a>
)

export default AuthorSection
