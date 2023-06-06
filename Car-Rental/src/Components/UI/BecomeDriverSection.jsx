import { Container, Row, Col } from "reactstrap";
import DriverImg from "../../assets/all-images/cars-img/toyota-offer-2.png";
import { Link } from "react-router-dom";
import "../../Styles/Become-Driver-Section.css";

export default function BecomeDriverSection() {
    return (
        //become driver section
        <section className="become__driver">
            <Container>
                <Row>
                    {/*become driver section img*/}
                    <Col lg="6" md="6" sm="12" className="become__driver-img">
                        <img src={DriverImg} alt="driver-img" className="w-100"/>
                    </Col>
                    {/*become driver section content*/}
                    <Col lg="6" md="6" sm="12">
                        {/*become driver section header*/}
                        <h2 className="section__title become__driver-title">
                            Do You Want to Earn With Us? So Don't Be Late
                        </h2>    
                        {/*become driver section button*/}
                        <Link to="/contact">
                            <button className="btn become__driver-btn mt-4">
                                Become a Driver
                            </button>
                        </Link>
                    </Col> 
                </Row>
            </Container>
        </section>
    );
};