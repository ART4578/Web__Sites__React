import "./WalletRbInputs.scss";

export default function WalletRbInputs() {
    return (
        //inputs
        <div className="inputs__select">
            <div className="inps__divs__one">
                <div className="divs__inps__one">
                    <h1 className="header__text">Wallet</h1>
                </div>
                <div className="divs__inps__two">
                    <select name="wallet__rb__sel" id="wallet__rb__sel" className="wallet__rb__sel">
                        <option value="Metamask">Metamask</option>
                    </select>
                </div>
            </div>
            <div className="inps__divs__two">
                <div className="divs__inps__three">
                    <h1 className="header__text">User</h1>
                </div>
                <div className="divs__inps__for">
                    <h1 className="header__text">Mit</h1>
                </div>
            </div>
            <div className="inps__divs__three">
                <div className="divs__inps__five">
                    <h1 className="header__text">Password</h1>
                </div>
                <div className="divs__inps__six">
                    <h1 className="header__text">Sky</h1>
                </div>
            </div>
        </div>
    );
};