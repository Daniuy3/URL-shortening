
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Shortener from './components/Shortener'
import Statistics from './components/Statistics'

function App() {
  

  return (
    <main className='mx-auto'>
      <Nav />
      <Hero />
      <Shortener />
      <Statistics />
      <Footer />
    </main>
  )
}

export default App
