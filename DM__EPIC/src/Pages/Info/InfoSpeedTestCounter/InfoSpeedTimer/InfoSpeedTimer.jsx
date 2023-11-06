import InfoSpeedTimerImg from "../../../../Assets/Imgs/speed__counter.png";
import "./InfoSpeedTimer.scss";

export default function InfoSpeedTimer() {
    return (
        //info speed timer
        <div className="speed__time">
            <img src={InfoSpeedTimerImg} alt="speedTimer" className="img"/>
        </div>
    );
};