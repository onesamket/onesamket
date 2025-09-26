'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const loadingMessages = [
  {
    text: '🚀 Crafting cross-platform mobile apps with React Native',
    color: 'text-blue-500',
  },
  {
    text: '⚡ Building lightning-fast web applications with Next.js',
    color: 'text-purple-500',
  },
  {
    text: '🎨 Creating elegant user interfaces with modern design principles',
    color: 'text-pink-500',
  },
  {
    text: '📱 Developing seamless mobile experiences for iOS & Android',
    color: 'text-green-500',
  },
  {
    text: '🔧 Specializing in TypeScript for robust, scalable code',
    color: 'text-amber-500',
  },
  {
    text: '🌐 Building responsive web platforms with enhanced UX',
    color: 'text-cyan-500',
  },
  {
    text: '💡 Transforming ideas into innovative digital solutions',
    color: 'text-indigo-500',
  },
  {
    text: '🎯 Delivering high-performance applications with attention to detail',
    color: 'text-orange-500',
  },
  {
    text: '🛠️ Creating custom libraries and reusable components',
    color: 'text-red-500',
  },
  {
    text: '📊 Optimizing applications for maximum efficiency and user satisfaction',
    color: 'text-yellow-500',
  },
];

export default function LoaderSection() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    // Rotate messages every 3 seconds (increased for better readability)
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex(prev => (prev + 1) % loadingMessages.length);
    }, 3000);

    return () => {
      clearInterval(messageInterval);
    };
  }, []);

  const currentMessage = loadingMessages[currentMessageIndex];

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-2xl text-center">
        {/* Enhanced Profile Loader */}
        <motion.div
          className="mb-6 flex justify-center sm:mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="relative flex items-center justify-center">
            {/* Outer Ring */}
            <motion.div
              className="absolute h-24 w-24 rounded-full border-2 border-primary/20 sm:h-32 sm:w-32"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />

            {/* Middle Ring */}
            <motion.div
              className="absolute h-20 w-20 rounded-full border-2 border-primary/40 sm:h-28 sm:w-28"
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            />

            {/* Inner Ring */}
            <motion.div
              className="absolute h-16 w-16 rounded-full border-2 border-primary/60 sm:h-24 sm:w-24"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />

            {/* Profile Image Container */}
            <motion.div
              className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm sm:h-20 sm:w-20 sm:border-4"
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  '0 0 0 0 rgba(59, 130, 246, 0.4)',
                  '0 0 0 10px rgba(59, 130, 246, 0.1)',
                  '0 0 0 0 rgba(59, 130, 246, 0.4)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image
                src="/profile.png"
                alt="Profile"
                fill
                className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                priority
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Message */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMessageIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-4 px-2 sm:mb-6"
          >
            <h2
              className={`text-base font-medium sm:text-lg ${currentMessage.color} leading-relaxed`}
            >
              {currentMessage.text}
            </h2>
          </motion.div>
        </AnimatePresence>

        {/* Animated Dots */}
        <motion.div
          className="flex justify-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[0, 1, 2].map(index => (
            <motion.div
              key={index}
              className="h-1.5 w-1.5 rounded-full bg-primary/60 sm:h-2 sm:w-2"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>

        {/* Background Animation */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-primary/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
