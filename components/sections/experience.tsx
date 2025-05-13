'use client'

import { Badge } from '@/components/ui/badge'
import { educationList, personalProjects, workExperiences } from '@/constants/profolio-data'
import { EducationType, ExperienceType, personalProjectsType } from '@/types'
import { motion } from 'framer-motion'
import { Briefcase, Building2, ExternalLink, Github, GraduationCap, MapPin } from 'lucide-react'
import Link from 'next/link'
import { LinkPreview } from '../link-preview'



export default function CombinedExperienceSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 max-w-6xl mx-auto"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Experience & Education</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          My professional journey and academic background
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Professional Experience Column */}
        <div>
          <div className="flex items-center mb-6">
            <Briefcase className="w-5 h-5 mr-2 text-blue-500" />
            <h3 className="text-2xl font-bold">Professional Experience</h3>
          </div>
          <div className="space-y-8 relative">
            {/* Timeline line */}
            <div className="absolute left-2 top-2 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800/30"></div>
            
            {workExperiences
              .filter(exp => exp.type === 'client')
              .map((experience, index) => (
                <ExperienceTimelineItem 
                  key={`${experience.company}-${index}`} 
                  experience={experience} 
                  index={index} 
                />
              ))}
          </div>
          
          <div className="flex items-center mt-12 mb-6">
            <Building2 className="w-5 h-5 mr-2 text-purple-500" />
            <h3 className="text-2xl font-bold">Personal Projects</h3>
          </div>
          <div className="space-y-8 relative">
            {/* Timeline line */}
            <div className="absolute left-2 top-2 bottom-0 w-0.5 bg-purple-200 dark:bg-purple-800/30"></div>
            
            {personalProjects
              .map((project, index) => (
                <ProjectTimelineItem 
                  key={`${project.title}-${index}`} 
                  project={project} 
                  index={index} 
                />
              ))}
          </div>
        </div>
        
        {/* Education Column */}
        <div>
          <div className="flex items-center mb-6">
            <GraduationCap className="w-5 h-5 mr-2 text-green-500" />
            <h3 className="text-2xl font-bold">Education</h3>
          </div>
          <div className="space-y-8 relative">
            {/* Timeline line */}
            <div className="absolute left-2 top-2 bottom-0 w-0.5 bg-green-200 dark:bg-green-800/30"></div>
            
            {educationList.map((education, index) => (
              <EducationTimelineItem 
                key={`${education.institution}-${index}`} 
                education={education} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

function ExperienceTimelineItem({ experience, index }: { experience: ExperienceType; index: number }) {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="ml-8 relative"
    >
      {/* Timeline dot */}
      <div className="absolute -left-10 w-4 h-4  ml-[9px]   rounded-full bg-blue-500 border-2 border-white dark:border-gray-900 mt-1.5"></div>
      
      <div className="mb-2">
        <div className="flex items-baseline justify-between">
          <h4 className="text-lg font-medium">
            {experience.title}
            {experience.current && (
              <Badge variant="default" className="ml-5 text-xs">Current</Badge>
            )}
          </h4>
          <span className="text-sm text-muted-foreground">{experience.period}</span>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground">
          <Building2 className="w-3.5 h-3.5 mr-1" />
          {experience.companyUrl ? (
            <Link href={experience.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline flex items-center">
              {experience.company}
              <ExternalLink className="w-3 h-3 ml-1" />
            </Link>
          ) : (
            experience.company
          )}
          <span className="mx-1.5">•</span>
          <MapPin className="w-3.5 h-3.5 mr-1" />
          <span>{experience.location}</span>
        </div>
      </div>
      
      
      <div className="flex flex-wrap gap-1.5">
        {experience.skills.map((skill) => (
          <Badge key={skill} variant="outline" className="text-xs px-2 py-0.5">
            {skill}
          </Badge>
        ))}
      </div>
    </motion.div>
  )
}



function ProjectTimelineItem({ project, index }: { project: personalProjectsType; index: number }) {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="ml-8 relative"
    >
      {/* Timeline dot */}
      <div className="absolute -left-10 w-4 h-4 ml-[9px] rounded-full bg-purple-500 border-2 border-white dark:border-gray-900 mt-1.5"></div>
      
      <div className="mb-2">
        <div className="flex items-baseline justify-start">
          <h4 className="text-lg font-medium">{project.title}</h4>
          {project.lovedByDeveloper && (
            <Badge variant="lovedByDeveloper" className="ml-5 text-xs">Loved by Developer</Badge>
          )}
        </div>
        
        <div className="flex items-start text-sm text-muted-foreground">
          <p className="text-sm justify-start hidden sm:flex">{project.description}</p>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground">
          <ExternalLink className="w-3.5 h-3.5 mr-1" />
          {project.previewUrl ? (
            <LinkPreview url={project.previewUrl} className="hover:text-primary hover:underline flex items-center">
              <p>Preview</p>
            </LinkPreview>
          ) : (
            project.previewUrl
          )}
        </div>
        
      
        
        <div className="flex items-center text-sm text-muted-foreground">
          <Github className="w-3.5 h-3.5 mr-1" />
          <span>{project.githubUrl ? `${project.githubUrl}` : ''}</span>
        </div>
      </div>      
      <div className="flex flex-wrap gap-1.5">
        {project.skills.map((skill) => (
          <Badge key={skill} variant="outline" className="text-xs px-2 py-0.5">
            {skill}
          </Badge>
        ))}
      </div>
    </motion.div>
  )
}

function EducationTimelineItem({ education, index }: { education: EducationType; index: number }) {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="ml-8 relative"
    >
      {/* Timeline dot */}
      <div className="absolute -left-10 w-4 h-4 ml-[9px] rounded-full bg-green-500 border-2 border-white dark:border-gray-900 mt-1.5"></div>
      
      <div className="mb-2">
        <div className="flex items-baseline justify-between">
          <h4 className="text-lg font-medium">{education.degree}</h4>
          <span className="text-sm text-muted-foreground">{education.period}</span>
        </div>
        
        <div className="flex text-sm text-muted-foreground">
          <GraduationCap className="w-3.5 h-3.5 mr-1" />
          {education.institutionUrl ? (
            <Link href={education.institutionUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline flex items-center">
              {education.institution}
              <ExternalLink className="w-3 h-3 ml-1" />
            </Link>
          ) : (
            education.institution
          )}
          <span className="mx-1.5">•</span>
          <MapPin className="w-3.5 h-3.5 mr-1" />
          <span>{education.location}</span>
        </div>
      </div>     
    </motion.div>
  )
}
