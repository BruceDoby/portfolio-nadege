function Contact() {
    return(
        <>
        <section className="contact">
            <h1>Me contacter</h1>
            <div className="contact_infos">
                <p className="mail">nadege.choquet@hotmail.fr</p>
                <a href="https://www.linkedin.com/in/nad%C3%A8ge-choquet-75b672273/" target="_blank" rel="noopener noreferrer">
                    <i className="devicon-linkedin-plain"></i>
                </a>
            </div>
            <div className="cvs">
                <div className="cv">
                    <p>Télécharger mon CV en français</p>
                    <a href="#" onClick={(e) => e.preventDefault()} download>C'est ici</a>
                </div>
                <div className="cv">
                    <p>Download my resume in english</p>
                    <a href="#" onClick={(e) => e.preventDefault()} download>It's here</a>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact