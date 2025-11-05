import data from '../data/experiences.json';

function Experiences() {
    const sortedAnnees = Object.keys(data)
        .map(Number)
        .sort((a, b) => b - a)
        .map(String);

    return (
        <section className="experiences" id='Experiences'>
            <h1>Expériences professionnelles</h1>
            <div className="chronologie">
                {sortedAnnees.map(annee => (
                    <div key={annee} className="experience-group">
                        <div className="year-label">
                            {data[annee][0].periode}
                        </div>
                        {data[annee].map((exp, idx) => (
                            <div key={idx} className="experience-block">
                                <div className="poste-entreprise">
                                    <span className="poste">{exp.poste}</span>
                                    <span className="entreprise">{exp.entreprise}</span>
                                </div>
                                <ul className="competences">
                                    {exp.competences.map((comp, i) => (
                                        <li key={i}>{comp}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experiences;