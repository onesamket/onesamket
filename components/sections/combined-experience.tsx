'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, Building2, ExternalLink, GraduationCap, Briefcase, MapPin } from 'lucide-react'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type ExperienceType = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
  companyUrl?: string;
  current?: boolean;
  type: 'client' | 'personal';
}

type EducationType = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
  institutionUrl?: string;
}

const workExperiences: ExperienceType[] = [
  {
    title: "Senior Full Stack Developer",
    company: "TechEthiopia",
    location: "Addis Ababa, Ethiopia",
    period: "Jan 2023 - Present",
    description: "Leading development of enterprise web applications using React, Node.js and TypeScript. Implemented CI/CD pipelines and mentored junior developers.",
    skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS", "CI/CD"],
    companyUrl: "https://techethiopia.com",
    current: true,
    type: 'client'
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Inc.",
    location: "Remote",
    period: "Jun 2021 - Dec 2022",
    description: "Developed responsive web applications and implemented modern UI/UX designs. Collaborated with cross-functional teams to deliver high-quality products.",
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "REST APIs"],
    companyUrl: "https://example.com",
    type: 'client'
  },
  {
    title: "Web Developer Intern",
    company: "Haramaya University",
    location: "Haramaya, Ethiopia",
    period: "Jan 2020 - May 2021",
    description: "Assisted in developing and maintaining university websites and internal applications. Gained hands-on experience with web technologies.",
    skills: ["HTML/CSS", "JavaScript", "PHP", "WordPress", "MySQL"],
    companyUrl: "https://www.haramaya.edu.et/",
    type: 'client'
  },
  {
    title: "Open Source Contributor",
    company: "React Component Library",
    location: "Remote",
    period: "2022 - Present",
    description: "Created and maintained reusable React components with TypeScript support and accessibility features. Implemented comprehensive test coverage.",
    skills: ["React", "TypeScript", "Storybook", "Jest", "Accessibility"],
    companyUrl: "https://github.com/onesamket/react-components",
    type: 'personal'
  },
  {
    title: "Project Lead",
    company: "Ethiopian Localization Package",
    location: "Remote",
    period: "2021 - Present",
    description: "Created and maintained a localization package for Ethiopian languages with React integration. Implemented cultural adaptations and language support.",
    skills: ["JavaScript", "React", "i18n", "Cultural Adaptation"],
    companyUrl: "https://github.com/onesamket/et-locale",
    type: 'personal'
  }
]

const educationList: EducationType[] = [
  {
    degree: "BSc in Information Technology",
    institution: "Haramaya University",
    location: "Haramaya, Ethiopia",
    period: "2020 - 2024",
    description: "Graduated with honors, specializing in information technology.",
    achievements: [
      "Exit exam platform development",
      "More than two e-commerce websites development",
    ],
    institutionUrl: "https://www.haramaya.edu.et/"
  },

  {
    degree: "Advanced TypeScript Certification",
    institution: "Total TypeScript ",
    location: "Online",
    period: "2022",
    description: "Specialized training in advanced TypeScript concepts and patterns.",
    achievements: [
      "Mastered generics, conditional types, and type inference",
      "Implemented enterprise-level type systems",
      "Created type-safe libraries and utilities "
    ],
    institutionUrl: "https://totaltypescript.com/"
  }
]

export default function CombinedExperienceSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 max-w-6xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Experience & Education</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          My professional journey and academic background
        </p>
      </div>
      
      <Tabs defaultValue="experience" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="experience" className="text-base">
            <Briefcase className="w-4 h-4 mr-2" />
            Work Experience
          </TabsTrigger>
          <TabsTrigger value="personal" className="text-base">
            <Building2 className="w-4 h-4 mr-2" />
            Personal Projects
          </TabsTrigger>
          <TabsTrigger value="education" className="text-base">
            <GraduationCap className="w-4 h-4 mr-2" />
            Education
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="experience" className="space-y-6">
          {workExperiences
            .filter(exp => exp.type === 'client')
            .map((experience, index) => (
              <ExperienceCard key={`${experience.company}-${index}`} experience={experience} index={index} />
            ))}
        </TabsContent>
        
        <TabsContent value="personal" className="space-y-6">
          {workExperiences
            .filter(exp => exp.type === 'personal')
            .map((experience, index) => (
              <ExperienceCard key={`${experience.company}-${index}`} experience={experience} index={index} />
            ))}
        </TabsContent>
        
        <TabsContent value="education" className="space-y-6">
          {educationList.map((education, index) => (
            <EducationCard key={`${education.institution}-${index}`} education={education} index={index} />
          ))}
        </TabsContent>
      </Tabs>
    </motion.section>
  )
}

function ExperienceCard({ experience, index }: { experience: ExperienceType; index: number }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden transition-all duration-300 border-l-4 hover:border-l-8 border-l-blue-500 dark:border-l-blue-400 hover:shadow-md">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl flex items-center gap-2">
                {experience.title}
                {experience.current && (
                  <Badge variant="default" className="ml-2">Current</Badge>
                )}
              </CardTitle>
              <div className="flex items-center mt-1">
                <Building2 className="w-4 h-4 mr-1 text-muted-foreground" />
                <CardDescription className="text-sm">
                  {experience.companyUrl ? (
                    <Link href={experience.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                      {experience.company}
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Link>
                  ) : (
                    experience.company
                  )}
                  <span className="mx-2">•</span>
                  {experience.location}
                </CardDescription>
              </div>
              <div className="flex items-center mt-1">
                <CalendarDays className="w-4 h-4 mr-1 text-muted-foreground" />
                <CardDescription>{experience.period}</CardDescription>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm">{experience.description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {experience.skills.map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function EducationCard({ education, index }: { education: EducationType; index: number }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden transition-all duration-300 border-l-4 hover:border-l-8 border-l-green-500 dark:border-l-green-400 hover:shadow-md">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl flex items-center gap-2">
                <GraduationCap className="w-5 h-5 mr-1" />
                {education.degree}
              </CardTitle>
              <div className="flex items-center mt-1">
                <CardDescription className="text-sm">
                  {education.institutionUrl ? (
                    <Link href={education.institutionUrl} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                      {education.institution}
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Link>
                  ) : (
                    education.institution
                  )}
                </CardDescription>
              </div>
              <div className="flex items-center mt-1">
                <MapPin className="w-4 h-4 mr-1 text-muted-foreground" />
                <CardDescription>{education.location}</CardDescription>
                <span className="mx-2">•</span>
                <CalendarDays className="w-4 h-4 mr-1 text-muted-foreground" />
                <CardDescription>{education.period}</CardDescription>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm">{education.description}</p>
          {education.achievements && (
            <div className="mt-2">
              <h4 className="text-sm font-medium mb-2">Key Achievements:</h4>
              <ul className="list-disc pl-5 text-sm space-y-1">
                {education.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
