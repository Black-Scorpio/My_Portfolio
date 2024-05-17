import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Introduction from './components/Introduction'
import Technologies from './components/Technologies'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0) // maybe try to use later for state

  return (
    <>
      <NavBar/>
      <Introduction/>
      <Technologies/>
      <About />
      <Projects />
      <Footer />
    </>
  )
}

export default App
