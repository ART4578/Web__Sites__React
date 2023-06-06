import { Container, Row, Col } from "reactstrap";
import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "../Components/UI/CommonSection";
import CarItem from "../Components/UI/CarItem";
import CarData from "../assets/data/carData";

export default function CarListing() {
    return (
        //car listing
        <Helmet title="Cars">
            {/*common section*/}
            <CommonSection title="Car Listing"/>
            {/*car listing page section*/}  
            <section>
                <Container>
                    <Row>
                        {/*car listing page select*/}
                        <Col lg="12">
                            <div className="d-flex align-items-center gap-3 mb-5">
                                <span className="d-flex align-items-center gap-2">
                                    <i className="ri-sort-asc"></i> Sort By
                                </span>
                                <select style={{ outline : "none" }}>
                                    <option>Select</option>
                                    <option value="low">Low to High</option>
                                    <option value="high">High to Low</option>
                                </select>
                            </div>
                        </Col>
                        {/*car listing page car item*/}
                        {
                            CarData.map(item => {
                                return (
                                    <CarItem item={item} key={item.id}/>                                  
                                )
                            })
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};