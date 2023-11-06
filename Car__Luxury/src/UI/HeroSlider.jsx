import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Container } from "reactstrap";
import Arrows from "../UI/Arrows";
import "../Style/HeroSlider.scss";

export default function HeroSlider() {
    //slider settings
    const settings = {
        fade : 1,
        speed : 2000,
        autoplaySpeed : 3000,
        infinite : true,
        autoplay : true,
        slidesToShow : 1,
        slidesToScroll : 1,
        pauseOnHover : false,
    };

    return (
        //hero slider
        <Slider {...settings} className="hero__slider">
            {/*slide 1*/}
            <div className="slider__item slider__item-01 mt0">
                <Container>
                    {/*arrows*/}
                    <Arrows arrowLeftRouter="/login" arrowRightRouter="/about"/>
                    <div className="slider__content">
                        {/*slide 1 headers*/}
                        <h1 className="text-light mb-4 title__txt">Luxury Car</h1>
                        {/*slide 1 button*/}
                        <button className="btn reserve-btn mt-4">
                            <Link to="/mercedes" className="btn__link">Reserve Now</Link>
                        </button>
                    </div>
                </Container>
            </div>
            {/*slide 2*/} 
            <div className="slider__item slider__item-02 mt0">
                <Container>
                    {/*arrows*/}
                    <Arrows arrowLeftRouter="/login" arrowRightRouter="/about"/>
                    <div className="slider__content">
                        {/*slide 2 headers*/}
                        <h1 className="text-light mb-4 title__txt">Luxury Car</h1>
                        {/*slide 2 button*/}
                        <button className="btn reserve-btn mt-4">
                            <Link to="/cars" className="btn__link">Reserve Now</Link>
                        </button>
                    </div>
                </Container>
            </div>
            {/*slide 3*/} 
            <div className="slider__item slider__item-03 mt0">
                <Container>
                    {/*arrows*/}
                    <Arrows arrowLeftRouter="/login" arrowRightRouter="/about"/>
                    <div className="slider__content">
                        {/*slide 3 headers*/}
                        <h1 className="text-light mb-4 title__txt">Luxury Car</h1>
                        {/*slide 3 button*/}
                        <button className="btn reserve-btn mt-4">
                            <Link to="/cars" className="btn__link">Reserve Now</Link>
                        </button>
                    </div>
                </Container>
            </div>
        </Slider>
    );
};