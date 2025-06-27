import React, { useState } from 'react'
import "./style/main.scss"
import Home from './pages/home'
import Skills from './pages/skills'
import Works from './pages/works'
import About from './pages/about'
import Contact from './pages/contact'
import Scene from './components/scene'
import NavBar from './pages/navBar'
import Services from './pages/services'

const App = () => {
  const [modelLoaded, setModelLoaded] = useState(false)

  return (
    <div className="content-container">
      {!modelLoaded && <div className="loading-screen">Loading...</div>}

      <Scene onModelLoad={() => setModelLoaded(true)} />

      {modelLoaded && (
        <>
          <NavBar />
          <Home />
          <About />
          <Skills />
          <Works />
          <Services />
          <Contact />
        </>
      )}
    </div>
  )
}

export default App


