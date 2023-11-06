import Profile from "./Profile/Profile";
import ProLanguage from "./ProLanguage/ProLanguage";
import Interest from "./Interest/Interest";
import "./RightSide.css";

export default function RightSide() {
    return (
        <div className="right-side">
            <Profile/>
            <ProLanguage/>
            <Interest/>
        </div>
    );
};