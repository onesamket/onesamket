import { BookOpen, GraduationCap, MapPin } from 'lucide-react'
import React from 'react'

const focusAreas = [
  'Software engineering fundamentals',
  'Database and information systems',
  'Networking and system design basics',
  'Web application development',
]

const Education: React.FC = () => {
  return (
    <section>
      <div className="mb-8">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#0759bd]">
          Education
        </p>
        <h2 className="mt-2 text-4xl font-black leading-none text-[#0759bd]">
          Academic Foundation
        </h2>
      </div>

      <article className="overflow-hidden rounded-md border border-[#0759bd]/35 bg-[#f8f5ef]">
        <div className="grid border-b border-[#0759bd]/25 sm:grid-cols-[150px_1fr]">
          <div className="border-b border-[#0759bd]/25 bg-[#0759bd] p-5 text-[#f4f0e8] sm:border-b-0 sm:border-r">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em]">
              Period
            </p>
            <p className="mt-3 text-2xl font-black leading-none">
              2020
              <br />
              2024
            </p>
          </div>

          <div className="p-5">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-[#0759bd]/35 text-[#0759bd]">
              <GraduationCap size={22} />
            </div>
            <h3 className="text-2xl font-black leading-tight text-[#073f8f]">
              Haramaya University
            </h3>
            <p className="mt-2 text-base font-extrabold text-[#0759bd]">
              Bachelor of Science in Information Technology
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm font-bold text-[#527db4]">
              <MapPin size={16} />
              Ethiopia
            </p>
          </div>
        </div>

        <div className="p-5">
          <div className="mb-4 flex items-center gap-2">
            <BookOpen size={17} className="text-[#0759bd]" />
            <h4 className="text-sm font-black uppercase tracking-[0.18em] text-[#0759bd]">
              Focus Areas
            </h4>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <p
                key={area}
                className="rounded-md border border-[#0759bd]/20 px-3 py-2 text-sm font-semibold leading-6 text-[#244f8f]"
              >
                {area}
              </p>
            ))}
          </div>
        </div>
      </article>
    </section>
  )
}

export default Education
