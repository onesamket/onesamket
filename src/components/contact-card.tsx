import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Copy, Mail } from 'lucide-react';

const ContactCard: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState<string>('');
  const email = "hey@onesamket.com";

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Addis_Ababa',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-brand-black dark:bg-[#0A0A0A] rounded-[32px] p-8 md:p-12 shadow-lg border border-gray-800 dark:border-white/10 h-full flex flex-col md:flex-row justify-between items-start md:items-end gap-8 relative overflow-hidden group transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-orange rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity"></div>

      <div className="relative z-10 max-w-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Available for new projects
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Let’s create something <span className="text-gray-500">meaningful</span> together.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
             <button onClick={handleCopy} className="flex items-center justify-between gap-4 px-6 py-4 bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl text-white transition-all group/btn w-full sm:w-auto min-w-[240px]">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-full">
                        <Mail className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-lg">{email}</span>
                </div>
                {copied ? (
                    <span className="text-xs font-bold text-green-400">COPIED</span>
                ) : (
                    <Copy className="w-4 h-4 text-gray-400 group-hover/btn:text-white transition-colors" />
                )}
             </button>
             
             <button className="flex items-center justify-center gap-2 px-6 py-4 bg-white text-brand-black rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors w-full sm:w-auto">
                Book a call
                <ArrowUpRight className="w-5 h-5" />
             </button>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-end text-right">
          <p className="text-gray-400 text-sm mb-1">Local time</p>
          <p className="text-white text-xl font-mono">{time || '--:--'} <span className="text-brand-orange">EAT</span></p>
      </div>
    </div>
  );
};

export default ContactCard;