import CommonSection from "../Components/UI/CommonSection";
import Helmet from "../Components/Helmet/Helmet";
import AboutSection from "../Components/UI/AboutSection";
import BecomeDriverSection from "../Components/UI/BecomeDriverSection";
import OurMembers from "../Components/UI/OurMembers";
import DriveImg from "../assets/all-images/drive.jpg";
import { Container, Row, Col } from "reactstrap";
import "../Styles/About.css";

export default function About() {
    return (
        //about
        <Helmet title="About">
            {/*common section*/}
            <CommonSection title="About Us"/>
            {/*about section*/}
            <AboutSection aboutClass="aboutPage"/>
            {/*about page section*/}
            <section className="about__page-section">
                <Container>
                    <Row>
                        {/*about page section img*/}
                        <Col lg="6" md="6" sm="12">
                            <img src={DriveImg} alt="drive-img" className="w-100 rounded-3"/>
                        </Col>
                        {/*about page section content*/}
                        <Col lg="6" md="6" sm="12">
                            <div className="about__page-content">
                                {/*about page section header*/}
                                <h2 className="section__title">We Are Committed To Provide Safe Ride Solutions</h2>
                                {/*about page section description*/}
                                <p className="section__description">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis sunt quisquam nisi quaerat repudiandae inventore dolore quam, blanditiis atque praesentium iure molestias voluptatem. Hic pariatur animi maiores nostrum officia mollitia.
                                </p>
                                <p className="section__description">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis sunt quisquam nisi quaerat repudiandae inventore dolore quam, blanditiis atque praesentium iure molestias voluptatem. Hic pariatur animi maiores nostrum officia mollitia.
                                </p>
                                {/*about page section icon*/}
                                <div className="d-flex align-items-center gap-3 mt-4">
                                    <span className="fs-4"><i className="ri-phone-line"></i></span>
                                    <div>
                                        <h6 className="section__subtitle">Need Any Help?</h6>
                                        <h4>+010 23 45 67</h4>
                                    </div>
                                </div>
                            </div>
                        </Col>    
                    </Row>    
                </Container>              
            </section>
            {/*become driver section*/}
            <BecomeDriverSection/>
            {/*our members*/}
            <section>
                <Container>
                    <Row>
                        {/*our members header*/}
                        <Col lg="12" className="mb-5 text-center">
                            <h6 className="section__subtitle">Experts</h6>
                            <h2 className="section__title">Our Members</h2>
                        </Col>
                        {/*our members content*/}
                        <OurMembers/>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};