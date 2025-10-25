import BallsGroup from "./ballsGroup"
import data from '../data/experiences.json'

function Experiences() {
  const renderColumn = (side) => {
    const experiencesByYear = data[side] || {}

    // Fusionner toutes les expériences d’un côté
    const allExperiences = Object.values(experiencesByYear).flat()

    // Regrouper par période
    const groupedByPeriode = allExperiences.reduce((acc, exp) => {
      if (!acc[exp.periode]) acc[exp.periode] = []
      acc[exp.periode].push(exp)
      return acc
    }, {})

    // Trier du plus ancien au plus récent (numériquement)
    const sortedPeriodes = Object.keys(groupedByPeriode).sort((a, b) => {
      const getFirstYear = (str) => parseInt(str.match(/\d{4}/)?.[0] || 0, 10)
      return getFirstYear(a) - getFirstYear(b)
    })

    // Inverser pour que le plus ancien soit en haut et le plus récent en bas
    const displayPeriodes = sortedPeriodes.reverse()

    return (
      <div className={`column ${side}-column`}>
        {displayPeriodes.map((periode) => (
          <div key={periode} className="year-group">
            <div className="year-label">{periode}</div>

            {groupedByPeriode[periode].map((exp, idx) => (
              <div key={`${periode}-${idx}`} className="experience-block">
                <div className="poste-entreprise">
                  <span className="poste">{exp.poste}</span>
                  <span className="entreprise">{exp.entreprise}</span>
                </div>
                <ul className="competences">
                  {exp.competences.map((comp, i) => (
                    <li key={i} className="competence-item">{comp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }

    return(
        <>
        <section className="experiences">
            <h1>Expériences professionelles</h1>
            <div className="chronologie">
                {renderColumn("left")}
                <div className="stick">
                    <div className="balls-group">
                        <BallsGroup pattern={[4, 4, 3]} />
                    </div>
                </div>
                {renderColumn("right")}
            </div>
        </section>
        </>
    )
}

export default Experiences