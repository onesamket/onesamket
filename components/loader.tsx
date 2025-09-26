'use client';

import { motion } from 'framer-motion';
import { Coffee, Code, Zap, Sparkles } from 'lucide-react';

export default function Loader() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Main Loading Animation */}
      <motion.div
        className="relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Outer Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-primary/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />

        {/* Middle Ring */}
        <motion.div
          className="absolute inset-2 rounded-full border-4 border-primary/40"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />

        {/* Inner Ring */}
        <motion.div
          className="absolute inset-4 rounded-full border-4 border-primary/60"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />

        {/* Center Icon */}
        <motion.div
          className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 backdrop-blur-sm"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Coffee className="h-8 w-8 text-primary" />
        </motion.div>

        {/* Floating Icons */}
        <motion.div
          className="absolute -right-2 -top-2"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Code className="h-4 w-4 text-primary/60" />
        </motion.div>

        <motion.div
          className="absolute -bottom-2 -left-2"
          animate={{
            y: [0, 10, 0],
            rotate: [0, -360],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Zap className="h-4 w-4 text-primary/60" />
        </motion.div>

        <motion.div
          className="absolute -left-2 -top-2"
          animate={{
            x: [0, 10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Sparkles className="h-3 w-3 text-primary/40" />
        </motion.div>
      </motion.div>

      {/* Pulse Effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/5"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
