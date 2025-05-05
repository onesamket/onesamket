'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Get In Touch</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Feel free to reach out through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <a href="mailto:onesamket@gmail.com" className="hover:underline">onesamket@gmail.com</a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Github className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                <a href="https://github.com/onesamket" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/onesamket</a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Linkedin className="w-5 h-5 text-blue-600" />
                <a href="https://linkedin.com/in/onesamket" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/onesamket</a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Twitter className="w-5 h-5 text-blue-400" />
                <a href="https://twitter.com/onesamket" target="_blank" rel="noopener noreferrer" className="hover:underline">@onesamket</a>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-2">Current Location</h3>
                <p>Addis Ababa, Ethiopia</p>
                <p className="text-sm text-muted-foreground mt-1">Available for remote work worldwide</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
              <CardDescription>I'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                // Form submission logic would go here
                alert('Thank you for your message! I will get back to you soon.');
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" placeholder="Message subject" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" placeholder="Your message" rows={5} required />
                </div>
                
                <Button type="submit" className="w-full group">Send Message
                  <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}
