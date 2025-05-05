'use client'

import * as React from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { projectsList, ProjectType } from '@/constants/project-list'
import Link from 'next/link'
import { ExternalLink, Github, Calendar, Code, Star, ArrowUpRight, Clock, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn, isValidUrl } from '@/libs/utils'
import { LinkPreview } from '../link-preview'

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

export default function ProjectTimelineSection() {
  // Filter featured projects
  const featuredProjects = projectsList.filter(project => project.featured)
  const otherProjects = projectsList.filter(project => !project.featured)
  
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      id="projects-section"
      className="py-20 px-4 max-w-6xl mx-auto"
    >
      <div className="text-center mb-16">
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400"
        >
          Project Showcase
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          A collection of my most significant work and contributions
        </motion.p>
      </div>
      
      {/* Featured Projects */}
      <motion.div variants={itemVariants} className="mb-20">
        <div className="flex items-center mb-8">
          <Star className="w-5 h-5 text-yellow-500 mr-2" />
          <h3 className="text-2xl font-bold">Featured Projects</h3>
        </div>
        
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <TimelineProject 
                key={project.title} 
                project={project} 
                index={index} 
                isEven={index % 2 === 0} 
              />
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Other Projects */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center mb-8">
          <Code className="w-5 h-5 text-blue-500 mr-2" />
          <h3 className="text-2xl font-bold">Other Projects</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}

function TimelineProject({ 
  project, 
  index, 
  isEven 
}: { 
  project: ProjectType; 
  index: number;
  isEven: boolean;
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
    <div className="relative flex flex-col md:flex-row items-center md:justify-center">
      {/* Timeline dot with pulse effect */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10">
        <div className="w-6 h-6 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-500 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
        </div>
        <div className="absolute top-0 left-0 w-6 h-6 rounded-full bg-blue-500 opacity-30 animate-ping"></div>
      </div>
      
      {/* Date marker - mobile only */}
      <div className="md:hidden absolute left-10 top-0 flex items-center">
        <Clock className="w-4 h-4 mr-1 text-blue-500" />
        <span className="text-xs font-medium">{project.date || '2023'}</span>
      </div>
      
      {/* Project card - alternating sides on desktop */}
      <motion.div
        ref={ref}
        variants={itemVariants}
        className={cn(
          "w-full md:w-[calc(50%-20px)] ml-10 md:ml-0",
          isEven ? "md:mr-auto" : "md:ml-auto"
        )}
      >
        {/* Date marker - desktop only */}
        <div className={cn(
          "hidden md:flex items-center mb-2 text-sm font-medium",
          isEven ? "justify-end" : "justify-start"
        )}>
          <Clock className={cn("w-4 h-4", isEven ? "ml-1 order-2" : "mr-1")} />
          <span>{project.date || '2023'}</span>
        </div>
        
        <Card className="w-full overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600">
                Featured
              </Badge>
              <div className="flex items-center text-xs text-gray-500">
                <Tag className="w-3 h-3 mr-1" />
                <span>{project.category || 'Project'}</span>
              </div>
            </div>
            
            {project.previewUrl && isValidUrl(project.previewUrl) ? (
              <LinkPreview url={project.previewUrl}>
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
              </LinkPreview>
            ) : (
              <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
            )}
            
            <CardDescription className="text-sm mt-2">
              {project.description}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            {project.technologies && (
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className="text-xs px-2 py-0 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
          
          <CardFooter className="flex justify-between items-center gap-2">
            {project.previewUrl && (
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 dark:from-gray-800 dark:to-gray-700 border-blue-200 dark:border-gray-600" 
                asChild
              >
                <Link href={project.previewUrl} target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight className="w-4 h-4 mr-2" />
                  Live Demo
                </Link>
              </Button>
            )}
            
            {project.githubUrl && (
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1 bg-gradient-to-r from-gray-50 to-slate-50 hover:from-gray-100 hover:to-slate-100 dark:from-gray-800 dark:to-gray-700 border-gray-200 dark:border-gray-600" 
                asChild
              >
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Link>
              </Button>
            )}
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: ProjectType; index: number }) {
  const controls = useAnimation()
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })
  
  React.useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])
  
  // Generate a gradient color based on index
  const gradients = [
    "from-blue-500 to-cyan-400",
    "from-purple-500 to-pink-400",
    "from-amber-500 to-orange-400",
    "from-green-500 to-emerald-400",
    "from-indigo-500 to-blue-400",
    "from-rose-500 to-red-400"
  ]
  
  const gradient = gradients[index % gradients.length]
  
  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90">
        {/* Gradient top bar */}
        <div className={`h-1 w-full bg-gradient-to-r ${gradient}`} />
        
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center text-xs text-gray-500">
              <Calendar className="w-3 h-3 mr-1" />
              <span>{project.date || '2023'}</span>
            </div>
            
            <div className="flex items-center text-xs text-gray-500">
              <Tag className="w-3 h-3 mr-1" />
              <span>{project.category || 'Project'}</span>
            </div>
          </div>
          
          {project.previewUrl && isValidUrl(project.previewUrl) ? (
            <LinkPreview url={project.previewUrl}>
              <CardTitle className="text-lg font-bold">{project.title}</CardTitle>
            </LinkPreview>
          ) : (
            <CardTitle className="text-lg font-bold">{project.title}</CardTitle>
          )}
          
          <CardDescription className="text-sm line-clamp-2 mt-1">
            {project.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex-grow pt-0">
          {project.technologies && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge 
                  key={tech} 
                  variant="outline" 
                  className="text-xs px-2 py-0 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="outline" className="text-xs px-2 py-0 rounded-full">
                  +{project.technologies.length - 4} more
                </Badge>
              )}
            </div>
          )}
        </CardContent>
        
        <CardFooter className="flex gap-2">
          {project.previewUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 dark:from-gray-800 dark:to-gray-700 border-blue-200 dark:border-gray-600" 
              asChild
            >
              <Link href={project.previewUrl} target="_blank" rel="noopener noreferrer">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                Demo
              </Link>
            </Button>
          )}
          
          {project.githubUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 bg-gradient-to-r from-gray-50 to-slate-50 hover:from-gray-100 hover:to-slate-100 dark:from-gray-800 dark:to-gray-700 border-gray-200 dark:border-gray-600" 
              asChild
            >
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-1" />
                Code
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
