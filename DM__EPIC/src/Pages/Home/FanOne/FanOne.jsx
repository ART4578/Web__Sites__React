import FanOneImg from "../../../Assets/Imgs/flower__one.png";
import "./FanOne.scss";

export default function FanOne() {
    return (
        //fan one
        <div className="fan__one">
            <div className="fan__one__div">
                <img className="fan__one__imgDiv" src={FanOneImg} alt="flowerOne"/>
            </div>
            <div className="fan__one__text">
                <p className="txt">Fan 1</p>
                <p className="txt__point">59</p>
            </div>
        </div>
    );
};