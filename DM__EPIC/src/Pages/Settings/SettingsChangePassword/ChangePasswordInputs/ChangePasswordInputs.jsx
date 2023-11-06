import Vector from "../../../../Assets/Imgs/Vector 5.png";
import "./ChangePasswordInputs.scss";

export default function ChangePasswordInputs() {
    return (
        //inputs
        <div className="sel__inp">
            {/*input one*/}
            <div className="inp__sel__one">
                <input className="pass__text" type="password" placeholder="Old Password"/>
                <div className="img__yes">
                    <div className="border__radius">
                        <img src={Vector} alt="icon" className="img"/>
                    </div>
                </div>
            </div>
            {/*input two*/}
            <div className="inp__sel__two">
                <input className="pass__text" type="password" placeholder="New Password"/>
                <div className="img__yes">
                    <div className="border__radius">
                        <img src={Vector} alt="icon" className="img"/>
                    </div>
                </div>
            </div>
            {/*input three*/}
            <div className="inp__sel__three">
                <input type="password" className="pass__text" placeholder="Repeat Password"/>
            </div>
        </div>
    );
};