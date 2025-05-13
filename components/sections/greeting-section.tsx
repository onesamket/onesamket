'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowDownToLine, Github, Linkedin, Mail, Twitter } from 'lucide-react';
export default function GreetingSection() {
    
    
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };
    
    return (
        <motion.section 
            className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-20"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/10 to-transparent dark:via-blue-900/10 -z-10" />
            
            {/* Profile image with animation */}
            <motion.div 
                variants={itemVariants} 
                className="mb-8 relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                    <Image 
                        src="https://github.com/onesamket.png" 
                        alt="Tewodros Birhanu" 
                        fill
                        className="object-cover"
                    />
                </div>
                
                {/* Animated rings around the profile image */}
                <div className="absolute inset-0 -z-10 animate-pulse">
                    <div className="absolute inset-0 rounded-full border-2 border-blue-400 dark:border-blue-600 scale-110 opacity-70" />
                    <div className="absolute inset-0 rounded-full border-2 border-purple-400 dark:border-purple-600 scale-125 opacity-50" />
                    <div className="absolute inset-0 rounded-full border-2 border-blue-300 dark:border-blue-700 scale-150 opacity-30" />
                </div>
            </motion.div>
            
            {/* Main heading with gradient text */}
            <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
            >
            Tewodros Birhanu
            </motion.h1>
            
            {/* Subtitle with typing animation */}
            <motion.div
                variants={itemVariants}
                className="text-xl md:text-2xl text-center max-w-3xl mb-8 text-gray-700 dark:text-gray-300"
            >
                <TypewriterEffect text={`Software Engineer`} />
            </motion.div>
            
            {/* Call to action buttons */}
            <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4 justify-center mb-12"
            >
                <Link target="_blank" href="https://flowcv.com/resume/vkc21asr0g">
                    <Button size="lg" className="gap-2">
                        <ArrowDownToLine className="w-4 h-4" />
                            Resume
                    </Button>
                </Link>
                
                <Link href="https://t.me/onesamket">
                    <Button variant="outline" size="lg" className="gap-2">
                        <Mail className="w-4 h-4" />
                        Contact Me
                    </Button>
                </Link>
            </motion.div>
            
            {/* Social links */}
            <motion.div 
                variants={itemVariants}
                className="flex gap-4 justify-center"
            >
                <SocialLink href="https://github.com/onesamket" icon={<Github className="w-5 h-5" />} />
                <SocialLink href="https://linkedin.com/in/ln-onesamket" icon={<Linkedin className="w-5 h-5" />} />
                <SocialLink href="https://twitter.com/onesamket" icon={<Twitter className="w-5 h-5" />} />
                <SocialLink href="mailto:onesamket@gmail.com" icon={<Mail className="w-5 h-5" />} />
            </motion.div>
            
            {/* Scroll indicator */}
            <motion.div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full" />
                </div>
            </motion.div>
        </motion.section>
    );
}

// Typewriter effect component
function TypewriterEffect({ text }: { text: string }) {
    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-light"
        >
            {text}
        </motion.span>
    );
}

// Social link component
function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            {icon}
        </motion.a>
    );
}
