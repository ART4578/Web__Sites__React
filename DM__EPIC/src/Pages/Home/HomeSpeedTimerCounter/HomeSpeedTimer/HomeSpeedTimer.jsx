import SpeedCounterImg from "../../../../Assets/Imgs/speed__counter.png";
import "./HomeSpeedTimer.scss";

export default function HomeSpeedTimer() {
    return (
        //speed timer
        <div className="speed__time">
            <img src={SpeedCounterImg} alt="speedCounter" className="img"/>
        </div>
    );
};