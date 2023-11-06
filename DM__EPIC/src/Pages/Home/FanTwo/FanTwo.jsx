import FanTwoImg from "../../../Assets/Imgs/flower__two.png";
import "./FanTwo.scss";

export default function FanTwo() {
    return (
        //fan two
        <div className="fan__two">
            <div className="fan__two__div">
                <img className="fan__two__imgDiv" src={FanTwoImg} alt="flowerTwo"/>
            </div>
            <div className="fan__two__text">
                <p className="txt">Fan 2</p>
                <p className="txt__point">90</p>   
            </div>
        </div>
    );
};