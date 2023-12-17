import React from "react"
import Footer from "./components/shared/Footer"
import Header from "./components/shared/Header"
import Toggle from "./components/shared/Toggle"
import Hero from "./components/Hero"
import Experience from './components/Experience';
import Contact from './components/Contact';
import About from './components/About';
import ShowCases from './components/ShowCases';

function App() {

  return (
    <main>
      <Header />
      <Hero />
      <Experience />
      <ShowCases />
      <About />
      <Contact />
      <Toggle />
      <Footer />
    </main>
  )
}

export default App
