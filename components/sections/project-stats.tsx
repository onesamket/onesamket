'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Laptop, Server, Smartphone, Code, Github, Users } from 'lucide-react'

type StatType = {
  title: string;
  value: number;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const projectStats: StatType[] = [
  {
    title: "Frontend Projects",
    value: 15,
    icon: <Laptop className="w-8 h-8" />,
    description: "Modern, responsive web applications",
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Backend Projects",
    value: 8,
    icon: <Server className="w-8 h-8" />,
    description: "Robust APIs and server applications",
    color: "from-green-500 to-emerald-400"
  },
  {
    title: "Mobile Apps",
    value: 6,
    icon: <Smartphone className="w-8 h-8" />,
    description: "Cross-platform mobile experiences",
    color: "from-purple-500 to-pink-400"
  },
  {
    title: "Full Stack",
    value: 10,
    icon: <Code className="w-8 h-8" />,
    description: "End-to-end web applications",
    color: "from-amber-500 to-orange-400"
  },
  {
    title: "Open Source",
    value: 12,
    icon: <Github className="w-8 h-8" />,
    description: "Contributions to the community",
    color: "from-gray-700 to-gray-600"
  },
  {
    title: "Client Projects",
    value: 7,
    icon: <Users className="w-8 h-8" />,
    description: "Delivered to satisfied clients",
    color: "from-indigo-500 to-blue-400"
  }
]

export default function ProjectStatsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 max-w-6xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Project Statistics</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A summary of my development work across different platforms and technologies
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectStats.map((stat, index) => (
          <StatCard key={stat.title} stat={stat} index={index} />
        ))}
      </div>
    </motion.section>
  )
}

function StatCard({ stat, index }: { stat: StatType; index: number }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden h-full">
        <CardContent className="p-6 flex flex-col items-center text-center h-full">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white mb-4 bg-gradient-to-br ${stat.color}`}>
            {stat.icon}
          </div>
          
          <CountUp 
            target={stat.value} 
            className="text-4xl font-bold mb-2"
          />
          
          <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{stat.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Simple count-up animation component
function CountUp({ target, className }: { target: number; className?: string }) {
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 1500, 1); // 1.5 seconds duration
      
      setCount(Math.floor(progress * target));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target]);
  
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {count}<span>+</span>
    </motion.span>
  );
}
