'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, GraduationCap, MapPin, ExternalLink } from 'lucide-react'
import Link from 'next/link'

type EducationType = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
  institutionUrl?: string;
}

const educationList: EducationType[] = [
  {
    degree: "BSc in Computer Science",
    institution: "Haramaya University",
    location: "Haramaya, Ethiopia",
    period: "2017 - 2021",
    description: "Graduated with honors, specializing in software development and web technologies.",
    achievements: [
      "Dean's List for academic excellence",
      "Capstone project: Developed an accessibility-focused exam platform",
      "Participated in university coding competitions"
    ],
    institutionUrl: "https://www.haramaya.edu.et/"
  },
  {
    degree: "Web Development Certification",
    institution: "Udacity",
    location: "Online",
    period: "2020",
    description: "Completed intensive front-end web development nanodegree program.",
    achievements: [
      "Built responsive web applications using modern frameworks",
      "Implemented accessibility best practices",
      "Received recognition for project excellence"
    ],
    institutionUrl: "https://www.udacity.com/"
  },
  {
    degree: "Advanced TypeScript Certification",
    institution: "TypeScript Academy",
    location: "Online",
    period: "2022",
    description: "Specialized training in advanced TypeScript concepts and patterns.",
    achievements: [
      "Mastered generics, conditional types, and type inference",
      "Implemented enterprise-level type systems",
      "Created type-safe libraries and utilities"
    ],
    institutionUrl: "https://www.typescriptlang.org/"
  }
]

export default function EducationSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 max-w-5xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Education</h2>
      <div className="flex flex-col gap-6">
        {educationList.map((education, index) => (
          <EducationCard key={`${education.institution}-${index}`} education={education} index={index} />
        ))}
      </div>
    </motion.section>
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
      <Card className="overflow-hidden transition-all duration-300 border-l-4 hover:border-l-8 border-l-green-500 dark:border-l-green-400">
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
