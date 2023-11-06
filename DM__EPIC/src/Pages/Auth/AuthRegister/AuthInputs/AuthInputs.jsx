import "./AuthInputs.scss";

export default function AuthInputs() {
    return (
        //inputs
        <div className="inputs">
            <div className="logIn__input">
                {/*logIn header*/}
                <div className="logIn__txt">
                    <h1 className="header">Log in</h1>
                </div>
                {/*logIn input*/}
                <div className="logIn__inp">
                    <input className="inp__name" type="text" name="text" placeholder="Admin"/>
                </div>
            </div>
            <div className="password__input">
                {/*password header*/}
                <div className="password__txt">
                    <h1 className="header">Password</h1>
                </div>
                {/*password input*/}
                <div className="password__inp">
                    <input className="inp__password" type="password" name="password" placeholder=".............."/>
                </div>
            </div>
        </div>
    );
};