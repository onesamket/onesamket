'use client'

import { skills } from "@/constants/skills"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const BadgeItem = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <Badge className="min-w-min w-full transition-all duration-300 ease-in-out hover:shadow-lg">
      {children}
    </Badge>
  </motion.div>
)

export default function SkillSection() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto text-center p-10 mt-12 h-screen w-full"
    >
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="font-inter text-3xl font-bold leading-normal"
      >
        Tech Stacks
      </motion.h3>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-fit mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mt-7"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1 * index,
            }}
          >
            <BadgeItem>{skill}</BadgeItem>
          </motion.div>
        ))}
      </motion.div>
    </motion.main>
  )
}