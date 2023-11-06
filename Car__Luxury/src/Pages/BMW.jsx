import BMWData from "../Data/BMWData";
import CarItem from "../UI/CarItem";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../UI/CommonSection";
import Arrows from "../UI/Arrows";
import "../Style/Select.scss";

export default function BMW() {
    return (
        <div className="bmw__container"> 
            {/*arrows*/}
            <Arrows arrowLeftRouter="/cars" arrowRightRouter="/"/>
            <CommonSection title="BMW Cars"/>
            <section>
                <Container>
                    <Row>
                        {/*car select*/}
                        <Col lg="12">
                            <div className="d-flex align-items-center gap-3 mb-5">
                                <span className="d-flex align-items-center gap-2 sort__bye">
                                    <i className="ri-sort-asc"></i> Sort By
                                </span>
                                <select className="car__select">
                                    <option>Select</option>
                                    <option value="low">Low to High</option>
                                    <option value="high">High to Low</option>
                                </select>
                            </div>
                        </Col>
                        {/*car listing page car item*/}
                        {
                            BMWData.map((BMW) => (
                                <CarItem item={BMW} key={BMW.id} />
                        ))}                     
                    </Row>
                </Container>
            </section>            
        </div>
    );
};