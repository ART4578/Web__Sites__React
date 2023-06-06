import Heartemoji from '../../../public/images/heartemoji.png';
import Glasses from '../../../public/images/glasses.png';
import Humble from '../../../public/images/humble.png';
import Card from '../Card/Card';
import Resume from '../Services/Resume-CV.pdf';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import './Services.css';

function Services() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = { duration : 2, type : 'spring'};
    
    return (
        <div className="services" id="Services">
            <div className="awesome">
                <span style={{color: darkMode ? "white" : ""}}>My Awesome</span>
                <span>services</span>
                <span>
                    Lorem ispum is simpley dummy text of printing of printing Lorem
                    <br />
                    ispum is simpley dummy text of printing
                </span>
                <a href={Resume} download>
                <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
            
            <div className="cards">
                <div
                style={{left: "14rem"}}>
                    <Card 
                    emoji={Heartemoji}
                    heading={'Design'}
                    detail={"Figma, Photoshop, Adobe, Adobe xd, Adobe Illustrator"}
                    />
                </div>
                <div
                style={{left: "-4rem", top: "12rem"}}>
                    <Card 
                    emoji={Glasses}
                    heading={'Developer'}
                    detail={"HTML, CSS, JavaScript, React.js, JQUERY, PHP, MySQL, SQL, Python, Git"}
                    />
                </div>
                <div
                style={{left: "12rem", top: "19rem"}}>
                    <Card 
                    emoji={Humble}
                    heading={'UI/UX'}
                    detail={"Lorem ispum dummy text are usually use in section where we need some random text"}
                    />
                </div>
                <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
            </div>
        </div>
    )
}

export default Services;