import { Link } from "react-router-dom";
import CommonSection from "../UI/CommonSection";
import Arrows from "../UI/Arrows";
import "../Style/Login__and__Register.scss";

export default function Login() {
    return (
        <div className="auth">
             <Arrows arrowLeftRouter="/register" arrowRightRouter="/contact"/>
            <CommonSection title="Login"/>
            <div className="login__block">
                <form>
                    <input required type="text" placeholder="username" name="username"/>
                    <input required type="password" placeholder="password" name="password"/>
                    <button>Login</button>
                    <span>
                        Don't you have an account? <Link to="/register" className="link__register">Register</Link>
                    </span>
                </form>
            </div>
        </div>
    );
};