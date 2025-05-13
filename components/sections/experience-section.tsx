'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, Building2, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

type ExperienceType = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
  companyUrl?: string;
  current?: boolean;
}

const experiences: ExperienceType[] = [
  {
    title: "Senior Full Stack Developer",
    company: "TechEthiopia",
    location: "Addis Ababa, Ethiopia",
    period: "Jan 2023 - Present",
    description: "Leading development of enterprise web applications using React, Node.js and TypeScript. Implemented CI/CD pipelines and mentored junior developers.",
    skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS", "CI/CD"],
    companyUrl: "https://techethiopia.com",
    current: true
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Inc.",
    location: "Remote",
    period: "Jun 2021 - Dec 2022",
    description: "Developed responsive web applications and implemented modern UI/UX designs. Collaborated with cross-functional teams to deliver high-quality products.",
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "REST APIs"],
    companyUrl: "https://example.com"
  }
]

export default function ExperienceSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 max-w-5xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Work Experience</h2>
      <div className="flex flex-col gap-6">
        {experiences.map((experience, index) => (
          <ExperienceCard key={`${experience.company}-${index}`} experience={experience} index={index} />
        ))}
      </div>
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
      <Card className="overflow-hidden transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:shadow-md dark:hover:shadow-gray-800/30">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl flex items-center gap-2">
                {experience.title}
                {experience.current && (
                  <Badge variant="secondary" className="ml-2">Current</Badge>
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
          <div className="flex flex-wrap gap-2 mt-4">
            {experience.skills.map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs font-normal">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
