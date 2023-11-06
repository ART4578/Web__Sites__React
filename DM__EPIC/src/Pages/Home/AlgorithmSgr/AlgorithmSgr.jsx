import AlgorithmSgrImg from "../../../Assets/Imgs/sgr.png";
import "./AlgorithmSgr.scss";

export default function AlgorithmSgr() {
    return (
        //algorithm sgr
        <div className="algorithm__sgr">
            {/*img*/}
            <div className="algSgr__div">
                <img className="img__div" src={AlgorithmSgrImg} alt="sgrIcon"/>
            </div>
            {/*texts*/}
            <div className="algSgr__text">
                <p className="text">Algorithm</p>
                <p className="txt">SGR</p>
            </div>
            {/*show button*/}
            <div className="show__btn__submit">
                <div className="show__sub">
                    <div className="sub__show"></div>
                </div>
            </div>
        </div>
    );
};