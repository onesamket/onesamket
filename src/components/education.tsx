import React from 'react';

const Education: React.FC = () => {
  const items = [
    {
      institution: 'Haramaya University',
      date: '2020 - 2024',
      location: 'Ethiopia',
    },
  ];

  return (
    <section>
      <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#0759bd]">Study</p>
      <h2 className="mt-2 mb-8 text-4xl font-black leading-none text-[#0759bd]">Education</h2>
      <div className="space-y-6">
        {items.map((item, idx) => (
          <article key={idx} className="rounded-md border border-[#0759bd]/30 bg-[#f8f5ef] p-6">
            <h3 className="text-xl font-extrabold leading-snug text-[#073f8f]">
              {item.institution}
            </h3>
            <p className="mt-2 text-sm font-semibold leading-6 text-[#244f8f]">
              Bachelor of Science in Information Technology
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm font-bold text-[#527db4]">
              <span>{item.date}</span>
              <span>•</span>
              <span>{item.location}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
