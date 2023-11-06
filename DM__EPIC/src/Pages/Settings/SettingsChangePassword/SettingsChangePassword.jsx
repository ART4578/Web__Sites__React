import ChangePasswordText from "./ChangePasswordText/ChangePasswordText";
import ChangePasswordInputs from "./ChangePasswordInputs/ChangePasswordInputs";
import ChangePasswordButton from "./ChangePasswordButton/ChangePasswordButton";
import "./SettingsChangePassword.scss";

export default function SettingsChangePassword() {
    return (
        //change password
        <div className="change__password">
            {/*text btn*/}
            <ChangePasswordText/>
            {/*inputs*/}
            <ChangePasswordInputs/>
            {/*btn submit*/}
            <ChangePasswordButton/>
        </div>
    );
};