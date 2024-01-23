import React from 'react'
import Hero from './section/Hero'
import Experience from './section/Experience'
import ShowCases from './section/ShowCases'
import About from './section/About'
import Contact from './section/Contact'

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Experience />
            <ShowCases />
            <div className="bg-base-300">
                <About />
            </div>
            <Contact />
        </div>
    )
}

export default HomePage;