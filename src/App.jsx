import About from './components/About/About.jsx'
import Footer from './components/Footer/Footer.jsx'
import Hero from './components/Hero/Hero.jsx'
import Services from './components/Services/Services.jsx'
import Work from './components/Work/Work.jsx'

function App() {
  return (
    <>
      <Hero />
      <main>
        <Work />
        <About />
        <Services />
      </main>
      <Footer />
    </>
  )
}

export default App
