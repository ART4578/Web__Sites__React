import InfoSpeedTimer from "./InfoSpeedTimer/InfoSpeedTimer";
import InfoSpeedCounter from "./InfoSpeedCounter/InfoSpeedCounter";
import "./InfoSpeedTestCounter.scss";

export default function InfoSpeedTestCounter() {
    return (
        //info speed test counter
        <div className="info__speed__test__counter">
            {/*speed timer*/}
            <InfoSpeedTimer/>
            {/*speed counter*/}
            <InfoSpeedCounter/>  
        </div>
    );
};