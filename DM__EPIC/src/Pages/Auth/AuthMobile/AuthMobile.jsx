import Logo from "../../../Assets/Imgs/favicon 512.png";
import { Link } from "react-router-dom";
import "./AuthMobile.scss";

export default function AuthMobile() {
    return (
        //mobile logo
        <div className="mobile__logo">
            <div className="log__content">
                {/*logo*/}
                <Link to="/" className="mob__href">
                    <div className="logo__div">
                        <img src={Logo} alt="logo" className="img__logo"/>
                    </div>
                </Link>
                {/*content*/}
                <div className="content">
                    <Link to="/" className="content__txt"><p>DIM-EPIC</p></Link>
                    <Link to="/" className="content__txt"><p>4GB</p></Link>
                </div>
            </div>
        </div>
    );
};