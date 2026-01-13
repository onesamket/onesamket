
import React from 'react';
import { Github, Twitter, Linkedin, Globe } from 'lucide-react';

interface AuthorSectionProps {
  name: string;
  avatar: string;
}

const AuthorSection: React.FC<AuthorSectionProps> = ({ name, avatar }) => {
  return (
    <div className="bg-white/50 border border-gray-200 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8">
      <img
        src={avatar}
        alt={name}
        className="w-24 h-24 md:w-32 md:h-32 rounded-2xl grayscale object-cover border-2 border-white shadow-sm"
      />
      <div className="flex-1 text-center md:text-left space-y-4">
        <div className="space-y-1">
          <h3 className="text-3xl font-bold serif-font">{name}</h3>
        </div>
        <p className="text-gray-600 font-light leading-relaxed max-w-xl">
          I'm a Fullstack web and mobile application developer who loves crafting clean, performant code and building delightful user experiences. When I'm not coding, you'll find me reading about React, React Native, Node.js, and exploring the latest in web architecture.
        </p>
        <div className="flex justify-center md:justify-start gap-4 pt-2">
          <SocialIcon icon={<Github size={18} />} href="https://github.com/onesamket" />
          <SocialIcon icon={<Twitter size={18} />} href="https://twitter.com/onesamket" />
          <SocialIcon icon={<Linkedin size={18} />} href="https://www.linkedin.com/in/ln-onesamket/" />
          <SocialIcon icon={<Globe size={18} />} href="https://onesamket.com" />
        </div>
      </div>
    </div>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode; href: string }> = ({ icon, href }) => (
  <a
    href={href}
    target="_blank"
    className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#4D807B] hover:border-[#4D807B] transition-all shadow-sm"
  >
    {icon}
  </a>
);

export default AuthorSection;
