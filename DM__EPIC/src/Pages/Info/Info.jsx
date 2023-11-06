import InfoBack from "./InfoBack/InfoBack";
import InfoHeader from "./InfoHeader/InfoHeader";
import InfoHashingSpeed from "./InfoHashingSpeed/InfoHashingSpeed";
import InfoSpeedTestCounter from "./InfoSpeedTestCounter/InfoSpeedTestCounter";
import { Link } from "react-router-dom";
import "./Info.scss";

export default function Info() {
    return (
        //info
        <div className="info">
            {/*info back*/}
            <Link to="/" className="href">
                <div className="back">
                    <InfoBack/>
                </div>
            </Link>
            {/*info header*/}
            <div className="header__text">
                <InfoHeader/>
            </div>
            {/*speed div*/}
            <div className="speed__div">
                <div className="speeds">
                    {/*hashing speed*/}
                    <InfoHashingSpeed/>
                    {/*speed test counter*/}
                    <InfoSpeedTestCounter/> 
                </div>
            </div>
        </div>
    );
};