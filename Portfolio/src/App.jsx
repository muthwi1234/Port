import React from 'react'
import About from './assets/Components/About'
import Contact from './assets/Components/Contact'
import Navbar from './assets/Components/Navbar'
import Projects from './assets/Components/Projects'
import Skills from './assets/Components/Skills'
import Testimonials from './assets/Components/Testimonials'

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}
export default App;