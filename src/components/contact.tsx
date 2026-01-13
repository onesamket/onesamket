
import { Github, Linkedin, Mail, MapPin, Send, Twitter } from 'lucide-react';
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative scroll-mt-24 pt-12 border-t border-gray-300">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

        {/* Contact Info Column */}
        <div className="lg:col-span-2 space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl serif-font leading-tight text-gray-900">
              Get in <br />
              <span className="text-[#4D807B]">Touch</span>
            </h2>
            <p className="text-gray-600 font-light leading-relaxed text-lg">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
          </div>

          <div className="space-y-6">
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
              href="https://twitter.com/onesamket "
            />

            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center text-gray-600">
                <MapPin size={20} />
              </div>
              <div className="text-sm">
                <p className="font-bold text-gray-900 leading-tight">Addis Ababa, Ethiopia</p>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-widest mt-0.5"> Available  for work worldwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-3">
          <div className="bg-white/30 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-gray-200">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-b-2 border-gray-300 px-1 py-3 focus:border-[#4D807B] outline-none transition-all placeholder:text-gray-400 font-light text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full bg-transparent border-b-2 border-gray-300 px-1 py-3 focus:border-[#4D807B] outline-none transition-all placeholder:text-gray-400 font-light text-lg"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full bg-transparent border-b-2 border-gray-300 px-1 py-3 focus:border-[#4D807B] outline-none transition-all resize-none placeholder:text-gray-400 font-light text-lg"
                />
              </div>

              <button
                className="group flex items-center justify-center gap-3 w-full md:w-auto px-12 py-5 bg-black text-white text-sm font-bold uppercase tracking-[0.2em] rounded-full hover:bg-[#4D807B] transition-all duration-300 shadow-xl hover:shadow-[#4D807B]/20"
              >
                Send Message
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactLink: React.FC<{ icon: React.ReactNode; label: string; value: string; href: string }> = ({ icon, label, value, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 group w-fit"
  >
    <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 group-hover:text-[#4D807B] group-hover:border-[#4D807B] transition-all duration-300 shadow-sm">
      {icon}
    </div>
    <div>
      <p className="text-[10px] uppercase tracking-[0.1em] font-black text-gray-400 leading-none mb-1">{label}</p>
      <p className="text-base font-medium text-gray-700 group-hover:text-black transition-colors">{value}</p>
    </div>
  </a>
);

export default Contact;
