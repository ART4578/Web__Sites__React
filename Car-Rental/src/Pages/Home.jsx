import HeroSlider from "../Components/UI/HeroSlider";
import Helmet from "../Components/Helmet/Helmet";
import AboutSection from "../Components/UI/AboutSection";
import ServicesList from "../Components/UI/ServicesList";
import CarData from "../assets/data/carData";
import CarItem from "../Components/UI/CarItem"; 
import BecomeDriverSection from "../Components/UI/BecomeDriverSection";
import Testimonial from "../Components/UI/Testimonial";
import BlogList from "../Components/UI/BlogList";
import { Container, Row, Col } from "reactstrap";

export default function Home() {
    return (
        <Helmet title="Home">
            {/*hero section*/}
            <section className="p-0 hero-slider-section">
                {/*hero slider*/}
                <HeroSlider/>
            </section>
            {/*about section*/}
            <AboutSection/>
            {/*services section*/}
            <section>
                <Container>
                    <Row>
                        {/*services title*/}
                        <Col lg="12" className="mb-5 text-center">
                            <h6 className="section__subtitle">See our</h6>
                            <h2 className="section__title">Popular Services</h2>
                        </Col>
                        {/*services list*/}
                        <ServicesList/>
                    </Row>
                </Container>
            </section>
            {/*car offer section*/}
            <section>
                <Container>
                    <Row>
                        {/*car offer header*/}
                        <Col lg="12" className="text-center mb-5">
                            <h6 className="section__subtitle">Come with</h6>
                            <h2 className="section__title">Hot Offers</h2>
                        </Col>
                        {/*car offer content*/}
                        {
                            CarData.slice(0, 6).map(item => {
                                return <CarItem item={item} key={item.id}/>
                            })
                        }    
                    </Row>                  
                </Container>
            </section>
            {/*become a driver section*/}
            <BecomeDriverSection/>
            {/*testimonial section*/}
            <section>
                <Container>
                    <Row>
                        {/*testimonial header*/}
                        <Col lg="12" className="mb-4 text-center">
                            <h6 className="section__subtitle">Our clients says</h6>
                            <h2 className="section__title">Testimonials</h2>    
                        </Col>
                        {/*testimonial users*/}
                        <Testimonial/>
                    </Row>
                </Container>
            </section>
            {/*blog section*/}
            <section>
                <Container>
                    <Row>
                        {/*blogs header*/}
                        <Col lg="12" className="mb-5 text-center">
                            <h6 className="section__subtitle">Explore our blogs</h6>
                            <h2 className="section__title">Latest Blogs</h2>    
                        </Col>
                        {/*blogs content*/}
                        <BlogList/>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};