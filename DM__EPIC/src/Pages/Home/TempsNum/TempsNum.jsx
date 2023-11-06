import TempNumImg from "../../../Assets/Imgs/num__icon.png";
import "./TempsNum.scss";

export default function TempsNum() {
    return (
        //temps num
        <div className="temps__num">
            <div className="icon__div">
                <img className="img__div" src={TempNumImg} alt="numIcon"/>
            </div>
            <div className="text__div">
                <p className="txt">20 <span className="span">num</span></p>
            </div>
        </div>
    );
};