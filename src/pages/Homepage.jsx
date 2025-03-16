import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutMe from '../content/AboutMe.jsx'
import Projects from '../content/Projects'
import Services from '../content/Services'
import Contact from '../content/Contact'
const Homepage = () => {
    return (
        <div className="font-poppins">
            <Navbar />
            <AboutMe />
            <Services />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Homepage;