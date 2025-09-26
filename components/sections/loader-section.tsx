'use client';
import Loader from '@/components/loader';
import { motion } from 'framer-motion';

export default function LoaderSection() {
  return (
    <main className="flex h-screen items-center justify-center gap-4">
      {/* Animated Loader */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
      >
        <Loader />
      </motion.div>

      {/* Animated Text with Typing Indicator */}
      <h2 className="flex items-center text-2xl font-bold">
        Building future
        <motion.span
          className="flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          {/* Animated dots */}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.2 }}
            className="ml-1"
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.4 }}
            className="ml-1"
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.6 }}
            className="ml-1"
          >
            .
          </motion.span>
        </motion.span>
      </h2>
    </main>
  );
}
