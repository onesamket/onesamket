import { EducationType, ExperienceType, ProjectType } from '@/types';

export const workExperiences: ExperienceType[] = [
  {
    title: 'Senior Frontend Developer',
    company: 'Robotech  Technology',
    location: 'Addis Ababa, Ethiopia',
    period: 'May 2024 - Present',
    description:
      'Handling react native cross platform mobile and nextjs Web Development ',

    companyUrl: 'https://onesamket.com',
    current: true,
    type: 'client',
  },
  {
    title: 'Frontend Developer',
    company: 'Private Client',
    location: 'Addis Ababa, Ethiopia',
    period: 'Sep 2024 - Present',
    description:
      'Handling elegant web platform that provides a seamless user experience and enhances the overall user satisfaction.',

    companyUrl: 'https://onesamket.com',
    current: true,
    type: 'client',
  },

  {
    title: 'React Native  Mobile developer',
    company: 'Prophecius Technology',
    location: 'India - Remote',
    period: 'Aug 2024 - Jun 2025',
    description:
      'Assisted in developing and maintaining university websites and internal applications. Gained hands-on experience with web technologies.',

    companyUrl: 'https://prophecius.com/',
    type: 'client',
  },
];

export const educationList: EducationType[] = [
  {
    degree: 'BSc in Information Technology',
    institution: 'Haramaya University',
    location: 'Haramaya, Ethiopia',
    period: '2020 - 2024',
    description:
      'Graduated with honors, specializing in information technology.',

    institutionUrl: 'https://www.haramaya.edu.et/',
  },

  {
    degree: 'Advanced TypeScript Certification',
    institution: 'Total TypeScript ',
    location: 'online',
    period: '2022',
    description:
      'Specialized training in advanced TypeScript concepts and patterns.',

    institutionUrl: 'https://totaltypescript.com/',
  },
];

export const personalProjects: ProjectType[] = [
  {
    title: '3+ Recipe apps for Company ',
    description: 'Developed  more than 3 recipe apps',
    companyUrl: 'https://restaurant-management-onesamket.vercel.app/',
    previewUrl: 'https://restaurant-management-onesamket.vercel.app/',
    githubUrl: 'https://github.com/onesamket',
  },
  {
    title: 'Meeting Platform ',
    description: 'Meeting Platform Using videoSDK',
    companyUrl: 'https://meeting-onesamket.vercel.app/',
    previewUrl: 'https://meeting-onesamket.vercel.app/',
    githubUrl: 'https://github.com/onesamket/meeting',
  },
  {
    title: 'Youtube Clone',
    description: 'Developed a youtube clone using Next.js and Tailwind CSS.',
    companyUrl: 'https://youtube-clone-onesamket.vercel.app/',
    previewUrl: 'https://youtube-clone-onesamket.vercel.app/',
    githubUrl: 'https://github.com/onesamket/youtube-clone',
  },
  {
    title: 'Game Hub UI',
    description: 'Developed a Game Hub UI Using Next.js.',
    companyUrl: 'https://github.com/onesamket/game-hub',
    previewUrl: 'https://game-hub-onesamket.vercel.app',
    githubUrl: 'https://github.com/onesamket/game-hub',
  },
  {
    title: 'Geez Number Converter',
    description: 'Library for converting between Arabic-Geez',
    companyUrl: 'https://github.com/onesamket/geez-number',
    previewUrl: 'https://github.com/onesamket/geez-number',
    githubUrl: 'https://github.com/onesamket/geez-number',
  },
  {
    title: 'React Native Toast library',
    description: 'A React Native library for creating toast notifications.',
    companyUrl: 'https://react-native-toast.vercel.app/',
    previewUrl: 'https://rn-toast.vercel.app/',
    githubUrl: 'https://github.com/onesamket/rn-toast',
  },
];
