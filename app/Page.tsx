import React from "react"
import About from './pages/About'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Hero from "./pages/Hero"
import ShowCases from './pages/ShowCases'

function Page() {

  return (
    <main>
      <Hero />
      <Experience />
      <ShowCases />
      <div className="bg-base-300 ">
        <About />
      </div>
      <Contact />
    </main>
  )
}

export default Page
