import { Container, Row, Col } from "reactstrap";
import BMWData from "../Data/BMWData";
import BookingForm from "../UI/BookingForm";
import PaymentMethod from "../UI/PaymentMethod";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CommenSection from "../UI/CommonSection";
import Arrows from "../UI/Arrows";
import "../Style/CarDetails.scss";

export default function CarDetails() {
    //useParams hooks
    const { slug } = useParams();   

    //single car item function
    const singleCarItem = BMWData.find(item => item.carName === slug);

    //useEffect hook
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [singleCarItem]);

    return (
            //car details
            <section className="car__child">
                {/*arrows*/}
                <Arrows arrowLeftRouter="/bmw" arrowRightRouter="/"/>
                <CommenSection title="Car Details"/>
                <Container>
                    <Row>
                        {/*car details img*/}
                        <Col lg="6">
                            <img src={singleCarItem.img} alt="img" className="w-100"/>
                        </Col>
                        {/*car details info*/}
                        <Col lg="6">
                            <div className="car__info">
                                {/*car details car name*/}
                                <h2 className="section__title">{singleCarItem.carName}</h2>
                                {/*car details info and stars*/}
                                <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                                    <h6 className="rent__price fw-bold fs-4">${singleCarItem.price}.00 / Day</h6>
                                    {/*car details stars*/}
                                    <span className="d-flex align-items-center gap-2">
                                        <span className="stars__color">
                                            <i className="ri-star-s-fill"></i>
                                            <i className="ri-star-s-fill"></i>
                                            <i className="ri-star-s-fill"></i>
                                            <i className="ri-star-s-fill"></i>
                                            <i className="ri-star-s-fill"></i>
                                        </span>
                                        ({singleCarItem.rating} rating)
                                    </span>
                                </div>
                                {/*car details car description*/}
                                <p className="section__description col__txt">
                                    {singleCarItem.description}
                                </p>
                                {/*car details car info block 1*/}
                                <div className="d-flex align-items-center mt-3" style={{ columnGap : "4rem" }}>
                                    {/*car details car model*/}
                                    <span className="d-flex align-items-center gap-1 section__description text__style">
                                        <i className="ri-roadster-line"></i> {singleCarItem.model}
                                    </span>
                                    {/*car details car automatic*/}
                                    <span className="d-flex align-items-center gap-1 section__description text__style">
                                        <i className="ri-settings-2-line"></i> {singleCarItem.automatic}
                                    </span>
                                    {/*car details car speed*/}
                                    <span className="d-flex align-items-center gap-1 section__description text__style">
                                        <i className="ri-timer-flash-line"></i> {singleCarItem.speed}
                                    </span>
                                </div>
                                {/*car details car info block 2*/}
                                <div className="d-flex align-items-center mt-3" style={{ columnGap : "2.8rem" }}>
                                    {/*car details car gps*/}
                                    <span className="d-flex align-items-center gap-1 section__description text__style">
                                        <i className="ri-map-pin-line"></i> {singleCarItem.gps}
                                    </span>
                                    {/*car details car seatType*/}
                                    <span className="d-flex align-items-center gap-1 section__description text__style">
                                        <i className="ri-wheelchair-line"></i> {singleCarItem.seatType}
                                    </span>
                                    {/*car details car brand*/}
                                    <span className="d-flex align-items-center gap-1 section__description text__style">
                                        <i className="ri-building-2-line"></i> {singleCarItem.carName}
                                    </span>
                                </div>
                            </div>
                        </Col>
                        {/*booking info*/}
                        <Col lg="7" className="mt-5">
                            <div className="booking__info mt-5">
                                {/*booking info header*/}
                                <h5 className="mb-4 fw-bold">Booking Information</h5>
                                {/*booking info form*/}
                                <BookingForm/>
                            </div>
                        </Col>  
                        {/*payment method*/}
                        <Col lg="5" className="mt-5">
                            <div className="payment__info mt-5">
                                {/*payment method header*/}
                                <h5 className="mb-4 fw-bold">Payment Information</h5>
                                {/*payment method info form*/}
                                <PaymentMethod/>
                            </div>
                        </Col>                         
                    </Row>
                </Container>
            </section>
    );
};