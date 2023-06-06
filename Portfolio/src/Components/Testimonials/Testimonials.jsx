import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import ProfilePic1 from '../../../public/images/profile1.jpg';
import ProfilePic2 from '../../../public/images/profile2.jpg';
import ProfilePic3 from '../../../public/images/profile3.jpg';
import ProfilePic4 from '../../../public/images/profile4.jpg';
import 'swiper/css/pagination';
import 'swiper/css';
import './Testimonials.css';

function Testimonials() {
    const clients = [
        {
          img: ProfilePic1,
          view: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam ipsum necessitatibus molestiae sequi consequatur fugiat quasi assumenda. Voluptatibus, voluptate!"      
        },
        {
          img: ProfilePic2,
          view: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam ipsum necessitatibus molestiae sequi consequatur fugiat quasi assumenda. Voluptatibus, voluptate!" 
        },
        {
          img: ProfilePic3,
          view: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam ipsum necessitatibus molestiae sequi consequatur fugiat quasi assumenda. Voluptatibus, voluptate!"
        },
        {
          img: ProfilePic4,
          view: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam ipsum necessitatibus molestiae sequi consequatur fugiat quasi assumenda. Voluptatibus, voluptate!" 
        }
    ];
   
    return (
        <div className="t-wrapper" id="Testimonials">
            <div className="t-heading">
                <span>Clients always get</span>
                <span>Exceptional Work</span>
                <span>from me...</span>
                <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
                <div className="blur t-blur2" style={{background: "skyblue"}}></div>
            </div>
            {/* slider */}
            <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable: true}}
            >
                 {
                  clients.map((client, index) => {
                      return (
                          <SwiperSlide>
                                 <div key={index} className="testimonial">
                                    <img src={client.img} alt=""/>
                                    <span>{client.view}</span>
                                 </div>
                          </SwiperSlide>
                      )
                  })
                 } 
            </Swiper> 
        </div>
    )
}

export default Testimonials;