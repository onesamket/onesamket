export type ProjectType = {
  title: string;
  description: string;
  previewUrl: string;
  githubUrl: string;
  technologies?: string[];
  featured?: boolean;
};

export const projectsList: ProjectType[] = [
  {
    title: "MOE Exit Exam Platform",
    description: "An inclusive exam platform designed for visually impaired students, providing accessible testing solutions.",
    previewUrl: "https://et-exit.netlify.app",
    githubUrl: "https://github.com/onesamket/et-exit",
    technologies: ["React", "TypeScript", "Accessibility APIs", "Node.js"],
    featured: true
  },
  {
    title: "Food Delivery Website",
    description: "Fast, user-friendly online food delivery platform with real-time order tracking and payment integration.",
    previewUrl: "https://tw-delivery.netlify.app",
    githubUrl: "https://github.com/onesamket/delivery",
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    featured: true
  },
  {
    title: "Preconfigured TypeScript Starter",
    description: "A TypeScript starter project with preconfigured stacks for rapid development and best practices implementation.",
    previewUrl: "https://tw-stack.vercel.app",
    githubUrl: "https://github.com/onesamket/tw-stack",
    technologies: ["TypeScript", "ESLint", "Prettier", "Jest", "Webpack"],
    featured: false
  },
  {
    title: "Ethiopian Fashion E-commerce",
    description: "E-commerce platform showcasing Ethiopian fashion with secure payment processing and inventory management.",
    previewUrl: "https://et-fashion.netlify.app",
    githubUrl: "https://github.com/onesamket/fashion",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    featured: true
  },
  {
    title: "Research Management System",
    description: "An efficient platform for managing research projects, with collaboration tools and data visualization capabilities.",
    previewUrl: "https://tw-researcher.netlify.app",
    githubUrl: "https://github.com/onesamket/researcher",
    technologies: ["Angular", "TypeScript", "Firebase", "Chart.js", "Material UI"],
    featured: true
  },
  {
    title: "dBooks Clone",
    description: "Platform for downloading and reading free books, featuring a responsive reader interface and offline capabilities.",
    previewUrl: "https://d-books-clone.vercel.app",
    githubUrl: "https://github.com/onesamket/dBooks-clone",
    technologies: ["React", "Redux", "Styled Components", "PDF.js", "IndexedDB"],
    featured: false
  },
  {
    title: "Google Play Store UI Clone",
    description: "A pixel-perfect clone of the Google Play Store interface with dynamic content loading and responsive design.",
    previewUrl: "https://playstore-clone.vercel.app",
    githubUrl: "https://github.com/onesamket/playstore",
    technologies: ["React", "Material UI", "CSS Grid", "Flexbox", "Context API"],
    featured: false
  },
  {
    title: "E-commerce Website",
    description: "Modern e-commerce website for various products with cart functionality, user authentication, and order management.",
    previewUrl: "https://eat5foods.vercel.app",
    githubUrl: "https://github.com/onesamket/ecommerce",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    featured: true
  },
  {
    title: "Game Hub Dashboard",
    description: "Interactive UI for exploring various games with filtering, search functionality, and detailed game information.",
    previewUrl: "https://challenge-lovat.vercel.app/",
    githubUrl: "https://github.com/onesamket/challenge",
    technologies: ["React", "TypeScript", "Chakra UI", "Axios", "React Query"],
    featured: false
  },
  {
    title: "Food Delivery Mobile App",
    description: "A cross-platform mobile application designed for food delivery services with real-time tracking and push notifications.",
    previewUrl: "https://github.com/onesamket/food-delivery-app",
    githubUrl: "https://github.com/onesamket/food-delivery-app",
    technologies: ["React Native", "Expo", "Firebase", "Redux", "Google Maps API"],
    featured: true
  },
  {
    title: "Portfolio Website",
    description: "My professional portfolio website showcasing projects and skills with a modern, responsive design.",
    previewUrl: "https://onesamket.dev",
    githubUrl: "https://github.com/onesamket/portfolio",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    featured: true
  }
];
