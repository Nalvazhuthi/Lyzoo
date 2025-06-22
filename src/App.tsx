import React from 'react'
import "./style/main.scss"
import Home from './pages/home'
import Skills from './pages/skills'
import Works from './pages/works'
import About from './pages/about'
import Contact from './pages/contact'

const App = () => {
  return (
    <div className="content-container">
      <Home />
      <Skills />
      <Works />
      <About />
      <Contact />
    </div>
  )
}

export default App