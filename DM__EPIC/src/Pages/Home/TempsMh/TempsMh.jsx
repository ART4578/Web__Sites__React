import TempMhImg from "../../../Assets/Imgs/mh__icon.png";
import "./TempsMh.scss";

export default function TempsMh() {
    return (
        //temps mh
        <div className="temps__mh">
            <div className="icon__div">
                <img src={TempMhImg} alt="mhIcon" className="img__div"/>
            </div>
            <div className="text__div">
                <p className="txt">800 <span className="span">mh</span></p>
            </div>
        </div>
    );
};