import './App.css'
import BallsHome from './assets/Boules_accueil.png'

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
            <div className='liquid-glass'></div>
             <div className="balls">
              <img src={BallsHome} alt="image d'accueil"></img>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default App
