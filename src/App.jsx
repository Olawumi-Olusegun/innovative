import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Skill from "./components/Skill"
import Testimonials from "./components/Testimonials"

function App() {

  return (
    <>
     <Navbar />
     <Hero />
     <About />
     <Skill />
     <Services />
     <Projects />
     <Testimonials />
     <Contact />
     <Footer />
    </>
  )
}

export default App
