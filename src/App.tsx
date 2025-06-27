import React from 'react'
import "./style/main.scss"
import Home from './pages/home'
import Skills from './pages/skills'
import Works from './pages/works'
import About from './pages/about'
import Contact from './pages/contact'
import Scene from './components/scene'

const App = () => {
  return (
    <div className="content-container">
      <Scene />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  )
}

export default App