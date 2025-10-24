import BallsGroup from "./ballsGroup"

function Experiences() {
    return(
        <>
        <section className="experiences">
            <h1>Expériences professionelles</h1>
            <div className="chronologie">
                <div className="stick">
                    <div className="balls-group">
                        <BallsGroup pattern={[4, 4, 3]} />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Experiences