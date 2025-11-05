function Footer() {
    return(
        <>
        <footer>
            <div className="footer__infos">
                <p>Design de n.choquet</p>
                <span>/</span>
                <p>
                Site réalisé par{" "}
                    <a href="https://brucedobyportfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
                    b.doby
                    </a>
                </p>
            </div>
            <div className="copyright">
                <p>Copyright</p>
                <i className="fa-solid fa-copyright"></i>
                <p>2025</p>
            </div>
        </footer>
        </>
    )
}

export default Footer