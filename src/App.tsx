import React, { useEffect, useState } from 'react'
import "./style/main.scss"
import Home from './pages/home'
import Skills from './pages/skills'
import Works from './pages/works'
import About from './pages/about'
import Contact from './pages/contact'
import Scene from './components/scene'
import NavBar from './pages/navBar'
import Services from './pages/services'
import Loading from './components/loading'
import Pricing from './pages/pricing'

const App = () => {
  const [modelLoaded, setModelLoaded] = useState(false)
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);
  const onModelLoad = () => {
    setTimeout(() => {
      setModelLoaded(true)
    }, 2000)
  }
  return (
    <div className="content-container">
      {!modelLoaded && <Loading />}

      <Scene onModelLoad={onModelLoad} />

      {modelLoaded && (
        <>
          <NavBar />
          <Home />
          <About />
          <Skills />
          <Services />
          <Pricing />
          <Works />
          <Contact />
        </>
      )}

    </div>
  )
}

export default App


