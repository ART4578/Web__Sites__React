import OurMembers from "../UI/OurMembers";
import DriveImg from "../Img/drive.jpg";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../UI/CommonSection";
import AboutSection from "../UI/AboutSection";
import Arrows from "../UI/Arrows";
import "../Style/About.scss";

export default function About() {
    return (
        <> 
            {/*arrows*/}
            <Arrows arrowLeftRouter="/" arrowRightRouter="/register"/>
            {/*common section*/}
            <CommonSection title="About"/>
            {/*about section*/}
            <AboutSection/>
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
                                <p className="section__description txt__color">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis sunt quisquam nisi quaerat repudiandae inventore dolore quam, blanditiis atque praesentium iure molestias voluptatem. Hic pariatur animi maiores nostrum officia mollitia.
                                </p>
                                <p className="section__description txt__color">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis sunt quisquam nisi quaerat repudiandae inventore dolore quam, blanditiis atque praesentium iure molestias voluptatem. Hic pariatur animi maiores nostrum officia mollitia.
                                </p>
                                {/*about page section icon*/}
                                <div className="d-flex align-items-center gap-3 mt-4">
                                    <span className="fs-4"><i className="ri-phone-line txt__color"></i></span>
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
            {/*our members*/}
            <section className="our__members">
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
        </>
    );
};