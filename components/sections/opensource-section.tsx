'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Github, Star, GitFork, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

type OpenSourceProjectType = {
  title: string;
  description: string;
  repoUrl: string;
  demoUrl?: string;
  stars?: number;
  forks?: number;
  technologies: string[];
  contribution: string;
}

const openSourceProjects: OpenSourceProjectType[] = [
  {
    title: "React Component Library",
    description: "A collection of reusable React components with TypeScript support and accessibility features.",
    repoUrl: "https://github.com/onesamket/react-components",
    demoUrl: "https://react-components-demo.vercel.app",
    stars: 45,
    forks: 12,
    technologies: ["React", "TypeScript", "Storybook", "Jest", "CSS Modules"],
    contribution: "Created 15+ components and implemented comprehensive test coverage. Added accessibility features and documentation."
  },
  {
    title: "TypeScript Utility Functions",
    description: "A library of type-safe utility functions for common JavaScript operations with full TypeScript support.",
    repoUrl: "https://github.com/onesamket/ts-utils",
    demoUrl: "https://ts-utils-docs.vercel.app",
    stars: 28,
    forks: 8,
    technologies: ["TypeScript", "Jest", "ESLint", "GitHub Actions"],
    contribution: "Core contributor. Implemented advanced type inference and created comprehensive documentation."
  },
  {
    title: "Ethiopian Localization Package",
    description: "A localization package for Ethiopian languages (Amharic, Tigrinya, Oromiffa) with React integration.",
    repoUrl: "https://github.com/onesamket/et-locale",
    demoUrl: "https://et-locale.vercel.app",
    stars: 67,
    forks: 15,
    technologies: ["JavaScript", "React", "i18n", "Cultural Adaptation"],
    contribution: "Project creator and maintainer. Implemented language support and cultural adaptations."
  }
]

export default function OpenSourceSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Open Source Contributions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {openSourceProjects.map((project, index) => (
          <OpenSourceCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </motion.section>
  )
}

function OpenSourceCard({ project, index }: { project: OpenSourceProjectType; index: number }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:shadow-md dark:hover:shadow-gray-800/30">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Github className="w-5 h-5" />
            {project.title}
          </CardTitle>
          <CardDescription className="text-sm line-clamp-2">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
            {project.stars !== undefined && (
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1 fill-yellow-400 stroke-yellow-400" />
                {project.stars}
              </div>
            )}
            {project.forks !== undefined && (
              <div className="flex items-center">
                <GitFork className="w-4 h-4 mr-1" />
                {project.forks}
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2">My Contribution:</h4>
            <p className="text-sm text-muted-foreground">{project.contribution}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button variant="outline" size="sm" asChild>
            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Repository
            </Link>
          </Button>
          {project.demoUrl && (
            <Button variant="outline" size="sm" asChild>
              <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
