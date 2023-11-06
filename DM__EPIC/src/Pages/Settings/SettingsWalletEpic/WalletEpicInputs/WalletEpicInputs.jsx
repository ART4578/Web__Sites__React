import "./WalletEpicInputs.scss";

export default function WalletEpicInputs() {
    return (
        //inputs
        <div className="select__inputs">
            <div className="inps__divs__one">
                <div className="divs__inps__one">
                    <h1 className="header__text">Moscow</h1>
                </div>
                <div className="divs__inps__two">
                    <select name="wallet__epic__sel" id="wallet__epic__sel" className="wallet__epic__sel">
                        <option value="Metamask">Metamask</option>
                    </select>
               </div>
            </div>
            <div className="inps__divs__two">
                <div className="divs__inps__three">
                    <h1 className="header__text">Russia</h1>
                </div>
                <div className="divs__inps__for">
                    <h1 className="header__text">Mit</h1>
                </div>
            </div>
            <div className="inps__divs__three">
                <div className="divs__inps__five">
                    <h1 className="header__text">Wallet</h1>
                </div>
                <div className="divs__inps__six">
                    <h1 className="header__text">Sky</h1>
                </div>
            </div>
        </div>
    );
};