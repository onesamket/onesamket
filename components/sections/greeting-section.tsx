'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { toGeez } from '@onesamket/geez-number';
import { ArrowDownToLine, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { SocialLink } from './social-link';
export default function GreetingSection() {
    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 py-20">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-blue-50/10 to-transparent dark:via-blue-900/10" />

            {/* Profile image with animation */}
            <div className="relative mb-8">
                <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-xl dark:border-gray-800 md:h-48 md:w-48">
                    <Image
                        src="https://github.com/onesamket.png"
                        alt="Tewodros Birhanu"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Main heading with gradient text */}
            <h1 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-center text-4xl font-bold text-transparent dark:from-blue-400 dark:to-purple-400 md:text-6xl">
                Tewodros Birhanu
            </h1>

            {/* Subtitle with typing animation */}
            <div className="mb-8 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300 md:text-2xl">
                <h1 className="font-light">
                    Full-stack Software Developer | Web & React Native Developer.
                    {toGeez(7)}{' '}
                </h1>
            </div>

            {/* Call to action buttons */}
            <div className="mb-12 flex flex-wrap justify-center gap-4">
                <Link target="_blank" href="https://flowcv.com/resume/vkc21asr0g">
                    <Button size="lg" className="gap-2">
                        <ArrowDownToLine className="h-4 w-4" />
                        Resume
                    </Button>
                </Link>
            </div>

            {/* Social links */}
            <div className="flex justify-center gap-4">
                <SocialLink
                    href="https://github.com/onesamket"
                    icon={<Github className="h-5 w-5" />}
                />
                <SocialLink
                    href="https://linkedin.com/in/ln-onesamket"
                    icon={<Linkedin className="h-5 w-5" />}
                />
                <SocialLink
                    href="https://twitter.com/onesamket"
                    icon={<Twitter className="h-5 w-5" />}
                />
                <SocialLink
                    href="mailto:onesamket@gmail.com"
                    icon={<Mail className="h-5 w-5" />}
                />
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
                <div className="flex h-10 w-6 justify-center rounded-full border-2 border-gray-400 pt-2 dark:border-gray-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-600" />
                </div>
            </div>
        </section>
    );
}
