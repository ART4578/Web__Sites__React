import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";
import Slider from "react-slick";
import "../../Styles/Testimonial.css";

export default function Testimonial() {
    //slider settings
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        ],
    };

    return (
        //testimonial
        <Slider {...settings}>
            {/*user 1*/}
            <div className="testimonial py-4 px-3">
                {/*user 1 description*/}
                <p className="section__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quibusdam rem ipsum facilis maiores nemo dolor id vitae pariatur, libero laborum expedita dolorum rerum architecto aliquid iste! Atque, ducimus laboriosam.
                </p> 
                <div className="mt-3 d-flex align-items-center gap-4">
                    {/*user 1 img*/}
                    <img src={ava01} alt="user-img" className="w-25 h-25 rounded-2"/>
                    {/*user 1 user description*/}
                    <div>
                        <h6 className="mb-0 mt-3">John Smith</h6>
                        <p className="section__description">Customer</p>
                    </div>
                </div>
            </div>
            {/*user 2*/}  
            <div className="testimonial py-4 px-3">
                {/*user 2 description*/}
                <p className="section__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quibusdam rem ipsum facilis maiores nemo dolor id vitae pariatur, libero laborum expedita dolorum rerum architecto aliquid iste! Atque, ducimus laboriosam.
                </p>
                <div className="mt-3 d-flex align-items-center gap-4">
                    {/*user 2 img*/}
                    <img src={ava02} alt="user2-img" className="w-25 h-25 rounded-2"/>
                    {/*user 2 user description*/}
                    <div>
                        <h6 className="mb-0 mt-3">Alivia Doe</h6>
                        <p className="section__description">Customer</p>
                    </div>
                </div>
            </div>
            {/*user 3*/}
            <div className="testimonial py-4 px-3">
                {/*user 3 description*/}
                <p className="section__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quibusdam rem ipsum facilis maiores nemo dolor id vitae pariatur, libero laborum expedita dolorum rerum architecto aliquid iste! Atque, ducimus laboriosam.
                </p>
                <div className="mt-3 d-flex align-items-center gap-4">
                    {/*user 3 img*/}
                    <img src={ava03} alt="user3-img" className="w-25 h-25 rounded-2"/>
                    {/*user 3 user description*/} 
                    <div>
                        <h6 className="mb-0 mt-3">Roberts Delon</h6>
                        <p className="section__description">Customer</p>
                    </div>
                </div>
            </div>
            {/*user 4*/}
            <div className="testimonial py-4 px-3">
                {/*user 4 description*/}
                <p className="section__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quibusdam rem ipsum facilis maiores nemo dolor id vitae pariatur, libero laborum expedita dolorum rerum architecto aliquid iste! Atque, ducimus laboriosam.
                </p>
                <div className="mt-3 d-flex align-items-center gap-4">
                    {/*user 4 img*/}
                    <img src={ava04} alt="user4-img" className="w-25 h-25 rounded-2"/>
                    {/*user 4 user description*/}
                    <div>
                        <h6 className="mb-0 mt-3">July Doe</h6>
                        <p className="section__description">Customer</p>
                    </div>
                </div>
            </div>
        </Slider>
    );
};