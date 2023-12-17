import { useState } from 'react'
import { motion } from 'framer-motion';
import { Github } from 'iconoir-react';
import React from 'react';
import { logo } from '../../assets/profile';
export default function Header() {

    const [state, setState] = useState(false)

    const navigation = [
        { title: "Home", path: "#" },
        { title: "Experience", path: "#experience" },
        { title: "Showcases", path: "#showcase" },
        { title: "About", path: "#about" },
        { title: "Blogs", path: "https://onesamket-js.hashnode.dev" },
        { title: "Contact", path: "#contact" }
    ]

    return (
        <nav className=" w-full shadow  px-1 md:px-10">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="/">
                        <img
                            src={logo}

                            alt="Profile picture"
                            className='w-12 h-12 rounded-full'
                        />
                    </a>
                    <div className="md:hidden">
                        <button className="text-gray-400 outline-none p-2 rounded-md transition-all duration-200 delay-100"
                            onClick={() => setState(prev => !prev)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>

                <div className={` md:block ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="hover:text-indigo-600">
                                        <a className="text-gray-500" href={item.path}>
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    {/* for mobile screen  */}
                    <div>
                        <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {
                                navigation.map((item, idx) => {
                                    return (
                                        <motion.li key={idx} className=" hover:text-indigo-600"
                                            initial={{
                                                opacity: 0,
                                                // x: -100
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                // x: 0
                                            }}
                                            transition={{
                                                delay: idx / 30 * 10,
                                                duration: 0.4
                                            }}
                                        >
                                            <a href={item.path}>
                                                {item.title}
                                            </a>
                                        </motion.li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

                <div className="tooltip  tooltip-info tooltip-left" data-tip="View my github">
                    <div className="hidden md:block">
                        <a href="http://github.com/onesamket" target="_blank" rel="noopener noreferrer"> <Github className='cursor-pointer' /></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
