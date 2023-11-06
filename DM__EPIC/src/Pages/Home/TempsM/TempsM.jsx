import TempMImg from "../../../Assets/Imgs/m__icon.png";
import "./TempsM.scss";

export default function TempsM() {
    return (
        //temps m
        <div className="temps__m">
            <div className="icon__div">
                <img className="img__div" src={TempMImg} alt="mIcon"/>
            </div>
            <div className="text__div">
                <p className="txt">32 <span className="span">m</span></p>
            </div>
        </div>
    );
};