import Logo from "../../Assets/Imgs/favicon 512.png";
import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
    const scrollTop = () => {
        window.scrollTo(0, 0);
    };  

    return (
        //footer
        <div className="footer__logo">
            <div className="footer__logo__content" onClick={scrollTop}>
                {/*logo*/}
                <div className="footer__logo">
                    <img src={Logo} alt="logo" className="footer__img"/>
                </div>
                {/*content*/}
                <div className="footer__content">
                    <Link to="/" className="footer__content__txt"><p>DIM-EPIC</p></Link>
                    <Link to="/" className="footer__content__txt"><p>4GB</p></Link>
                </div>
            </div>
        </div>
    );
};