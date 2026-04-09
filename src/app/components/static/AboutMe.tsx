import AboutText from "./AboutText";
import Image from "next/image";
import profile from "../../../lib/assets/profile.png";
import Icons from "./Icons";
import "../css/aboutme.css";

export default function AboutMe() {
    return (
        <div className="about-container">
            <div className="about-card-header">
                <Image className="profile-pic" src={profile} alt="" height="150" width="150" />
                <Icons />
            </div>
            <AboutText />
        </div>
    );
}