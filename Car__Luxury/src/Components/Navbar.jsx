import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/Navbar.scss";

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

    window.addEventListener('resize', showButton);

    return (
      //navbar component
      <nav className='navbar'>
        <div className='navbar-container'>
          {/*navbar logo*/}
          <Link to='/' className='navbar__logo__car' onClick={closeMobileMenu}>
            <div className="menu__title">
                <i className="ri-car-line"></i>
                <p style={{ marginLeft: "5px" }}>Luxury Car</p>
            </div>
          </Link>
          {/*navbar mobile menu*/}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'ri-close-line icon__menu' : 'ri-menu-2-line icon__menu'} />
          </div>
          {/*navbar links*/}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/register'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Register
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
          </ul>
         </div>
      </nav>
    );
};