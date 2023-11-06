import CommonSection from "../UI/CommonSection";
import BMWImg from "../Img/Logo/bmw.png";
import MercedesImg from "../Img/Logo/mercedes_benz.png";
import { Link } from "react-router-dom";
import Arrows from "../UI/Arrows";
import "../Style/Cars.scss";

export default function Cars() {
    return (
        //cars
        <div className="cars__block">
            {/*arrows*/}
            <Arrows arrowLeftRouter="/contact" arrowRightRouter="/bmw"/>
            <CommonSection title="Cars"/>
            <div className="car__items">
                <div className="car__bmw">
                    <Link to="/bmw">
                    <div className="bmw__title">
                        <h6>BMW</h6>
                    </div>
                    </Link>
                    <Link to="/bmw">
                    <div className="bmw__img">
                        <img src={BMWImg} alt="bmw-img"/>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};