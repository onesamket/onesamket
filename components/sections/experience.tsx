'use client';

import { Badge } from '@/components/ui/badge';
import {
  educationList,
  personalProjects,
  workExperiences,
} from '@/constants/profile';
import { EducationType, ExperienceType, ProjectType } from '@/types';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Building2,
  ExternalLink,
  Github,
  GraduationCap,
  MapPin,
} from 'lucide-react';
import Link from 'next/link';
import { LinkPreview } from '../link-preview';

export default function CombinedExperienceSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mx-auto max-w-6xl px-4 py-20"
    >
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold">Experience & Education</h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          My professional journey and academic background
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Professional Experience Column */}
        <div>
          <div className="mb-6 flex items-center">
            <Briefcase className="mr-2 h-5 w-5 text-blue-500" />
            <h3 className="text-2xl font-bold">Professional Experience</h3>
          </div>
          <div className="relative space-y-8">
            {/* Timeline line */}
            <div className="absolute bottom-0 left-2 top-2 w-0.5 bg-blue-200 dark:bg-blue-800/30"></div>

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

          <div className="mb-6 mt-12 flex items-center">
            <Building2 className="mr-2 h-5 w-5 text-purple-500" />
            <h3 className="text-2xl font-bold">Personal Projects</h3>
          </div>
          <div className="relative space-y-8">
            {/* Timeline line */}
            <div className="absolute bottom-0 left-2 top-2 w-0.5 bg-purple-200 dark:bg-purple-800/30"></div>

            {personalProjects.map((project, index) => (
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
          <div className="mb-6 flex items-center">
            <GraduationCap className="mr-2 h-5 w-5 text-green-500" />
            <h3 className="text-2xl font-bold">Education</h3>
          </div>
          <div className="relative space-y-8">
            {/* Timeline line */}
            <div className="absolute bottom-0 left-2 top-2 w-0.5 bg-green-200 dark:bg-green-800/30"></div>

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
  );
}

function ExperienceTimelineItem({
  experience,
  index,
}: {
  experience: ExperienceType;
  index: number;
}) {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative ml-8"
    >
      {/* Timeline dot */}
      <div className="absolute -left-10 ml-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-white bg-blue-500 dark:border-gray-900"></div>

      <div className="mb-2">
        <div className="flex items-baseline justify-between">
          <h4 className="text-lg font-medium">
            {experience.title}
            {experience.current && (
              <Badge variant="default" className="ml-5 text-xs">
                Current
              </Badge>
            )}
          </h4>
          <span className="text-sm text-muted-foreground">
            {experience.period}
          </span>
        </div>

        <div className="flex items-center text-sm text-muted-foreground">
          <Building2 className="mr-1 h-3.5 w-3.5" />
          {experience.companyUrl ? (
            <Link
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-primary hover:underline"
            >
              {experience.company}
              <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          ) : (
            experience.company
          )}
          <span className="mx-1.5">•</span>
          <MapPin className="mr-1 h-3.5 w-3.5" />
          <span>{experience.location}</span>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectTimelineItem({
  project,
  index,
}: {
  project: ProjectType;
  index: number;
}) {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative ml-8"
    >
      {/* Timeline dot */}
      <div className="absolute -left-10 ml-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-white bg-purple-500 dark:border-gray-900"></div>

      <div className="mb-2">
        <div className="flex items-baseline justify-start">
          <h4 className="text-lg font-medium">{project.title}</h4>
          {project.lovedByDeveloper && (
            <Badge variant="lovedByDeveloper" className="ml-5 text-xs">
              Loved by Developer
            </Badge>
          )}
        </div>

        <div className="flex items-start text-sm text-muted-foreground">
          <p className="hidden justify-start text-sm sm:flex">
            {project.description}
          </p>
        </div>

        <div className="flex items-center text-sm text-muted-foreground">
          <ExternalLink className="mr-1 h-3.5 w-3.5" />
          {project.previewUrl ? (
            <LinkPreview
              url={project.previewUrl}
              className="flex items-center hover:text-primary hover:underline"
            >
              <p>Preview</p>
            </LinkPreview>
          ) : (
            project.previewUrl
          )}
        </div>

        <div className="flex items-center text-sm text-muted-foreground">
          <Github className="mr-1 h-3.5 w-3.5" />
          <span>{project.githubUrl ? `${project.githubUrl}` : ''}</span>
        </div>
      </div>
    </motion.div>
  );
}

function EducationTimelineItem({
  education,
  index,
}: {
  education: EducationType;
  index: number;
}) {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative ml-8"
    >
      {/* Timeline dot */}
      <div className="absolute -left-10 ml-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-white bg-green-500 dark:border-gray-900"></div>

      <div className="mb-2">
        <div className="flex items-baseline justify-between">
          <h4 className="text-lg font-medium">{education.degree}</h4>
          <span className="text-sm text-muted-foreground">
            {education.period}
          </span>
        </div>

        <div className="flex text-sm text-muted-foreground">
          <GraduationCap className="mr-1 h-3.5 w-3.5" />
          {education.institutionUrl ? (
            <Link
              href={education.institutionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-primary hover:underline"
            >
              {education.institution}
              <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          ) : (
            education.institution
          )}
          <span className="mx-1.5">•</span>
          <MapPin className="mr-1 h-3.5 w-3.5" />
          <span>{education.location}</span>
        </div>
      </div>
    </motion.div>
  );
}
