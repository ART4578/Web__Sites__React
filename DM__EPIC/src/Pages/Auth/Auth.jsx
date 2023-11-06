import AuthDiv from "./AuthDiv/AuthDiv";
import AuthLogo from "./AuthLogo/AuthLogo";
import AuthRegister from "./AuthRegister/AuthRegister";
import AuthMobile from "./AuthMobile/AuthMobile";
import "./Auth.scss";

export default function Auth() {
    return (
        //auth 
        <div className="auth__bg">
            {/*auth div*/}
            <AuthDiv/>
             {/*auth logo*/}
            <AuthLogo/>
             {/*auth register*/}
            <AuthRegister/>
             {/*auth mobile*/}
            <AuthMobile/>
        </div>
    );
};