
import React from 'react';

const Education: React.FC = () => {
  const items = [
    {
      institution: "Haramaya University",
      date: "2020 - 2024",
      location: "Ethiopia",
      highlight: true
    }
  ];

  return (
    <section>
      <h2 className="text-4xl serif-font mb-8">Education</h2>
      <div className="space-y-8">
        {items.map((item, idx) => (
          <div key={idx} className="space-y-2">
            <h3 className="font-semibold text-lg leading-snug">
              {item.institution}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="font-medium text-[#4D807B]">{item.date}</span>
              <span>•</span>
              <span>{item.location}</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Education;
