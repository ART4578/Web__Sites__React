import TempImg from "../../../Assets/Imgs/temp__icon.png";
import "./TempsTemp.scss";

export default function TempsTemp() {
    return (
        //temps temp
        <div className="temps__temp">
            <div className="icon__div">
                <img className="img__div" src={TempImg} alt="tempIcon"/>
            </div>
            <div className="text__div">
                <p className="txt">40 <span className="span">temp</span></p>
            </div>
        </div>
    );
};