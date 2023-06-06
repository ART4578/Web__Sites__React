import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { useRef } from "react";
import "../../Styles/Header.css";

export default function Header() {
    //nav links path and display
    const navLinks = [
        { id : 1, path : "/home", display : "Home" },
        { id : 2, path : "/about", display : "About" },
        { id : 3, path : "/cars", display : "Cars" },
        { id : 4, path : "/blogs", display : "Blog" },
        { id : 5, path : "/contact", display : "Contact" }
    ];

    //mobile menu 
    const menuRef = useRef(null);

    const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

    return (
        //header
        <header className="header">
            {/*header top*/}
            <div className="header__top">
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="6">
                            {/*header top left*/}
                            <div className="header__top__left">
                                {/*header top left text and phone icon*/}
                                <span>Need Help?</span>
                                <span className="header__top__help">
                                    <i className="ri-phone-fill"></i> +374-097-777-777
                                </span>
                            </div>
                        </Col>
                        {/*header top right*/}
                        <Col lg="6" md="6" sm="6">
                            {/*header top right register and login icons*/}
                            <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                                <Link to="#" className="d-flex align-items-center gap-1">
                                    <i className="ri-login-circle-line"></i> Login
                                </Link>
                                <Link to="#" className="d-flex align-items-center gap-1">
                                    <i className="ri-user-line"></i> Register
                                </Link>
                            </div>         
                        </Col>
                    </Row>    
                </Container>    
            </div> 
            {/*header middle*/}
            <div className="header__middle">
                <Container>
                    <Row>
                        {/*logo car*/}
                        <Col lg="4" md="3" sm="4">
                            <Link to="/home">
                                <div className="logo">
                                    {/*logo car icon and header*/}
                                    <h1>
                                        <Link to="/home" className="d-flex align-items-center gap-2">
                                            <i className="ri-car-line"></i>
                                            <span>Rent Car <br /> Service</span>
                                        </Link>
                                    </h1>
                                </div>
                            </Link>
                        </Col>
                        {/*earth location*/}
                        <Col lg="3" md="3" sm="4">
                            <div className="header__location d-flex align-items-center gap-2">
                                {/*earth location icon*/}
                                <span><i className="ri-earth-line"></i></span>
                                {/*earth location header*/}
                                <div className="header__location-content">
                                    <h4>Armenia</h4>
                                    <h6>Vedi City, Armenia</h6>
                                </div>
                            </div>
                        </Col>
                        {/*time*/}
                        <Col lg="3" md="3" sm="4">
                            <div className="header__location d-flex align-items-center gap-2">
                                {/*time icon*/}
                                <span><i className="ri-time-line"></i></span>
                                {/*time header*/}
                                <div className="header__location-content">
                                    <h4>Sunday to Friday</h4>
                                    <h6>10am - 7pm</h6>
                                </div>
                            </div>
                        </Col>    
                        {/*button call*/}
                        <Col lg="2" md="3" sm="0" className="d-flex align-items-center justify-content-end">
                            <button className="header__btn btn">
                                <Link to="/contact">
                                    <i className="ri-phone-line"></i> Request a call    
                                </Link>    
                            </button>    
                        </Col>
                    </Row>
                </Container>
            </div>
            {/*main navigation*/}
            <div className="main__navbar">
                <Container>
                    <div className="navigation__wrapper d-flex align-items-center justify-content-between">
                        {/*mobile menu*/}
                        <span className="mobile__menu">
                            <i className="ri-menu-line" onClick={toggleMenu}></i>
                        </span>
                        {/*navbar menu*/}
                        <div 
                        className="navigation"
                        ref={menuRef} 
                        onClick={toggleMenu}
                        >
                            <div className="menu">
                                {
                                    navLinks.map(item => {
                                        return (
                                            <NavLink 
                                            key={item.id} 
                                            to={item.path} 
                                            className={(navClass) => navClass.isActive ? "nav__active" : "nav__item"}
                                            >
                                                {item.display}
                                            </NavLink>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        {/*search box*/}
                        <div className="nav__right">
                            <div className="search__box">
                                <input type="text" placeholder="Search"/>
                                <span><i className="ri-search-line"></i></span>    
                            </div>    
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    );
};