import { Container, Row, Col } from "reactstrap";
import AboutImg from "../../assets/all-images/cars-img/bmw-offer.png";
import "../../Styles/About-Section.css";

export default function AboutSection({ aboutClass }) {
    return (
        //about section
        <section 
        className="about__section"
        style={ aboutClass === "aboutPage" ? { marginTop : "0px" } : { marginTop : "80px" } }
        >
            <Container>
                <Row>
                    {/*about content*/}
                    <Col lg="6" md="6">
                        <div className="about__section-content">
                            {/*about header*/}
                            <h4 className="section__subtitle">
                                About Us
                            </h4>
                            <h2 className="section__title">
                                Welcome to car rent service
                            </h2>
                            {/*about text*/}
                            <p className="section__description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo est sequi possimus, accusamus ut officiis nemo amet quos, consectetur incidunt eveniet praesentium illum voluptas quaerat exercitationem aut ipsa odio! Deleniti exercitationem quod cumque modi vitae nulla voluptatum ab natus quae?
                            </p>
                            <div className="about__section-item d-flex align-items-center">
                                <p className="section__description d-flex align-items-center gap-2">
                                    <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                                </p>
                                <p className="section__description d-flex align-items-center gap-2">
                                    <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                            <div className="about__section-item d-flex align-items-center">
                                <p className="section__description d-flex align-items-center gap-2">
                                    <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                                </p>
                                <p className="section__description d-flex align-items-center gap-2">
                                    <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                        </div>
                    </Col>
                    {/*about img*/}
                    <Col lg="6" md="6">
                        <div className="about__img">
                            <img src={AboutImg} alt="bmw-img" className="w-100"/>                          
                        </div>   
                    </Col>
                </Row>
            </Container>
        </section>
    );
};