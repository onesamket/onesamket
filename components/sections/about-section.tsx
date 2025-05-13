"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsTwitterX } from 'react-icons/bs';
import { Lobster } from "next/font/google";
import { cn } from '@/libs/utils';
import { LinkPreview } from '../link-preview';

const arimaFont = Lobster({
    subsets: ["latin"],
    weight: '400'
});

export default function About() {

    return (
        <motion.section
            id="about"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-20 px-5 space-y-8 flex flex-col items-center"
        >
            <motion.h1
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center"
            >
                About Me
            </motion.h1>

            <motion.blockquote
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative max-w-2xl mx-auto text-center flex flex-col items-center"
            >
                <svg
                    className="absolute z-0 -top-12  -left-12 h-16 w-16 text-gray-300 dark:text-gray-700"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                        fill="currentColor"
                    />
                </svg>

                <p className={cn(arimaFont.className, "text-lg z-10 mb-4")}>
                    Hey there! I&apos;m
                    <LinkPreview url="https://gravatar.com/onesamket">
                        <span className="text-emerald-600  mx-2 text-lg">Tewodros Birhanu (ቴዲ - Teddy)</span>
                    </LinkPreview>.
                    I&apos;m a
                    <LinkPreview url="https://tw-stack.vercel.app/">
                        <span className="text-blue-600  mx-2 text-lg">full-stack web</span>
                    </LinkPreview>
                    and
                    <LinkPreview url="https://tw-stack.vercel.app/">
                        <span className="text-blue-600  mx-2 text-lg">react-native developer</span>
                    </LinkPreview>
                    with <LinkPreview url='https://www.typescriptlang.org/'><span className='text-blue-700 mx-2 text-lg '>type-safety</span> </LinkPreview>, building elegant and user-friendly applications that perform with energy and finesse. Fueled by
                    <LinkPreview url="https://en.wikipedia.org/wiki/Coffee">
                        <span className="text-[#7d4533]  mx-2 text-lg underline">coffee</span>
                    </LinkPreview>
                    (or as we say,
                    <LinkPreview url="https://en.wikipedia.org/wiki/Coffee_ceremony_of_Ethiopia_and_Eritrea">
                        <span className="text-[#7d4533]  mx-2 text-lg underline">Bunna</span>
                    </LinkPreview> ☕), and equipped with a degree from
                    <LinkPreview url="https://www.haramaya.edu.et/">
                        <span className="text-[#ab0802] px-2 underline underline-offset-4">Haramaya University</span>
                    </LinkPreview>, I&apos;m constantly learning and exploring the latest in tech.
                </p>
                <p className={cn(arimaFont.className, "text-lg")}>
                    When <span className="bg-emerald-600 text-white dark:bg-blue-600 rounded-tl-md rounded-br-md">I&apos;m not writing code,</span> you can find me diving into my projects or enjoying some authentic Ethiopian
                    <LinkPreview url="https://en.wikipedia.org/wiki/Coffee">
                        <span className="text-[#7d4533] mx-2 text-lg underline">coffee</span>
                    </LinkPreview> ☕. Let&apos;s team up and bring your wildest web and app ideas to life.
                </p>
                <p className={cn(arimaFont.className, "text-2xl underline underline-offset-2 font-medium mt-12 mb-4")}>
                    Cheers,
                </p>

                <footer className="mt-6 flex items-center">
                    <Image
                        className="h-10 w-10 rounded-full"
                        src={"https://github.com/onesamket.png"}
                        width={100}
                        height={100}
                        alt="onesamket"
                    />
                    <div className="ml-4">
                        <div className="text-base font-medium">Tewodros Birhanu</div>
                        <Link href="https://x.com/onesamket" className="text-sm text-gray-500 hover:text-indigo-700 flex items-center">
                            <BsTwitterX className="w-4 h-4 mr-1" />
                            <p>@onesamket</p>
                        </Link>
                    </div>
                </footer>
            </motion.blockquote>
        </motion.section>
    );
}