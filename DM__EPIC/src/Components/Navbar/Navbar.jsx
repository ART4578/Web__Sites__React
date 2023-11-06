import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Imgs/favicon 512.png";
import HomeLogo from "../../Assets/Imgs/Vector 76.png";
import LanguageLogo from "../../Assets/Imgs/language__icon.png";
import './Navbar.scss';

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
   
  useEffect(() => {
    showButton();
  }, []); 

  return (
    //navbar
    <div className="navbar">
        <div className="navbar__info">
            {/*navbar logo*/}
            <div className="navbar__logo">
                {/*mobile menu*/} 
                <span className="menu-icon" onClick={handleClick}>
                  <i 
                  className={click ? "ri-close-line menu__icon" : "ri-menu-line menu__icon"}></i> 
                </span>
                <div className="logo__text">
                    <div className="logo__div">
                        <img src={Logo} alt="logo" className="logo__img"/>
                    </div>
                <div className="content__div">
                    <Link to="/" className="content__txt" onClick={closeMobileMenu}>
                        <p>DIM-EPIC</p>
                    </Link>
                    <Link to="/" className="content__txt" onClick={closeMobileMenu}>
                        <p>4GB</p>
                    </Link>
                </div>
                </div>
                {/*admin icon*/}
                <Link to="/auth">
                    <div className="admin">
                        <i className="ri-user-line mobile-user-icon"></i>
                    </div>
                </Link>
            </div> 
            {/*navbar menu*/}
            <div className={click ? "navbar__menu active" : "navbar__menu"}> 
              {/*home link*/} 
              <div className="home__link">
                  <img className="home__logo" src={HomeLogo} alt="home__logo"/>
                  <Link to="/" className="home__text" onClick={closeMobileMenu}>Home</Link>
              </div>
              {/*info link*/}
              <div className="info__link">
                <div className="info__logo">
                  <i className="ri-information-line info__icon"></i>
                </div>
                <Link to="/info" className="info__text" onClick={closeMobileMenu}>Info</Link>
              </div>
              {/*settings link*/}
              <div className="settings__link">
                <div className="settings__logo">
                  <i className="ri-settings-line settings__icon"></i>
                </div>
                <Link to="/settings" className="settings__text" onClick={closeMobileMenu}>Settings</Link>
              </div>
              {/*white theme link*/}
              <div className="white__theme__link">
                <div className="white__theme__logo">
                  <i className="ri-sun-line white-theme-icon"></i>
                </div>
                <p className="white__theme__text" onClick={closeMobileMenu}>White theme</p>
              </div>
              {/*language link*/}
              <div className="language__link">
                <div className="language__content">
                  {/*language content*/}
                  <div className="language__logo">
                    <img src={LanguageLogo} alt="languageIcon" className="img"/>
                  </div>
                  {/*language text*/}
                  <div className="language__text">
                    <button className="lang__btn" onClick={closeMobileMenu}>English</button>
                  </div>
                  {/*language icon arrow bottom*/}
                  <div className="imgBottom__div">
                    <i className="ri-arrow-down-s-line arrow-down-icon"></i>  
                  </div> 
                </div>
              </div>
              {/*user link*/}
              <div className="user__link">
                <div className="user__logo">
                  <i className="ri-user-line user-icon"></i>
                </div>
                <Link to="/auth" className="user__text" onClick={closeMobileMenu}>Admin</Link>
                <div className="imgBottom__div">
                  <i className="ri-arrow-down-s-line arrow-down-icon"></i>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
};