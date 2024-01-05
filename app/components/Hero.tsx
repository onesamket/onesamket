import { TypeAnimation } from 'react-type-animation'
import { profile } from '../assets/profile'
import { resume } from '../assets/doc'
import React from 'react'
import Background from './shared/background-aminetion'
import { GoogleDocs } from 'iconoir-react'
const Hero = () => {
    return (
        <div id='' className="hero min-h-screen">
            <Background />
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <img src={profile} alt="profile" className='h-56 w-56 mx-auto rounded-full ' />
                    <h1 className="text-3xl md:text-4xl py-2 font-bold">Hi 👋 I'm Tewodros </h1>
                    <h3></h3>
                    <TypeAnimation
                        sequence={[
                            "I'm  Tewodros  Birhanu",
                            1000,
                            'Full-stack Developer',
                            1000,
                            'React-native Developer',
                            1000,
                            'Node Express Developer',
                            1000,
                            'Loves Typescript ❤️ ',
                            1000,
                            'Loves Prisma & Remix💿 ',
                            1000,
                            'Loves NextJs &😘  Vercel  ',
                            1000,
                            "Loves Tailwind css 🎉",
                            1000,
                            "Open for Work",
                            1000,
                            "Let's Collaborate 🤝.",
                            5000,

                        ]}
                        className='text-3xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text p-2'

                        repeat={Infinity}
                    />
                    <p className="py-6">Passionate Javascript Full-stack engineer and application developer with over three years of experience. </p>
                    <a href={resume} target='_blank' download={true} className="btn btn-primary"><GoogleDocs /> Download CV</a>
                </div>
            </div>
            {/* 
            <section className='hidden lg:block absolute top-10 right-5 '>
                <div className="mockup-phone border-primary">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1">
                            <iframe className='min-h-screen overflow-hidden' src="https:onesamket.vercel.app" />
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default Hero
