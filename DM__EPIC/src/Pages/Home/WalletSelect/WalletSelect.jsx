import "./WalletSelect.scss";

export default function WalletSelect() {
    return (
        //wallet select
        <>
        {/*header*/}
        <h1 className="header">Wallet</h1>
        {/*wallet inputs button*/}
        <div className="select__btn">
            {/*wallet*/}
            <div className="select__wall">
                <select name="wallet" id="wallet" className="wallet">
                    <option value="Wallet">Wallet</option>
                </select>
            </div>
            {/*root*/}
            <div className="select__root">
                <input className="inp" type="text" placeholder="Root"/>
            </div>
            {/*password*/}
            <div className="select__password">
                <input className="inp" type="password" placeholder="............."/>
            </div>
            {/*button*/}
            <div className="select__button">
                <button className="button">Save</button>
            </div>
        </div>
        </>
    );
};