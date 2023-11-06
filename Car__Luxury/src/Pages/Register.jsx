import { Link } from "react-router-dom";
import CommonSection from "../UI/CommonSection";
import Arrows from "../UI/Arrows";
import "../Style/Login__and__Register.scss";

export default function Register() {
    return (
        <div className="auth">
            {/*arrows*/}
            <Arrows arrowLeftRouter="/about" arrowRightRouter="/login"/>
            <CommonSection title="Register"/>
            <div className="register__block">
                <form>
                    <input required type="text" placeholder="username" name="username"/>
                    <input required type="email" placeholder="email" name="email"/>
                    <input required type="password" placeholder="password" name="password"/>
                    <button>Register</button>
                    <span>
                        Do you have an account? <Link to="/login" className="link__login">Login</Link>
                    </span>
                </form>
            </div>
        </div>
    );
};