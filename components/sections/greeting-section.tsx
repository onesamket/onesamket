'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { toGeez } from '@onesamket/geez-number';
import { ArrowDownToLine, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { SocialLink } from './social-link';

export default function GreetingSection() {
    const scrollToNextSection = () => {
        const nextSection = document.getElementById('skills-section');
        if (nextSection) {
            nextSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            scrollToNextSection();
        }
    };

    return (
        <section className="relative flex h-full lg:min-h-[90vh] flex-col items-center justify-center px-4 py-20">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-blue-50/10 to-transparent dark:via-blue-900/10" />

            {/* Profile image with animation */}
            <div className="relative mb-8">
                <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-xl dark:border-gray-800 md:h-48 md:w-48">
                    <Image
                        src="https://github.com/onesamket.png"
                        alt="Tewodros Birhanu - Full-stack Software Developer"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Main heading with gradient text */}
            <h1 className="mb-4 text-center text-4xl font-bold text-transparent text-white dark:text-white md:text-6xl">
                Tewodros Birhanu
            </h1>

            {/* Subtitle with typing animation */}
            <div className="mb-8 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300 md:text-2xl">
                <h2 className="font-light">
                    Full-stack Software Developer <br /> Website, Desktop & React Native Developer.
                    {toGeez(7)}{' '}
                </h2>
            </div>

            {/* Call to action buttons */}
            <div className="mb-12 flex flex-wrap justify-center gap-4">
                <Link target="_blank" href="https://flowcv.com/resume/vkc21asr0g">
                    <Button size="lg" className="gap-2">
                        <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
                        Resume
                    </Button>
                </Link>
            </div>

            {/* Social links */}
            <nav className="flex justify-center gap-4" aria-label="Social media links">
                <SocialLink
                    href="https://github.com/onesamket"
                    icon={<Github className="h-5 w-5" aria-hidden="true" />}
                    label="GitHub profile"
                />
                <SocialLink
                    href="https://linkedin.com/in/ln-onesamket"
                    icon={<Linkedin className="h-5 w-5" aria-hidden="true" />}
                    label="LinkedIn profile"
                />
                <SocialLink
                    href="https://twitter.com/onesamket"
                    icon={<Twitter className="h-5 w-5" aria-hidden="true" />}
                    label="Twitter profile"
                />
                <SocialLink
                    href="mailto:onesamket@gmail.com"
                    icon={<Mail className="h-5 w-5" aria-hidden="true" />}
                    label="Send email"
                />
            </nav>

            {/* Scroll indicator */}
            <button
                className="absolute bottom-8 left-1/2 -translate-x-1/2 transform hidden lg:block cursor-pointer hover:scale-110 transition-transform duration-200 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full p-2"
                onClick={scrollToNextSection}
                onKeyDown={handleKeyDown}
                title="Scroll to next section"
                aria-label="Scroll to skills section"
            >
                <div className="flex h-10 w-6 justify-center rounded-full border-2 border-gray-400 pt-2 dark:border-gray-600 hover:border-gray-600 dark:hover:border-gray-400 transition-colors duration-200">
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-600" />
                </div>
            </button>
        </section>
    );
}
