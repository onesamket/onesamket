import { EducationType, ExperienceType, personalProjectsType } from "@/types"

export const workExperiences: ExperienceType[] = [
    {
      title: "Frontend Developer",
      company: "Private Client",
      location: "Addis Ababa, Ethiopia",
      period: "Sep 2024 - Present",
      description: "Developed responsive web applications and implemented modern UI/UX designs. Collaborated with cross-functional teams to deliver high-quality products.",
      skills: ["React", "Next.js", "Tailwind CSS", "REST APIs", "TypeScript", 'Web socket',"Tanstack Query","Zustand"],
      companyUrl: "https://onesamket.com",
      current: true,
      type: 'client'
    },
   
    {
      title: "React Native  Mobile developer",
      company: "Prophecius Technology",
      location: "India - Remote",
      period: "Aug 2024 - Jun 2025",
      description: "Assisted in developing and maintaining university websites and internal applications. Gained hands-on experience with web technologies.",
      skills: ["React Native", "Expo", "TypeScript", "Node", "express", "MySQL", "Supabase", "CI/CD"],
      companyUrl: "https://prophecius.com/",
      type: 'client'
    },
   
  ]
  
  export const educationList: EducationType[] = [
    {
      degree: "BSc in Information Technology",
      institution: "Haramaya University",
      location: "Haramaya, Ethiopia",
      period: "2020 - 2024",
      description: "Graduated with honors, specializing in information technology.",
    
      institutionUrl: "https://www.haramaya.edu.et/"
    },
  
    {
      degree: "Advanced TypeScript Certification",
      institution: "Total TypeScript ",
      location: "online",
      period: "2022",
      description: "Specialized training in advanced TypeScript concepts and patterns.",
   
      institutionUrl: "https://totaltypescript.com/"
    }
  ]
  
  export const personalProjects: personalProjectsType[] = [
    {
      title: "Tedy Afro Fun",
      description: "Dedicated music platform with visualaizer.",
      skills: ["Next.js", "Tailwind CSS", "TypeScript","Zustand","Framer Motion"],
      companyUrl: "https://tedy-afro-fun.vercel.app/",
      previewUrl: "http://teddy-afro-funs.vercel.app",
      githubUrl: "https://github.com/onesamket/tedy-afro-fun",
      lovedByDeveloper: true,
    },
    {
      title: "Fashion Ecommerce Platform",
      description: "Fashion Ecommerce Platform for Ethiopian Fashion Brand.",
      skills: [ "Next.js", "Tailwind CSS", "Prisma","Nodemailer", "TypeScript", "Google Maps API", "Tanstack Query","Zustand"],
      companyUrl: "https://et-fashion.netlify.app",
      previewUrl: "https://et-fashion.netlify.app",
      githubUrl: "https://github.com/onesamket/et-fashion",
    },
   
    {
      title: "MOE Exit exam - Final year Project",
      description: "Developed a MOE Exit exam - Final year Project to help visually impaired students to take their exams.",
      skills: ["React", "Next.js", "Tailwind CSS", "REST APIs", "TypeScript", 'Web socket',"Tanstack Query","Zustand","Prisma","PostgreSQL","Supabase"],
      companyUrl: "https://et-exam.netlify.app",
      previewUrl: "https://et-exam.netlify.app",
      githubUrl: "https://github.com/onesamket/et-exam",
    },
    {
      title: "Youtube Clone",
      description: "Developed a youtube clone using Next.js and Tailwind CSS.",
      skills: ["React", "Next.js", "Tailwind CSS", "REST APIs", "TypeScript", 'Web socket',"Tanstack Query","Zustand"],
      companyUrl: "https://youtube-clone-onesamket.vercel.app/",
      previewUrl: "https://youtube-clone-onesamket.vercel.app/",
      githubUrl: "https://github.com/onesamket/youtube-clone",
      lovedByDeveloper: true,
    },
   {
      title: "Spotify Clone",
      description: "Developed a spotify clone using Next.js and Tailwind CSS.",
      skills: ["React", "Next.js", "Tailwind CSS",'Framer Motion', "TypeScript", "Zustand"],
      companyUrl: "https://spotify-clone-onesamket.vercel.app/",
      previewUrl: "https://spotify-clone-onesamket.vercel.app/",
      githubUrl: "https://github.com/onesamket/spotify-clone",
      lovedByDeveloper: true,
    }
    ,
    {
      title: "Thread Mobile app clone",
      description: "Developed a thread clone Expo.",
      skills: ["React", "Expo", "Tailwind CSS", "Mock", "TypeScript","Moti","Zustand"],
      companyUrl: "https://thread-clone-onesamket.vercel.app/",
      previewUrl: "https://thread-clone-onesamket.vercel.app/",
      githubUrl: "https://github.com/onesamket/thread-clone",
      lovedByDeveloper: true,
    },
    {
      title: "Pintests Mobile app clone",
      description: "Developed a pintests clone Expo.",
      skills: ["React", "Expo", "Tailwind CSS", "Mock", "TypeScript","Moti","Zustand"],
      companyUrl: "https://pintests-onesamket.vercel.app/",
      previewUrl: "https://pintests-onesamket.vercel.app/",
      githubUrl: "https://github.com/onesamket/pintests",
    },
    {
      title: "Developed  Restaurant Mnagement app  and other 3 apps for Company",
      description: "Developed a Restaurant Mnagement app Expo.",
      skills: ["React", "Expo", "Tailwind CSS", "Mock", "TypeScript","Moti","Zustand"],
      companyUrl: "https://restaurant-management-onesamket.vercel.app/",
      previewUrl: "https://restaurant-management-onesamket.vercel.app/",
      githubUrl: "https://github.com/onesamket/restaurant-management",
    },
    {
      title: "Meeting Platform ",
      description: "Developed a Meeting Platform Using PeerJs  and socket.io.",
      skills: ["Next.js", "Express", "Tailwind CSS", "Socket.io", "TypeScript","PeerJs","Zustand"],
      companyUrl: "https://meeting-onesamket.vercel.app/",
      previewUrl: "https://meeting-onesamket.vercel.app/",
      githubUrl: "https://github.com/onesamket/meeting-platform",
    },

    {
      title: "Playstore Perfect Pixel Mobile app clone",
      description: "Developed a Playstore Perfect Pixel Mobile app clone Using Expo.",
      skills: ["React Native", "Expo", "Tailwind CSS", "fakerjs", "TypeScript","Zustand"],
      companyUrl: "https://play.google.com/store/apps/details?id=com.perfectpixel",
      previewUrl: "https://perfect-pixel-onesamket.vercel.app/",
      githubUrl: "https://github.com/onesamket/perfect-pixel",
    },
    {
      title: "Game Hub UI",
      description: "Developed a Game Hub UI Using Next.js.",
      skills: ["Next.js", "Tailwind CSS", "TypeScript","Zustand","Framer Motion"],
      companyUrl: "https://github.com/onesamket/game-hub",
      previewUrl: "https://challenge-lovat.vercel.app",
      githubUrl: "https://github.com/onesamket/game-hub",

    },
    {
      title: "Geez Number Converter",
      description: "A TypeScript library for converting between Arabic numerals and Geez (Ethiopic) numerals. Fully typed, thoroughly tested, and zero dependencies.",
      skills: ["TypeScript", "Jest", "Github Packages"],
      companyUrl: "https://github.com/onesamket/geez-number",
      previewUrl: "https://github.com/onesamket/geez-number",
      githubUrl: "https://github.com/onesamket/geez-number",
      lovedByDeveloper: true,
    },
  
    {
      title: "React Native Toast library",
      description: "A React Native library for creating toast notifications.",
      skills: ["React Native", "Expo", "Tailwind CSS", "TypeScript","Zustand"],
      companyUrl: "https://react-native-toast.vercel.app/",
      previewUrl: "https://rn-toast.vercel.app/",
      githubUrl: "https://github.com/onesamket/rn-toast",
    },
    {
      title: "More than 15+ Projects",
      description: "More than 15+ Projects",
      skills: ["my tech stack"],
      companyUrl: "https://github.com/onesamket",
      previewUrl: "https://github.com/onesamket",
      githubUrl: "https://github.com/onesamket",
    },

  ]