import Link from 'next/link';
import { BsTwitterX } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ThemeToggle } from '../theme-toggle';

export default function FooterSection() {
    return (
        <footer className="mt-10 w-full p-4 pb-20 sm:p-6 sm:pb-24 md:p-8 md:pb-10 lg:px-12 xl:px-56">
            {/* Mobile Layout */}
            <div className="flex flex-col space-y-4 lg:hidden">
                {/* Social Links - Top on mobile */}
                <nav className="flex justify-center space-x-6" aria-label="Social media links">
                    <Link
                        href="https://github.com/onesamket"
                        aria-label="GitHub Profile"
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        <FaGithub className="h-5 w-5" />
                    </Link>
                    <Link
                        href="https://x.com/onesamket"
                        aria-label="Twitter Profile"
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        <BsTwitterX className="h-5 w-5" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/ln-onesamket"
                        aria-label="LinkedIn Profile"
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        <FaLinkedin className="h-5 w-5" />
                    </Link>
                </nav>

                {/* Copyright and Theme Toggle - Bottom on mobile */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm">
                        <span className="text-lg">&copy;</span>
                        <span>@onesamket</span>
                        <span className="hidden sm:inline"> - All Rights Reserved {new Date().getFullYear()}</span>
                    </div>
                    <ThemeToggle />
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center justify-between">
                {/* Copyright - Left */}
                <div className="flex items-center space-x-2 text-sm">
                    <span className="text-xl">&copy;</span>
                    <span>@onesamket - All Rights Reserved {new Date().getFullYear()}</span>
                </div>

                {/* Social Links - Center */}
                <nav className="flex space-x-4" aria-label="Social media links">
                    <Link
                        href="https://github.com/onesamket"
                        aria-label="GitHub Profile"
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        <FaGithub className="h-4 w-4" />
                    </Link>
                    <Link
                        href="https://x.com/onesamket"
                        aria-label="Twitter Profile"
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        <BsTwitterX className="h-4 w-4" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/ln-onesamket"
                        aria-label="LinkedIn Profile"
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        <FaLinkedin className="h-4 w-4" />
                    </Link>
                </nav>

                {/* Theme Toggle - Right */}
                <ThemeToggle />
            </div>
        </footer>
    );
}
