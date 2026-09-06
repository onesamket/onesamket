import { Check, GraduationCap, Languages, Sparkles } from 'lucide-react'
import React, { useState } from 'react'

export const ProfileDossier: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const handleCopyUrl = () => {
    navigator.clipboard.writeText('https://onesamket.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="mt-16 sm:mt-24">
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        {/* Education & Academic Foundation */}
        <div className="rounded-3xl border border-[#1a3be8]/20 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#dbe4fc] text-[#1a3be8]">
              <GraduationCap size={20} />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#1a3be8]">
                Academic Foundation
              </span>
              <h3 className="text-xl font-black text-[#141a33]">
                Education & Credentials
              </h3>
            </div>
          </div>

          <div className="rounded-2xl border border-[#1a3be8]/15 bg-[#f8faff] p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h4 className="text-lg font-black text-[#141a33]">
                Bachelor&apos;s Degree in Information Technology
              </h4>
              <span className="rounded-full bg-[#dbe4fc] px-3 py-0.5 text-xs font-black text-[#1a3be8]">
                2020 – 2024
              </span>
            </div>
            <p className="mt-1 text-sm font-bold text-[#1a3be8]">
              Haramaya University · Ethiopia
            </p>
            <p className="mt-3 text-xs font-medium leading-relaxed text-[#57648f]">
              Rigorous curriculum spanning software engineering principles,
              database management & query optimization (SQL/NoSQL), distributed
              systems, networking, and accessible web/mobile system design.
            </p>
          </div>

          {/* Languages & Interests */}
          <div className="mt-6 grid gap-6 border-t border-[#1a3be8]/15 pt-6 sm:grid-cols-2">
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1a3be8]">
                <Languages size={14} />
                <span>Languages</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#141a33]">Amharic</span>
                  <div className="flex gap-1 text-[#1a3be8]">
                    <span className="h-2 w-2 rounded-full bg-[#1a3be8]" />
                    <span className="h-2 w-2 rounded-full bg-[#1a3be8]" />
                    <span className="h-2 w-2 rounded-full bg-[#1a3be8]" />
                    <span className="h-2 w-2 rounded-full bg-[#1a3be8]" />
                    <span className="h-2 w-2 rounded-full bg-[#1a3be8]" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#141a33]">English</span>
                  <div className="flex gap-1 text-[#1a3be8]">
                    <span className="h-2 w-2 rounded-full bg-[#1a3be8]" />
                    <span className="h-2 w-2 rounded-full bg-[#1a3be8]" />
                    <span className="h-2 w-2 rounded-full bg-[#1a3be8]" />
                    <span className="h-2 w-2 rounded-full bg-[#1a3be8]" />
                    <span className="h-2 w-2 rounded-full border border-[#1a3be8]" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1a3be8]">
                <Sparkles size={14} />
                <span>Interests</span>
              </div>
              <div className="space-y-1 text-xs font-bold text-[#57648f]">
                <p>• Open Source Tooling</p>
                <p>• Ethiopic Typography & Geez Tools</p>
                <p>• Real-Time Audio & WebRTC Systems</p>
                <p>• Mobile Product Micro-Interactions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Passport / QR Code Box */}
        <div className="flex flex-col justify-between rounded-3xl border border-[#1a3be8]/20 bg-white p-6 shadow-sm sm:p-8">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#1a3be8]">
              Direct Verification
            </span>
            <h3 className="mt-1 text-xl font-black text-[#141a33]">
              Digital Portfolio
            </h3>
            <p className="mt-2 text-xs font-medium leading-relaxed text-[#57648f]">
              Scan on your mobile phone or click below to quickly share or copy
              my portfolio and engineering showcase.
            </p>
          </div>

          <div className="my-6 flex items-center justify-center">
            <button
              onClick={handleCopyUrl}
              title="Click to copy onesamket.com"
              className="group relative flex h-36 w-36 items-center justify-center rounded-2xl border-2 border-[#1a3be8]/20 bg-[#f4f7fd] p-3 shadow-inner transition-all hover:border-[#1a3be8] hover:bg-[#ebf1fc]"
            >
              <svg viewBox="0 0 48 48" className="h-full w-full fill-[#1a3be8]">
                <path d="M4 4h14v14H4V4zm4 4v6h6V8H8zm22-4h14v14H30V4zm4 4v6h6V8h-6zM4 30h14v14H4V30zm4 4v6h6v-6H8zm26-4h4v4h-4v-4zm-4 4h4v4h-4v-4zm4 4h4v4h-4v-4zm4-4h4v4h-4v-4zm0 8h4v4h-4v-4zm-8 0h4v4h-4v-4zm-4-14h4v4h-4v-4zm8 4h4v4h-4v-4zm4-4h4v4h-4v-4zm-16 8h4v4h-4v-4zm0-8h4v4h-4v-4zm4 4h4v4h-4v-4z" />
              </svg>
              {copied && (
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-[#1a3be8] text-white">
                  <Check size={24} />
                  <span className="mt-1 text-[11px] font-black">Copied!</span>
                </div>
              )}
            </button>
          </div>

          <div className="text-center">
            <button
              onClick={handleCopyUrl}
              className="text-xs font-black uppercase tracking-wider text-[#1a3be8] hover:underline"
            >
              {copied
                ? 'Link Copied to Clipboard!'
                : 'Click to Copy: onesamket.com'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
