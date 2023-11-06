import AlgorithmRgImg from "../../../Assets/Imgs/rb.png";
import "./AlgorithmRg.scss";
export default function AlgorithmRg() {
    return (
        //algorithm rg
        <div className="algorithm__rg">
            {/*img*/}
            <div className="algRg__div">
                <img className="img__div" src={AlgorithmRgImg} alt="rbIcon"/>
            </div>
            {/*texts*/}
            <div className="algRg__text">
                <p className="text">Algorithm</p>
                <p className="txt">RG</p>
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