import UserImg from "../../../assets/user.jpg";
import "./Profile.css";

export default function Profile() {
    return (
        <div className="profileText">
            <div className="imgBx">
               <img src={UserImg} alt="user-img"/>     
            </div>
            <h2>Artur Petrosyan<br/><span>Web Developer</span></h2>
        </div>
    );
};