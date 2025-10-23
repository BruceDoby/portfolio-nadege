import parcours from '../data/parcours.json'
import BoulesDiplomes from '../assets/Boules_diplomes.png'
import Diplomee from '../assets/Rectangle_412.png'

function Formation() {
    return(
        <>
        <div className='formations_diplomes'>
            <div className='formations--section'>
                <h1 className='formations_h1'>Formations</h1>
                <ul>
                    {parcours.formations.map((formation, index) => (
                        <li key={index}>{formation}</li>
                    ))}
                </ul>
            </div>
            <div className='diplomes--section'>
                <h1 className='diplomes_h1'>Diplômes</h1>
                <ul>
                    {parcours.diplomes.map((diplome, index) => (
                        <li key={index}>{diplome}</li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    )
}

export default Formation