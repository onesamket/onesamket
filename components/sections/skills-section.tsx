'use client'

import { skillsList } from "@/constants/skills"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip } from "@/components/ui/tooltip"
import Link from "next/link"

// Skill categories for organization
const skillCategories = {
  frontend: ["Javascript", "Typescript", "React", "Tailwindcss", "Shadcn", "React query"],
  backend: ["Express", "Bun", "Prisma", "Rest API", "GraphQL"],
  mobile: ["React Native", "Expo", "Nativewind"],
  database: ["MySQL", "MongoDB", "Supabase"],
  tools: ["Docker", "Git & Github", "Zustand", "Remix.run"],
  other: ["More ++"]
}

type SkillItemProps = {
  label: string;
  link: string;
  index: number;
}

const SkillItem = ({ label, link, index }: SkillItemProps) => {
  const getSkillColor = (skillName: string) => {
    const colorMap: Record<string, string> = {
      "Javascript": "bg-yellow-400 text-black",
      "Typescript": "bg-blue-600 text-white",
      "React": "bg-cyan-500 text-white",
      "React Native": "bg-blue-500 text-white",
      "Tailwindcss": "bg-cyan-600 text-white",
      "Express": "bg-gray-800 text-white",
      "MongoDB": "bg-green-600 text-white",
      "MySQL": "bg-blue-800 text-white",
      "GraphQL": "bg-pink-600 text-white",
      "Docker": "bg-blue-700 text-white",
      "Git & Github": "bg-gray-900 text-white",
      "Zustand": "bg-amber-600 text-white",
    }
    
    return colorMap[skillName] || "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200";
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <Badge 
          className={`px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition-all ${getSkillColor(label)}`}
        >
          {label}
        </Badge>
      </Link>
    </motion.div>
  )
}

export default function SkillSection() {
  // Find skill details from the skillsList
  const getSkillDetails = (label: string) => {
    return skillsList.find(skill => skill.label === label) || { label, link: "#" };
  }
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 px-4 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Technologies and tools I've worked with and enjoy using in my projects
        </p>
      </motion.div>
      
      <div className="grid gap-10">
        {/* Frontend Skills */}
        <SkillCategory 
          title="Frontend Development" 
          description="Building beautiful, responsive user interfaces"
          skills={skillCategories.frontend.map(label => getSkillDetails(label))}
        />
        
        {/* Backend Skills */}
        <SkillCategory 
          title="Backend Development" 
          description="Creating robust server-side applications and APIs"
          skills={skillCategories.backend.map(label => getSkillDetails(label))}
        />
        
        {/* Mobile Development */}
        <SkillCategory 
          title="Mobile Development" 
          description="Crafting cross-platform mobile experiences"
          skills={skillCategories.mobile.map(label => getSkillDetails(label))}
        />
        
        {/* Database Skills */}
        <SkillCategory 
          title="Database & Storage" 
          description="Managing and optimizing data solutions"
          skills={skillCategories.database.map(label => getSkillDetails(label))}
        />
        
        {/* Tools & Others */}
        <SkillCategory 
          title="Tools & Utilities" 
          description="Enhancing development workflow and productivity"
          skills={[...skillCategories.tools, ...skillCategories.other].map(label => getSkillDetails(label))}
        />
      </div>
    </motion.section>
  )
}

type SkillCategoryProps = {
  title: string;
  description: string;
  skills: Array<{ label: string; link: string; }>;
}

function SkillCategory({ title, description, skills }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
        <CardContent className="p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <SkillItem 
                key={skill.label} 
                label={skill.label} 
                link={skill.link} 
                index={index} 
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}