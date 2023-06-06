import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "../Components/UI/CommonSection";
import SocialData from "../assets/data/socialData";
import "../Styles/Contact.css";

export default function Contact() {
    return (
        //contact
        <Helmet title="Contact">
            {/*common section*/}
            <CommonSection title="Contact"/>
            {/*contact page*/}
            <section>
                <Container>
                    <Row>
                        {/*contact page get in touch*/}
                        <Col lg="7" md="7">
                            {/*contact page title*/}
                            <h6 className="fw-bold mb-4">Get In Touch</h6>
                            {/*contact page form*/}
                            <Form>
                                {/*contact page form your name*/}
                                <FormGroup className="contact__form">
                                    <Input type="text" placeholder="Your Name"/>
                                </FormGroup>
                                {/*contact page form email*/}
                                <FormGroup className="contact__form">
                                    <Input type="email" placeholder="Email"/>
                                </FormGroup>
                                {/*contact page form textarea*/}
                                <FormGroup className="contact__form">
                                    <textarea rows="5" placeholder="Message" className="textarea"></textarea>
                                </FormGroup>
                                {/*contact page form button*/}
                                <button type="submit" className="contact__btn">Send Message</button>
                            </Form>
                        </Col>
                        {/*contact page social*/}
                        <Col lg="5" md="5">
                            <div className="contact__info">
                                {/*contact page social title*/}
                                <h6 className="fw-bold">Contact Information</h6>    
                                {/*contact page social description*/}
                                <p className="section__description mb-0">123 Paronyan, Vedi City, Armenia</p>
                                {/*contact page social icons*/}
                                <div className="d-flex align-items-center gap-2">
                                    <h6 className="mb-0 fs-6">Phone:</h6>
                                    <p className="section__description mb-0">+097-777-777</p>    
                                </div> 
                                <div className="d-flex align-items-center gap-2">
                                    <h6 className="mb-0 fs-6">Email:</h6>
                                    <p className="section__description mb-0">arthur@gmail.com</p>    
                                </div>
                                <h6 className="fw-bold mt-4">Follow Us</h6>
                                <div className="d-flex align-items-center gap-4 mt-3">
                                    {
                                        SocialData.map(item => {
                                            return (
                                                <Link to={item.url} key={item.id} className="social__link-icon">
                                                    <i className={item.icon}></i>
                                                </Link>
                                            )
                                        })                                            
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};