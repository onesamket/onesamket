import { Asterisk, Download, Mail, MapPin } from 'lucide-react'
import React from 'react'

const Header: React.FC = () => {
  return (
    <section className="pt-6 md:pt-10">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-3xl">
          <div
            className="mb-5 flex h-11 w-11 items-center justify-center text-[#0759bd]"
            aria-hidden="true"
          >
            <Asterisk size={44} strokeWidth={3} />
          </div>
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.24em] text-[#0759bd]">
            Fullstack Web & Mobile Developer
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-normal text-[#0759bd] sm:text-6xl md:text-7xl lg:text-8xl">
            Tewodros Birhanu
          </h1>
          <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-[#244f8f] md:text-lg">
            I build clean, reliable web, desktop, and React Native products with
            practical architecture, strong UI execution, and attention to
            performance.
          </p>
        </div>

        <div className="w-full space-y-4 text-left md:w-80 md:pt-20">
          <a
            href="mailto:onesamket@gmail.com"
            className="flex items-center gap-3 text-base font-semibold text-[#0759bd] hover:underline"
          >
            <Mail size={18} />
            onesamket@gmail.com
          </a>
          <p className="flex items-center gap-3 text-base font-semibold text-[#0759bd]">
            <MapPin size={18} />
            Addis Ababa, Ethiopia
          </p>
          <a
            href="https://onesamket.com"
            className="block text-base font-semibold text-[#0759bd] hover:underline"
          >
            www.onesamket.com
          </a>
        </div>
      </div>

      <div className="mt-10 border-t-4 border-[#0759bd] pt-8 md:mt-12 md:pt-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="/docs/tewodros-birhanu-resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0759bd] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-[#f4f0e8] hover:bg-[#073f8f]"
          >
            <Download size={17} />
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border-2 border-[#0759bd] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-[#0759bd] hover:bg-[#e8e1d5]"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Header
