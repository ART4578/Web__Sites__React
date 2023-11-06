import HomeSpeedTimer from "./HomeSpeedTimer/HomeSpeedTimer";
import HomeSpeedCounter from "./HomeSpeedCounter/HomeSpeedCounter";
import "./HomeSpeedTimerCounter.scss";

export default function HomeSpeedTimerCounter() {
    return (
        //speed timer, speed counter
        <div className="speed">
            {/*speed timer*/}
            <HomeSpeedTimer/> 
            {/*speed counter*/} 
            <HomeSpeedCounter/> 
        </div>
    );
};