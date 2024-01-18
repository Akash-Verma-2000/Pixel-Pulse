import './Styles.css'

import Slid1 from "./Images/Slid-1.jpg"
import Slid2 from './Images/Slid-2.jpg';
import Slid3 from './Images/Slid-3.jpg';
import Slid4 from './Images/Slid-4.jpg';
import Slid5 from './Images/Slid-5.jpg';
import Slid6 from './Images/Slid-6.jpg';
import Slid7 from './Images/Slid-7.jpg';
import Slid8 from './Images/Slid-8.jpg';
import Slid9 from './Images/Slid-9.jpg';

export default function Carousel() {
    return (

        <div className="container d-flex carousel  justify-content-center">

            <div className="row w-100 position-relative start-50 translate-middle d-flex justify-content-between">


                <div className="col-4">

                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner my-shadow rounded-4">

                            <div className="carousel-item">
                                <img src={Slid1} className="d-block w-100 " alt="Slid-1" />
                            </div>

                            <div className="carousel-item">
                                <img src={Slid2} className="d-block w-100 " alt="Slid-2" />
                            </div>

                            <div className="carousel-item active">
                                <img src={Slid3} className="d-block w-100 " alt="Slid-3" />
                            </div>

                        </div>
                    </div>

                </div>
                <div className="col-4 ">

                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner my-shadow rounded-4">

                            <div className="carousel-item">
                                <img src={Slid4} className="d-block w-100 " alt="Slid-4" />
                            </div>

                            <div className="carousel-item">
                                <img src={Slid5} className="d-block w-100 " alt="Slid-5" />
                            </div>

                            <div className="carousel-item active">
                                <img src={Slid6} className="d-block w-100 " alt="Slid-6" />
                            </div>

                        </div>
                    </div>

                </div>
                <div className="col-4 ">

                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner my-shadow rounded-4">

                            <div className="carousel-item">
                                <img src={Slid7} className="d-block w-100 " alt="Slid-7" />
                            </div>

                            <div className="carousel-item">
                                <img src={Slid8} className="d-block w-100 " alt="Slid-8" />
                            </div>

                            <div className="carousel-item active">
                                <img src={Slid9} className="d-block w-100 " alt="Slid-9" />
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>


    )
}
