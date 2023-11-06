import WalletRbTextBtn from "./WalletRbTextBtn/WalletRbTextBtn";
import WalletRbInputs from "./WalletRbInputs/WalletRbInputs";
import WalletRbButton from "./WalletRbButton/WalletRbButton";
import "./SettingsWalletRb.scss";

export default function SettingsWalletRb() {
    return (
        //wallet rb
        <div className="wallet__rb">
            {/*text btn*/}
            <WalletRbTextBtn/>
            {/*inputs*/}
            <WalletRbInputs/> 
            {/*btn submit*/}
            <WalletRbButton/>
        </div>
    );
};