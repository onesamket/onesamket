import { TypeAnimation } from 'react-type-animation'
import { profile } from '../assets/profile'
import { resume } from '../assets/doc'
const Hero = () => {
    return (
        <div id='' className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <img src={profile} alt="profile" className='h-56 w-56 mx-auto rounded-full ' />
                    <h1 className="text-3xl font-bold">Hello there 👋</h1>
                    <h3>I'm Tewodros </h3>
                    <TypeAnimation
                        sequence={[
                            "I'm  Tewodros  Birhanu",
                            1000,
                            "Live in Ethiopia ",
                            1000,
                            'Full-stack Developer',
                            1000,
                            'React-native Developer',
                            1000,
                            'Node Express Developer',
                            1000,
                            'Loves Prisma & Remix💿 ',
                            1000,
                            'Loves Typescript ❤️ ',
                            1000,
                            "Loves Tailwind css 🎉",
                            1000,
                            "Critical Thinker",
                            1000,
                            "Problem solver",
                            1000,
                            "Open for Work",
                            1000,
                            "Let's Collaborate 🤝.",
                            5000,

                        ]}
                        className='text-3xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text p-2'

                        repeat={Infinity}
                    />
                    <p className="py-6">React based Javascript Full-stack engineer and Application developer with over three years of experience  </p>
                    <a href={resume} target='_blank' download={true} className="btn btn-primary">Download CV</a>
                </div>
            </div>
        </div>
    )
}

export default Hero