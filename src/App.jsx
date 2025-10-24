import './App.css'
import BallsHome from './assets/Boules_accueil.png'
import About from './components/about'
import Formation from './components/formations'
import Experiences from './components/experiences'

function App() {

  return (
    <>
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
      <div className='light-effect1'></div>
      <About />
      <div className='light-effect2'></div>
      <Formation />
      <Experiences />
    </main>
    </>
  )
}

export default App

// <div className='liquid-glass'></div>