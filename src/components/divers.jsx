import DiversBackground from '../assets/Rectangle_477.jpg'
import InfoBlock from './InfoCard'
import USA from '../assets/Rectangle_503.png'

function Divers() {
    return(
        <>
        <div className='divers'>
            <h1>Divers</h1>
            <div className='background--divers'>
                <img src={DiversBackground} alt='image de fond de divers'></img>
            </div>
            <div className='all__infos'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" className='figma'/>
            <InfoBlock 
            title="COMPETENCES"
            description="Logiciel Design utilisé : Figma"
            children="Outil bureautique : Word – Excel - Outlook (utilisation basique)"
            />
            <InfoBlock 
            title="SOFT SKILLS"
            description="Organisation - Fiabilité"
            children="Discrétion - Adaptabilité - Patience"
            />
            <InfoBlock 
            title="DIVERS"
            description="Possède un véhicule"
            children="Niveau d'anglais : B1"
            />
            <InfoBlock 
            title="CENTRES D'INTERÊTS"
            description="Voyages-  Cinéma - Running"
            children="07/2022 à 09/2022 : Road Trip aux USA
                    08/2014 : Road Trip aux USA"
            />
            <img src={USA} alt='drapeau des états-unis' className='usa_flag'></img>
            </div>
        </div>
        </>
    )
}

export default Divers