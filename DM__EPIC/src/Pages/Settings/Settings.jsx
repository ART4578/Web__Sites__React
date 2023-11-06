import SettingsBack from "./SettingsBack/SettingsBack";
import SettingsHeader from "./SettingsHeader/SettingsHeader";
import MobileText from "./MobileText/MobileText";
import SettingsLogoMain from "./SettingsLogoMain/SettingsLogoMain";
import SettingsWalletRb from "./SettingsWalletRb/SettingsWalletRb";
import SettingsWalletSgr from "./SettingsWalletSgr/SettingsWalletSgr"; 
import SettingsWalletEpic from "./SettingsWalletEpic/SettingsWalletEpic";
import SettingsChangePassword from "./SettingsChangePassword/SettingsChangePassword";
import "./Settings.scss";

export default function Settings() {
    return (
        //settings
        <div className="settings">
            {/*back*/}
            <div className="back">
                <SettingsBack/>
            </div>
            {/*header*/}
            <div className="header__text">
                <SettingsHeader/>
            </div>
            {/*mobile text*/}
            <div className="mobile__text__div">
                <MobileText/>
            </div>
            {/*logo main*/}
            <div className="logo__main">
                <div className="logo__div">
                    <SettingsLogoMain/>
                </div>
            </div>
            {/*settings select*/}
            <div className="settings__info">
                <div className="settings__details">
                    <div className="wallets__rb__sgr">
                    {/*wallet rb*/}
                    <SettingsWalletRb/>
                    {/*wallet sgr*/}
                    <SettingsWalletSgr/> 
                    </div>
                    <div className="walletEpic__changePassword">     
                    {/*wallet epic*/}
                    <SettingsWalletEpic/> 
                    {/*change password*/}
                    <SettingsChangePassword/>
                    </div>
                </div>
            </div>
        </div>
    );
};