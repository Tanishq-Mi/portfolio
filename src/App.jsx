import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import Academics from "./sections/Academics";
import Certifications from "./sections/Certifications";


const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <section id="home">
        
      <Hero />
      </section>
      <section id="about">
      <About />

      </section>
        <Academics/>
      <section id="projects">
      <Projects />

      </section>
      <Certifications />
      <Experiences />
      <section id="contact">
      <Contact />

      </section>
      <Footer/>
    </div>
  );
};

export default App;
