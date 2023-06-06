import { Swiper, SwiperSlide } from 'swiper/react';
import Sidebar from '../../../public/images/sidebar.png';
import Ecommerce from '../../../public/images/ecommerce.png';
import Hoc from '../../../public/images/hoc.png';
import Musicapp from '../../../public/images/musicapp.png';
import { useContext } from 'react';
import { themeContext } from '../../Context'; 
import 'swiper/css';
import './Portfolio.css';

function Portfolio() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="portfolio" id="Portfolio">
             {/* heading */}
             <span style={{color: darkMode ? "white" : ""}}>Recent Projects</span>
             <span>Portfolio</span>  
             {/* slider */}
             <Swiper 
             spaceBetween={30}
             slidesPerView={3}
             grabCursor={true}
             className="portfolio-slider"
             >
                  <SwiperSlide>
                        <img src={Sidebar} alt="" />    
                  </SwiperSlide>
                  <SwiperSlide>
                        <img src={Ecommerce} alt="" />    
                  </SwiperSlide>
                  <SwiperSlide>
                        <img src={Musicapp} alt="" />    
                  </SwiperSlide>
                  <SwiperSlide>
                        <img src={Hoc} alt="" />    
                  </SwiperSlide>     
             </Swiper> 
        </div>
    )
}

export default Portfolio;