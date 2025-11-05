function NavBar() {
    return(
        <>
        <nav>
            <ul>
                <li>
                    <span className="navball"></span>
                    <a href="#About">About me</a>
                </li>
                <li>
                    <span className="navball"></span>
                    <a href="#Formations">Diplômes et formations</a>
                </li>
                <li>
                    <span className="navball"></span>
                    <a href="#Experiences">Expériences professionelles</a>
                </li>
                <li>
                    <span className="navball"></span>
                    <a href="#Divers">Divers</a>
                </li>
                <li>
                    <span className="navball"></span>
                    <a href="#Contact">Contact</a>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default NavBar