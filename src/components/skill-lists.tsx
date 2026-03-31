import React from 'react';
import {
  Code2,
  Layers,
  Smartphone,
  Server,
  Database,
  Network,
  Cloud,
  Lightbulb,
  Users,
  Target,
  Clock,
  Sparkles,
  Zap,
  Heart
} from 'lucide-react';

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  color: string;
}

const SkillLists: React.FC = () => {
  const coreCategories: SkillCategory[] = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Languages',
      skills: ['TypeScript', 'JavaScript', 'Node.js'],
      color: '#4D807B'
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Frontend',
      skills: ['React', 'Next.js', 'Tailwind CSS'],
      color: '#4D807B'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile',
      skills: ['React Native', 'Expo', 'Cross-platform'],
      color: '#4D807B'
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Backend',
      skills: ['NestJS', 'Node.js', 'Bun', 'Express'],
      color: '#4D807B'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Database',
      skills: ['SQL', 'NoSQL', 'Prisma', 'ORM'],
      color: '#4D807B'
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: 'API Design',
      skills: ['REST', 'GraphQL', 'Socket.io', 'WebSocket'],
      color: '#4D807B'
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'DevOps',
      skills: ['Docker', 'Git', 'CI/CD', 'Deployment'],
      color: '#4D807B'
    }
  ];

  const softSkills = [
    { icon: <Heart className="w-5 h-5" />, label: 'Responsible & Dedicated' },
    { icon: <Target className="w-5 h-5" />, label: 'Well-organized Workflow' },
    { icon: <Users className="w-5 h-5" />, label: 'Team Collaboration' },
    { icon: <Clock className="w-5 h-5" />, label: 'Time Management' },
    { icon: <Lightbulb className="w-5 h-5" />, label: 'Problem Solving' },
    { icon: <Zap className="w-5 h-5" />, label: 'Initiative & Autonomy' },
    { icon: <Sparkles className="w-5 h-5" />, label: 'Technical Mentorship' }
  ];

  return (
    <section className="py-16 border-t border-gray-300">
      {/* Section Header */}
      <div className="mb-16">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#4D807B] mb-4 block">
          What I Do
        </span>
        <h2 className="text-5xl md:text-6xl serif-font text-gray-900">Core Skills</h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {coreCategories.map((category, idx) => (
          <div
            key={idx}
            className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-[#4D807B] hover:shadow-lg transition-all duration-300"
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300"
              style={{ backgroundColor: `${category.color}15` }}
            >
              <div className="text-[#4D807B]">{category.icon}</div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIdx) => (
                <span
                  key={skillIdx}
                  className="px-2.5 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full group-hover:bg-[#4D807B] group-hover:text-white transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soft Skills Section */}
      <div className="border-t border-gray-200 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Header */}
          <div className="lg:col-span-1">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#4D807B] mb-4 block">
              How I Work
            </span>
            <h2 className="text-4xl md:text-5xl serif-font text-gray-900">Soft Skills</h2>
            <p className="mt-4 text-gray-500 text-lg font-light leading-relaxed">
              Beyond technical expertise, these qualities define my approach to work and collaboration.
            </p>
          </div>

          {/* Soft Skills Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {softSkills.map((skill, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#4D807B]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#4D807B] transition-colors duration-300">
                  <div className="text-[#4D807B] group-hover:text-white transition-colors duration-300">
                    {skill.icon}
                  </div>
                </div>
                <span className="text-gray-700 font-medium">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillLists;
