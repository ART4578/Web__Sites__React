import AlgorithmEpicImg from "../../../Assets/Imgs/epic.png";
import "./AlgorithmEpic.scss";

export default function AlgorithmEpic() {
    return (
        //algorithm epic
        <div className="algorithm__epic">
            {/*img*/}
            <div className="algEpic__div">
                <img className="img__div" src={AlgorithmEpicImg} alt="epicIcon"/>
            </div>
            {/*texts*/}
            <div className="algEpic__text">
                <p className="text">Algorithm</p>
                <p className="txt">Epic</p>
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