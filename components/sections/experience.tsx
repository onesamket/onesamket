'use client';

import { Badge } from '@/components/ui/badge';
import {
  educationList,
  personalProjects,
  workExperiences,
} from '@/constants/profile';
import { EducationType, ExperienceType, ProjectType } from '@/types';
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
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:px-8 md:py-20">
      <div className="mb-10 text-center md:mb-12">
        <h2 className="mb-2 text-3xl font-bold sm:text-4xl">
          Experience & Education
        </h2>
        <p className="mx-auto max-w-2xl text-base text-gray-600 dark:text-gray-400 sm:text-lg">
          My professional journey and academic background
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Professional Experience Column */}
        <div>
          <div className="mb-4 flex items-center">
            <Briefcase
              className="mr-2 h-5 w-5 text-black dark:text-white"
              aria-hidden="true"
            />
            <h3 className="text-xl font-bold sm:text-2xl">
              Professional Experience
            </h3>
          </div>
          <div
            className="relative space-y-8"
            role="list"
            aria-label="Professional experience timeline"
          >
            {/* Timeline line */}
            <div
              className="absolute bottom-0 left-4 top-6 w-0.5 bg-black/60 dark:bg-white/60"
              aria-hidden="true"
            ></div>

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

          <div className="mb-4 mt-12 flex items-center sm:mb-6">
            <Building2
              className="mr-2 h-5 w-5 text-black dark:text-white"
              aria-hidden="true"
            />
            <h3 className="text-xl font-bold sm:text-2xl">Personal Projects</h3>
          </div>
          <div
            className="relative space-y-8"
            role="list"
            aria-label="Personal projects timeline"
          >
            {/* Timeline line */}
            <div
              className="absolute bottom-0 left-4 top-6 w-0.5 bg-black/60 dark:bg-white/60"
              aria-hidden="true"
            ></div>

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
          <div className="mb-4 flex items-center sm:mb-6">
            <GraduationCap
              className="mr-2 h-5 w-5 text-black dark:text-white"
              aria-hidden="true"
            />
            <h3 className="text-xl font-bold sm:text-2xl">Education</h3>
          </div>
          <div
            className="relative space-y-8"
            role="list"
            aria-label="Education timeline"
          >
            {/* Timeline line */}
            <div
              className="absolute bottom-0 left-4 top-6 w-0.5 bg-black/60 dark:bg-white/60"
              aria-hidden="true"
            ></div>

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
    </section>
  );
}

function ExperienceTimelineItem({
  experience,
}: {
  experience: ExperienceType;
  index: number;
}) {
  return (
    <div className="relative pl-12" role="listitem">
      {/* Timeline dot */}
      <div
        className="absolute left-3 top-2 h-4 w-4 rounded-full border-2 border-black bg-white dark:border-white dark:bg-black"
        aria-hidden="true"
      ></div>

      <div className="mb-2">
        <div className="flex flex-col items-start justify-between gap-1 sm:flex-row sm:items-baseline">
          <h4 className="text-base font-semibold sm:text-lg">
            {experience.title}
            {experience.current && (
              <Badge
                variant="default"
                className="ml-3 align-middle text-[10px] sm:ml-5 sm:text-xs"
              >
                Current
              </Badge>
            )}
          </h4>
          <span className="text-sm text-muted-foreground">
            {experience.period}
          </span>
        </div>

        <div className="mt-1 flex flex-col gap-1 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2">
          <div className="flex items-center gap-1">
            <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
            {experience.companyUrl ? (
              <Link
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded hover:text-primary hover:underline focus:text-primary focus:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
              >
                {experience.company}
                <ExternalLink className="ml-1 h-3 w-3" aria-hidden="true" />
              </Link>
            ) : (
              <span>{experience.company}</span>
            )}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="break-words">{experience.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectTimelineItem({
  project,
}: {
  project: ProjectType;
  index: number;
}) {
  return (
    <div className="relative pl-12" role="listitem">
      {/* Timeline dot */}
      <div
        className="absolute left-3 top-2 h-4 w-4 rounded-full border-2 border-black bg-white dark:border-white dark:bg-black"
        aria-hidden="true"
      ></div>

      <div className="mb-2">
        <div className="flex flex-col items-start justify-start gap-1 sm:flex-row sm:items-baseline">
          <h4 className="text-base font-semibold sm:text-lg">
            {project.title}
          </h4>
        </div>

        <div className="mt-1 text-start text-sm text-muted-foreground">
          <p className="text-xs sm:flex">{project.description}</p>
        </div>
        <div className="flex items-center gap-3 lg:flex-col lg:items-start">
          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            {project.previewUrl ? (
              <LinkPreview
                url={project.previewUrl}
                className="inline-flex items-center rounded hover:text-primary hover:underline focus:text-primary focus:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
              >
                <p className="sm:hidden">Preview</p>
                <p className="hidden break-all sm:block">
                  {project.previewUrl}
                </p>
              </LinkPreview>
            ) : (
              <span className="break-all">{project.previewUrl}</span>
            )}
          </div>

          <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Github className="h-3.5 w-3.5" aria-hidden="true" />
            {project.githubUrl ? (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all rounded hover:text-primary hover:underline focus:text-primary focus:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
              >
                <span className="sm:hidden">GitHub</span>
                <span className="hidden sm:inline">{project.githubUrl}</span>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function EducationTimelineItem({
  education,
}: {
  education: EducationType;
  index: number;
}) {
  return (
    <div className="relative pl-12" role="listitem">
      {/* Timeline dot */}
      <div
        className="absolute left-3 top-2 h-4 w-4 rounded-full border-2 border-black bg-white dark:border-white dark:bg-black"
        aria-hidden="true"
      ></div>

      <div className="mb-2">
        <div className="flex flex-col items-start justify-between gap-1 sm:flex-row sm:items-baseline">
          <h4 className="text-base font-semibold sm:text-lg">
            {education.degree}
          </h4>
          <span className="text-sm text-muted-foreground">
            {education.period}
          </span>
        </div>

        <div className="mt-1 flex flex-col gap-1 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2">
          <div className="flex items-center gap-1">
            <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
            {education.institutionUrl ? (
              <Link
                href={education.institutionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded hover:text-primary hover:underline focus:text-primary focus:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
              >
                {education.institution}
                <ExternalLink className="ml-1 h-3 w-3" aria-hidden="true" />
              </Link>
            ) : (
              <span>{education.institution}</span>
            )}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="break-words">{education.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
