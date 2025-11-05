import './App.css'
import BallsHome from './assets/Boules_accueil.png'
import About from './components/about'
import Formation from './components/formations'
import Experiences from './components/experiences'
import Divers from './components/divers'
import Contact from './components/contact'
import Footer from './Footer'
import ScrollToTop from './components/ScrollToTop'
import Header from './Header'

function App() {

  return (
    <>
    <Header />
    <main>
      <div className="presentation">
        <div className='presentation_elements'>
          <div className='titles'>
            <h1 className='firstground'>Nadège Choquet</h1>
            <h1 className='background'>Nadège Choquet</h1>
          </div>
          <div className='rectangle_balls'>
            <h2>Assistante polyvalente</h2>
             <div className="balls">
              <img src={BallsHome} alt="image d'accueil"></img>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
      <div className='light-effect1'></div>
      <About />
      <div className='light-effect2'></div>
      <Formation />
      <Experiences />
      <Divers />
      <Contact />
    </main>
    <Footer />
    </>
  )
}

export default App

// <div className='liquid-glass'></div>