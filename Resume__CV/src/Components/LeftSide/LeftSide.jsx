import Profile from "./Profile/Profile";
import Contact from "./Contact/Contact";
import Language from "./Language/Language";
import "./LeftSide.css";

export default function LeftSide() {
    return (
        <div className="left-side">
            <Profile/>
            <Contact/>
            <Language/>
        </div>
    );
};