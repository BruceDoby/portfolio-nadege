import Polygon from '../assets/Polygon.png'
import Photo from '../assets/Group_83.png'

function About() {

    return(
        <>
        <div className="about-me" id='About'>
            <div>
                <h1>About me...</h1>
                <img src={Photo} alt='Photo de Nadège' className='photo'></img>
                <p>
                    Hi, je suis Nadège,<br />
                    <br />
                    Bienvenue sur mon CV où je vous présente mon parcours professionel.<br />
                    <br />
                    Je possède plus de 20 années d'expériences et ce, dans des secteurs variés.<br />
                    D'assistante administrative à assistante facturation actuellement, prouvant ma<br />
                    polyvalence et mes capacités d'adaptation.<br />
                    <br />
                    Mes atouts pour votre entreprise : on peut dire de moi que je fais preuve de rigueur,<br />
                    de fiabilité et que je m'investis dans tout les postes qui me sont confiés.<br />
                    <br />
                    Disponible pour étudier toute proposition pertinente.
                </p>
                <div>
                    <img src={Polygon} alt='Polygon' className='polygon1'></img>
                    <img src={Polygon} alt='Polygon' className='polygon2'></img>
                </div>
            </div>
        </div>
        </>
    )
}

export default About