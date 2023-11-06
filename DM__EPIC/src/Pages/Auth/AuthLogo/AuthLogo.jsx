import MobileIcon from "../../../Assets/Imgs/favicon 512.png";
import Logo from "../../../Assets/Imgs/favicon 512.png";
import { Link } from "react-router-dom";
import "./AuthLogo.scss";

export default function AuthLogo() {
    return (
        //auth logo
        <div className="auth__logo">
            <Link to="/">
                <div className="mobile__icon">
                    <img src={MobileIcon} alt="favicon" className="mob__ic"/>
                </div>
            </Link>
            <div className="logo__content">
                {/*logo*/}
                <div className="logo">
                    <img src={Logo} alt="logo" className="img"/>
                </div>
                {/*content*/}
                <div className="content">
                    <Link to="/" className="content__txt"><p>DIM-EPIC</p></Link>
                    <Link to="/" className="content__txt"><p>4GB</p></Link>
                </div>
            </div>
        </div>
    );
};