import Link from 'next/link';
import { BsTwitterX } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ThemeToggle } from '../theme-toggle';
export default function FooterSection() {
  return (
    <footer className="mt-10 flex w-full items-center justify-between p-5 md:p-10 xl:px-56">
      <div className="flex items-center space-x-1">
        <p className="flex items-center space-x-1">
          <span className="text-2xl">&copy;</span>
          <span className="md:hidden">@onesamket</span>
        </p>
        <p className="hidden md:flex">
          All Rights Reserved {new Date().getFullYear()}
        </p>
      </div>
      <nav className="flex space-x-5" aria-label="Social media links">
        <Link href="https://github.com/onesamket" aria-label="GitHub Profile">
          <FaGithub className="h-4 w-4" />
        </Link>
        <Link href="https://x.com/onesamket" aria-label="Twitter Profile">
          <BsTwitterX className="h-4 w-4" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ln-onesamket"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className="h-4 w-4" />
        </Link>
      </nav>
      <ThemeToggle />
    </footer>
  );
}
