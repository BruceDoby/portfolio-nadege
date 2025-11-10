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
                    Bienvenue sur mon CV où je vous présente l'ensemble de mon parcours professionel, en tant<br />
                    qu'assistance depuis plus de 20 ans.<br />
                    <br />
                    Polyvalente dans divers domaines, administratif, logistique, facturation... Je me considère<br />
                    comme quelqu'un de professionel, qui fait toujours de son mieux et sur qui on peut compter.<br />
                    J'accorde une grande importance au respect et à l'honnêteté qui sont mes principales valeurs.<br />
                    <br />
                    Plus personnellement, je me suis découvert une passion pour le design et me suis formée seule<br />
                    sur Figma, qui est un outil qui permets de créer des designs de site web.<br />
                    J'aime également voyager et la photographie. Je fais régulièrement du sport, gym et course à<br />
                    pied.<br />
                    <br />
                    N'hésitez pas à me contacter pour en savoir plus.
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