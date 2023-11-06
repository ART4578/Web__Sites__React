import { 
    Container,
    Row, 
    Col, 
    ListGroup,
    ListGroupItem
} from "reactstrap";
import { Link } from "react-router-dom";
import QuickLinksData from "../Data/QuickLinks";
import "../Style/Footer.scss";

export default function Footer() {
    //new date
    const date = new Date();
    const year = date.getFullYear();
 
    //scroll top function
    const scrollTop = () => {
         window.scrollTo(0, 0);
    };
 

    return (
        //footer component
        <footer className="footer">
        <Container>
            <Row>
                {/*logo footer*/}
                <Col lg="4" md="4" sm="12">
                    {/*logo footer car icon and car text*/}
                        <div className="logo footer__logo">
                            <h1>
                                <Link to="/" className="d-flex align-items-center gap-2 link__title text-decoration-none">
                                    <i className="ri-car-line"></i>
                                    <span>Luxury  Car</span>
                                </Link>
                            </h1>
                        </div>
                    {/*logo car description*/}
                    <p className="footer__logo-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatum quia, libero ullam soluta aut explicabo odio delectus ipsum a quas iusto vitae repudiandae inventore eaque debitis dignissimos nam eos?
                    </p>
                </Col>
                {/*quick links*/}
                <Col lg="2" md="4" sm="6">
                    <div className="mb-4">
                        {/*quick links header*/}
                        <h5 className="footer__link-title">Quick Links</h5>
                        {/*quick links list group path and display*/}
                        <ListGroup>
                            {
                                QuickLinksData.map(item => {
                                    return (
                                        <ListGroupItem 
                                        key={item.id}
                                        className="p-0 mt-3 quick__link"
                                        >
                                          <Link to={item.path}>{item.display}</Link>  
                                        </ListGroupItem>
                                    )
                                })
                            }
                        </ListGroup>
                    </div>
                </Col>
                {/*info office*/}
                <Col lg="3" md="4" sm="6">
                    {/*info office header and text info*/}
                    <div className="mb-4">
                        <h5 className="footer__link-title mb-4">Head Office</h5>
                        <p className="office__info">123 Paronyan, Vedi City, Armenia</p>
                        <p className="office__info">Phone: +374 097-777-777</p>
                        <p className="office__info">Email: arthur@gmail.com</p>
                        <p className="office__info">Office Time: 10am - 7pm</p>
                    </div>
                </Col>
                {/*newsletter*/}
                <Col lg="3" md="4" sm="12">
                    <div className="mb-4">
                        {/*newsletter header and text*/}
                        <h5 className="footer__link-title">Newsletter</h5>
                        <p className="section__description">Subscribe our newsletter</p>
                        {/*newsletter email input and icon*/}
                        <div className="newsletter">
                            <input type="email" placeholder="Email"/>    
                            <span><i className="ri-send-plane-line"></i></span>
                        </div>   
                    </div>            
                </Col>
                {/*footer bottom*/}
                <Col lg="12">
                    {/*footer bottom text and icon*/}
                    <div className="footer__bottom">
                        <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                            <i className="ri-copyright-line"></i> Copyright {year}, Developed by <span className="name__txt">Arthur Petrosyan.</span> All rights reserved. 
                        </p>  
                        <div className="arrow__top">
                            <i className="ri-arrow-up-line arrow__top__btn" onClick={scrollTop}></i>   
                        </div>                                   
                    </div>            
                </Col>
            </Row>
        </Container>
    </footer>
    );
};