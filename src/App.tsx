import './App.css'
import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Introduction from './components/Introduction'
import Technologies from './components/Technologies'
import Footer from './components/Footer'

function App() {

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
