import "./HomeSpeedCounter.scss";

export default function HomeSpeedCounter() {
    return (
        //speed counter
        <div className="speed__counter">
            {/*header*/}
            <h1 className="head">Counter</h1>
            {/*counter*/}
            <div className="counter__time__div">
                <div className="time__one">0</div>
                <div className="time">5</div>
                <div className="time__points">:</div>
                <div className="time">0</div>
                <div className="time">3</div>
                <div className="time__points">:</div>
                <div className="time">5</div>
                <div className="time">1</div>
                <div className="time__points">:</div>
                <div className="time">2</div>
                <div className="time">4</div>
            </div>
        </div>
    );
};