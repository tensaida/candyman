import React from 'react';
import Game from '../Game';
let Home = () => {
    return (
        <React.Fragment>
            <section className="container-fluid px-0">
            <div className="wrapper row align-items-center">
                <div className="left col-lg-6">
                    <div id="headingGroup" className="text-white text-center d-none d-lg-block mt-5">
                        <h1 className=""><span>/</span> <span>/</span></h1>
                        <h1 className=""><span>/</span> <span>/</span></h1>
                        <h1 className=""><span>/</span> <span>/</span></h1>
                        <h1 className=""><span>/</span> <span>/</span></h1>
                        <h1 className=""><span>/</span> <span>/</span></h1>
                        <h1 className=""><span>/</span> <span>/</span></h1>
                    </div>
                </div>
                {/*here*/}
                <div className="right col-lg-6">
                    <Game />
                </div>
            </div>
        </section>
        </React.Fragment>
    )
};
export default Home;