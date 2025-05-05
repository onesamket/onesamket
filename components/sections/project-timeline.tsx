'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { projectsList, ProjectType } from '@/constants/project-list'
import Link from 'next/link'
import { ExternalLink, Github, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { isValidUrl } from '@/libs/utils'
import { LinkPreview } from '../link-preview'

export default function ProjectTimelineSection() {
  // Filter featured projects
  const featuredProjects = projectsList.filter(project => project.featured)
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 max-w-5xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Project Timeline</h2>
      
      <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-6 md:ml-12 pl-6 md:pl-12">
        {featuredProjects.map((project, index) => (
          <TimelineProject key={project.title} project={project} index={index} />
        ))}
      </div>
      
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsList.filter(project => !project.featured).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function TimelineProject({ project, index }: { project: ProjectType; index: number }) {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="mb-12 relative"
    >
      {/* Timeline dot */}
      <div className="absolute w-6 h-6 bg-blue-500 rounded-full -left-[3.25rem] md:-left-[4.25rem] top-5 flex items-center justify-center">
        <div className="w-3 h-3 bg-white rounded-full"></div>
      </div>
      
      {/* Timeline date */}
      <div className="absolute -left-[11rem] top-5 hidden md:block">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2 text-blue-500" />
          <span className="text-sm font-medium">2023</span>
        </div>
      </div>
      
      <Card className="w-full overflow-hidden transition-all duration-300 hover:shadow-lg">
        <CardHeader>
          <Badge variant="secondary" className="w-fit mb-2">Featured Project</Badge>
          {project.previewUrl && isValidUrl(project.previewUrl) ? (
            <LinkPreview url={project.previewUrl}>
              <CardTitle className="text-xl">{project.title}</CardTitle>
            </LinkPreview>
          ) : (
            <CardTitle className="text-xl">{project.title}</CardTitle>
          )}
          <CardDescription className="text-sm">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {project.technologies && (
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button variant="outline" size="sm" asChild>
            <Link href={project.previewUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Preview
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

function ProjectCard({ project, index }: { project: ProjectType; index: number }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-md">
        <CardHeader>
          {project.previewUrl && isValidUrl(project.previewUrl) ? (
            <LinkPreview url={project.previewUrl}>
              <CardTitle className="text-xl">{project.title}</CardTitle>
            </LinkPreview>
          ) : (
            <CardTitle className="text-xl">{project.title}</CardTitle>
          )}
          <CardDescription className="text-sm line-clamp-2">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          {project.technologies && (
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button variant="outline" size="sm" asChild>
            <Link href={project.previewUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Preview
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
