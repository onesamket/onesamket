'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Autoplay from 'embla-carousel-autoplay';

const testimonials = [
  {
    name: 'Alice Johnson',
    role: 'Frontend Developer',
    avatar: 'https://i.pravatar.cc/150?img=1',
    content:
      'Working with Tewodros was an absolute pleasure. His expertise in React and attention to detail resulted in a flawless project delivery.',
  },
  {
    name: 'Bob Smith',
    role: 'Project Manager',
    avatar: 'https://i.pravatar.cc/150?img=2',
    content:
      "Tewodros's problem-solving skills and ability to meet tight deadlines made him an invaluable asset to our team.",
  },
  {
    name: 'Carol Williams',
    role: 'UX Designer',
    avatar: 'https://i.pravatar.cc/150?img=3',
    content:
      "I was impressed by Tewodros's ability to translate complex design concepts into seamless, user-friendly interfaces.",
  },
  {
    name: 'David Brown',
    role: 'Tech Lead',
    avatar: 'https://i.pravatar.cc/150?img=4',
    content:
      "Tewodros's deep understanding of both frontend and backend technologies made him a key player in our full-stack projects.",
  },
];

export default function TestimonialSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-6xl px-4 py-20"
    >
      <h2 className="mb-10 text-center text-4xl font-bold">What People Say</h2>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="mx-auto w-full max-w-4xl"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <Avatar className="mb-4 h-20 w-20">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(' ')
                          .map(n => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <blockquote className="mb-4 text-center">
                      &rdquo;{testimonial.content}&rdquo;
                    </blockquote>
                    <cite className="font-semibold not-italic">
                      {testimonial.name}
                    </cite>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </motion.section>
  );
}
