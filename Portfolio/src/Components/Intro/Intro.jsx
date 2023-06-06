import FloatingDiv from '../FloatingDiv/FloatingDiv';
import GitHub from '../../../public/images/github.png';
import Linkedin from '../../../public/images/linkedin.png';
import Instagram from '../../../public/images/instagram.png';
import Vector1 from '../../../public/images/Vector1.png';
import Vector2 from '../../../public/images/Vector2.png';
import Boy from '../../../public/images/boy.png';
import Thumbup from '../../../public/images/thumbup.png';
import Crown from '../../../public/images/crown.png';
import Glassesimoji from '../../../public/images/glassesimoji.png';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion'; 
import { Link } from 'react-scroll';
import './Intro.css';

function Intro() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = { duration : 2, type : 'spring'};

    return (
        <div className="intro">
           <div className="i-left">
                <div className="i-name">
                    <span style={{color: darkMode ? "white" : ""}}>Hi! I Am</span>
                    <span>Artur Petrosyan</span>
                    <span></span>
                </div>
                <Link spy={true} to="Footer" smooth={true}>
                    <button className="button i-button">Hire me</button>
                </Link>
                <div className="i-icons">
                    <img src={GitHub} alt="" />
                    <img src={Linkedin} alt="" />
                    <img src={Instagram} alt="" />
                </div>
           </div>
           <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Boy} alt="" />
                <motion.img
                initial={{left: "-36%"}}
                whileInView={{left: "-24%"}}
                transition={transition}
                src={Glassesimoji} alt="" />
                <motion.div
                initial={{left: "74%", top: "-4%"}}
                whileInView={{left: "68%"}}
                transition={transition}
                className="floatimg1 floating-div">
                    <FloatingDiv image={Crown} txt1="Web" txt2="Developer"/>
                </motion.div>
                <motion.div
                initial={{left: "9rem", top: "18rem"}}
                whileInView={{left: "0rem"}}
                transition={transition}
                className="floatimg2 floating-div">
                    <FloatingDiv image={Thumbup} txt1="Best Design" txt2="Award"/>
                </motion.div>
                <div className="blur" style={{background: 'rgb(238, 210, 255)'}}>
                </div>
                <div className="blur" style={{
                    width: "21rem",
                    height: "11rem",
                    background: "#C1F5FF",
                    top: "17rem",
                    left: "-9rem"
                }}>
                </div>
           </div>
        </div>
    )
}

export default Intro;