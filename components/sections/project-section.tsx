'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { localizedProjectsList, LocalizedProjectType } from '@/constants/project-list'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LinkPreview } from '../link-preview'
import { isValidUrl } from '@/libs/utils'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

export default function ProjectsSection() {
    const t = useTranslations('Projects')
    const locale = useLocale()

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-20 px-4 max-w-7xl mx-auto"
        >
            <h2 className="text-4xl font-bold mb-10 text-center">{t('title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {localizedProjectsList.map((project, index) => (
                    <ProjectCard key={project.title.en} project={project} index={index} locale={locale} />
                ))}
            </div>
        </motion.section>
    )
}

function ProjectCard({ project, index, locale }: { project: LocalizedProjectType; index: number; locale: string }) {
    const t = useTranslations('Projects')

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 dark:bg-opacity-50 bg-white dark:bg-gray-800 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] shadow-[inset_1px_10px_20px_2px_#f1f1f9] dark:shadow-[inset_1px_5px_10px_2px_#2a4365] dark:bg-[radial-gradient(#000_1px,#030712_1px)] [background-size:16px_16px]">
                <CardHeader>
                    {project.previewUrl && isValidUrl(project.previewUrl) ? (
                        <LinkPreview url={project.previewUrl}>
                            <CardTitle className="text-xl">{project.title[locale as keyof typeof project.title] || project.title.en}</CardTitle>
                        </LinkPreview>
                    ) : (
                        <CardTitle className="text-xl">{project.title[locale as keyof typeof project.title] || project.title.en}</CardTitle>
                    )}
                    <CardDescription className="text-sm line-clamp-2">
                        {project.description[locale as keyof typeof project.description] || project.description.en}
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                    <Button variant="outline" size="sm" asChild>
                        <Link href={project.previewUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {t('preview')}
                        </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            {t('github')}
                        </Link>

                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}