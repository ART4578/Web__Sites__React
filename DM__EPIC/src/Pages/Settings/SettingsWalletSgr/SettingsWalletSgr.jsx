import WalletSgrTextBtn from "./WalletSgrTextBtn/WalletSgrTextBtn";
import WalletSgrInputs from "./WalletSgrInputs/WalletSgrInputs";
import WalletSgrButton from "./WalletSgrButton/WalletSgrButton";
import "./SettingsWalletSgr.scss";

export default function SettingsWalletSgr() {
    return (
        //wallet sgr
        <div className="wallet__sgr">
            {/*text btn*/}
            <WalletSgrTextBtn/>
            {/*inputs*/}
            <WalletSgrInputs/> 
            {/*btn submit*/}
            <WalletSgrButton/>
        </div>
    );
};