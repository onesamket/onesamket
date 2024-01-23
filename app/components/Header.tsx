import { Github } from 'iconoir-react';
import React, { useState } from 'react';
import { profile } from '../assets/profile';
export default function Header() {

    const [state, setState] = useState(false)

    const navigation = [
        { title: "Home", path: "#" },
        { title: "Skills", path: "/#skills" },
        { title: "Showcases", path: "/#showcase" },
        { title: "Resume", path: "/resume" },
        { title: "Articles", path: "/articles" },
        { title: "About", path: "/#about" },
        { title: "Contact", path: "/#contact" }
    ]

    return (
        <nav className=" w-full shadow sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-30   bg-base-200 sm:bg-inherit  md:px-10">
            <div className="items-center -z-50 px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="/">
                        <img
                            src={profile}

                            alt="Profile picture"
                            className=' w-12 h-12 rounded-full'
                        />
                    </a>
                    <div className="md:hidden">
                        <button className="text-gray-500 outline-none p-2 rounded-md transition-all duration-200 delay-100"
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

                <div className={`flex-1 justify-self-center ml-4  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="hover:text-indigo-600">
                                        <a
                                            className="dark:text-gray-500 text-gray-600"
                                            href={item.path}>

                                            {item.title}

                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>

                </div>
                <div className="hidden md:block">
                    <a href="http://github.com/onesamket" target="_blank" rel="noopener noreferrer"> <Github className='cursor-pointer text-gray-400' /></a>
                </div>
            </div>
        </nav >
    )
}
