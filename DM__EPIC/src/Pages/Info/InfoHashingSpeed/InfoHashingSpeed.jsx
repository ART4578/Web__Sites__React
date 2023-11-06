import HashingSpeedImg from "../../../Assets/Imgs/hashing__speed.png";
import "./InfoHashingSpeed.scss";

export default function InfoHashingSpeed() {
    return (
        //hashing speed
        <div className="hashing__speed">
            <img src={HashingSpeedImg} alt="hashingSpeed" className="img"/>
        </div>
    );
};