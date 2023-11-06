import WalletEpicTexBtn from "./WalletEpicTextBtn/WalletEpicTextBtn";
import WalletEpicInputs from "./WalletEpicInputs/WalletEpicInputs";
import WalletEpicButton from "./WalletEpicButton/WalletEpicButton";
import "./SettingsWalletEpic.scss";

export default function SettingsWalletEpic() {
    return (
        //wallet epic
        <div className="wallet__epic">
            {/*text btn*/}
            <WalletEpicTexBtn/>
            {/*inputs*/}
            <WalletEpicInputs/> 
            {/*btn submit*/}
            <WalletEpicButton/>
        </div>
    );
};