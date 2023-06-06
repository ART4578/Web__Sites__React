import Wave from '../../../public/images/wave.png';
import Instagram from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import GitHub from '@iconscout/react-unicons/icons/uil-github';
import Mouse from '../../../public/images/mouse.png';
import { Link } from 'react-scroll';
import './Footer.css';

function Footer() {
    return (
        <div className="footer" id="Footer">
            <img src={Wave} alt="" style={{width: "100%"}}/>
            <div className="f-content">
                <span>arturpetrosanait@gmail.com</span>
                <div className="f-icons">
                    <Instagram color="white" size="3rem"/>
                    <Facebook color="white" size="3rem"/>
                    <GitHub color="white" size="3rem"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;