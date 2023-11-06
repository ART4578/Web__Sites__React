import { Link } from "react-router-dom";
import "./SettingsBack.scss";

export default function SettingsBack() {
    return (
        //back
        <Link to="/info" className="href">
        <div className="icon__txt">
            {/*back img*/}
            <div className="icon__img">
                <i className="ri-arrow-left-line icon"></i>
            </div>
            {/*back text*/}
            <p className="text">Back</p>
        </div>
        </Link>
    );
};