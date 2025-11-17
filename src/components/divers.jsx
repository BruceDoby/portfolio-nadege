import DiversBackground from '../assets/Rectangle_477.jpg'
import InfoBlock from './InfoCard'
import USA from '../assets/Rectangle_503.png'

function Divers() {
    return(
        <>
        <div className='divers' id='Divers'>
            <h1>Divers</h1>
            <div className='background--divers'>
                <img src={DiversBackground} alt='image de fond de divers'></img>
            </div>
            <div className='all__infos'>
            <InfoBlock 
            title="COMPETENCES"
            description="Logiciel Design utilisé : Figma"
            text="Outil bureautique : Word – Excel - Outlook (utilisation basique)">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" className='figma'/>
            </InfoBlock>
            <InfoBlock 
            title="SOFT SKILLS"
            description="Organisation - Fiabilité"
            text="Discrétion - Adaptabilité - Patience"
            />
            <InfoBlock 
            title="DIVERS"
            description="Possède un véhicule"
            text="Niveau d'anglais : B1">
                <img src={USA} alt="Drapeau USA" className="usa_flag" />
            </InfoBlock>
            <InfoBlock 
            title="CENTRES D'INTERÊTS"
            description="Voyages-  Cinéma - Running"
            text="07/2022 à 09/2022 : Road Trip aux USA
                    08/2014 : Road Trip aux USA" />
            </div>
        </div>
        </>
    )
}

export default Divers