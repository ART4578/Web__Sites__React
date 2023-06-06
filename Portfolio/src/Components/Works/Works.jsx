import Upwork from '../../../public/images/Upwork.png';
import Fiverr from '../../../public/images/fiverr.png';
import Amazon from '../../../public/images/amazon.png';
import Shopify from '../../../public/images/Shopify.png';
import Facebook from '../../../public/images/Facebook.png';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './Works.css';

function Works() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = { duration : 2, type : 'spring'};

    return (
        <div className="works">
          {/* left side */}  
          <div className="awesome">
                <span style={{color: darkMode ? "white" : ""}}>Works for All these</span>
                <span>Brands and Clients</span>
                <span>
                    Lorem ispum is simpley dummy text of printing of printing Lorem
                    <br />
                    ispum is simpley dummy text of printing
                    <br />
                    ispum is simpley dummy text of printing text of printing
                    <br />
                    Lorem ispum is simpley dummy text
                </span>
                <Link spy={true} to="Footer" smooth={true}>
                   <button className="button s-button">Hire me</button>
                </Link>
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
          </div>
          {/* right side */}
          <div className="w-right">
               <motion.div
               initial={{rotate: "45deg"}}
               whileInView={{rotate: "0deg"}}
               viewport={{margin: "-40px"}}
               transition={{duration: 3.5, type: "spring"}}
               className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
               </motion.div>
               {/* background Circles */}
               <div className="w-backCircle blueCircle"></div>
               <div className="w-backCircle yellowCircle"></div> 
          </div>    
        </div>
    );
}

export default Works;