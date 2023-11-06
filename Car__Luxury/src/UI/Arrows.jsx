import { Link } from "react-router-dom";
import "../Style/Arrows.scss";

export default function Arrows({ arrowLeftRouter, arrowRightRouter }) {
    return (
        //arrows
        <div className="arrows">
            {/*arrow left*/}
            <Link to={arrowLeftRouter}>
                <button className="btn__arrow__left">
                    <i className="ri-arrow-left-line"></i>
                </button>
            </Link>
            {/*arrow right*/}
            <Link to={arrowRightRouter}>
                <button className="btn__arrow__right">
                    <i className="ri-arrow-right-line"></i>
                </button>
            </Link>
        </div>
    );
};