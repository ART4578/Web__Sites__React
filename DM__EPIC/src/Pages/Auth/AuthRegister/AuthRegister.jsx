import AuthHeader from "./AuthHeader/AuthHeader";
import AuthInputs from "./AuthInputs/AuthInputs";
import AuthTextBtn from "./AuthTextBtn/AuthTextBtn";
import AuthBtnSubmit from "./AuthBtnSubmit/AuthBtnSubmit";
import "./AuthRegister.scss";

export default function AuthRegister() {
    return (
        <div className="auth__logIn">
            {/*auth logIn*/}
            <div className="logIn__inputs">
                {/*header*/}
                <AuthHeader/>              
                {/*inputs*/}
                <AuthInputs/>
                {/*text btn*/}
                <AuthTextBtn/>    
                {/*btn submit*/}
                <AuthBtnSubmit/>
            </div>
        </div>
    );
};