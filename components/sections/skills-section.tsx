'use client'

import * as React from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { cn } from '@/libs/utils'
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Wrench,
  Zap
} from 'lucide-react'

type Skill = {
  name: string;
  level: number; // 0-100
  color?: string;
}

type SkillCategory = {
  name: string;
  skills: Skill[];
  color: string;
  icon: React.ReactNode;
}

// Server component (missing from lucide-react import)
function Server(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
      <line x1="6" x2="6.01" y1="6" y2="6"></line>
      <line x1="6" x2="6.01" y1="18" y2="18"></line>
    </svg>
  )
}

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

// Skill bar component
function SkillBar({ skill, color }: { skill: Skill; color: string }) {
  const controls = useAnimation()
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })
  
  React.useEffect(() => {
    if (isInView) {
      controls.start({
        width: `${skill.level}%`,
        transition: { duration: 1, ease: "easeOut" }
      })
    }
  }, [controls, isInView, skill.level])
  
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs font-semibold">{skill.level}%</span>
      </div>
      <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          ref={ref}
          initial={{ width: "0%" }}
          animate={controls}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  )
}

// Skill card component
function SkillCard({
  category,
  index
}: {
  category: SkillCategory;
  index: number;
}) {
  const controls = useAnimation()
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })
  
  React.useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])
  
  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
    >
      <div className={`h-1.5 bg-gradient-to-r ${category.color}`} />
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
            {category.icon}
          </div>
          <h3 className="text-xl font-bold">{category.name}</h3>
        </div>
        
        <div className="space-y-4">
          {category.skills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} color={category.color} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// Skill categories data
const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    color: "from-blue-600 to-cyan-500",
    icon: <Globe className="w-5 h-5" />,
    skills: [
      { name: "JavaScript", level: 95, color: "#F7DF1E" },
      { name: "TypeScript", level: 90, color: "#3178C6" },
      { name: "React", level: 92, color: "#61DAFB" },
      { name: "Next.js", level: 88, color: "#000000" },
      { name: "TailwindCSS", level: 95, color: "#06B6D4" },
      { name: "HTML/CSS", level: 98, color: "#E34F26" },
    ]
  },
  {
    name: "Backend",
    color: "from-green-600 to-emerald-500",
    icon: <Server className="w-5 h-5" />,
    skills: [
      { name: "Node.js", level: 90, color: "#339933" },
      { name: "Express", level: 88, color: "#000000" },
      { name: "Bun", level: 80, color: "#FBF0DF" },
      { name: "Prisma", level: 85, color: "#2D3748" },
      { name: "REST API", level: 92, color: "#FF6C37" },
      { name: "GraphQL", level: 78, color: "#E10098" },
    ]
  },
  {
    name: "Mobile",
    color: "from-purple-600 to-pink-500",
    icon: <Smartphone className="w-5 h-5" />,
    skills: [
      { name: "React Native", level: 85, color: "#61DAFB" },
      { name: "Expo", level: 88, color: "#000020" },
      { name: "Mobile UI/UX", level: 82, color: "#FF4785" },
      { name: "Nativewind", level: 80, color: "#38BDF8" },
    ]
  },
  {
    name: "Database",
    color: "from-amber-600 to-orange-500",
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: "MongoDB", level: 88, color: "#47A248" },
      { name: "MySQL", level: 85, color: "#4479A1" },
      { name: "PostgreSQL", level: 80, color: "#336791" },
      { name: "Supabase", level: 82, color: "#3ECF8E" },
    ]
  },
  {
    name: "Tools & DevOps",
    color: "from-gray-700 to-gray-600",
    icon: <Wrench className="w-5 h-5" />,
    skills: [
      { name: "Git & GitHub", level: 92, color: "#F05032" },
      { name: "Docker", level: 80, color: "#2496ED" },
      { name: "CI/CD", level: 78, color: "#4A154B" },
      { name: "Zustand", level: 85, color: "#FF7F11" },
    ]
  },
  {
    name: "Other",
    color: "from-indigo-600 to-blue-500",
    icon: <Zap className="w-5 h-5" />,
    skills: [
      { name: "Testing", level: 85, color: "#C21325" },
      { name: "UI/UX Design", level: 88, color: "#FF61F6" },
      { name: "Performance", level: 82, color: "#FFD600" },
      { name: "Accessibility", level: 80, color: "#0ACF83" },
    ]
  }
]

// Main skills section component
export default function SkillSection() {
  return (
    <section id="skills-section" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="space-y-16"
        >
          <div className="text-center">
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
            >
              Skills & Technologies
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              A curated collection of technologies I've mastered throughout my journey
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCard 
                key={category.name} 
                category={category} 
                index={index} 
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
