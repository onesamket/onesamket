import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function FooterSection() {
    return (
        <footer className="w-full flex justify-between items-center mt-10 p-5 md:p-10">
            <div className="flex space-x-1 items-center">
                <p className="flex space-x-1 items-center">
                    <span className="text-2xl">&copy;</span>
                    <span className="md:hidden">@onesamket</span>
                </p>
                <p className="hidden md:flex">
                    All Rights Reserved {new Date().getFullYear()}
                </p>
            </div>
            <nav className="flex space-x-5" aria-label="Social media links">
                <Link href="https://github.com/onesamket" aria-label="GitHub Profile">
                    <FaGithub className="w-4 h-4" />
                </Link>
                <Link href="https://x.com/onesamket" aria-label="Twitter Profile">
                    <BsTwitterX className="w-4 h-4" />
                </Link>
                <Link href="https://www.linkedin.com/in/ln-onesamket" aria-label="LinkedIn Profile">
                    <FaLinkedin className="w-4 h-4" />
                </Link>
            </nav>
        </footer>
    );
}