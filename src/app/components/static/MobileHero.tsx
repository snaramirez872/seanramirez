import Image from "next/image";
import profilepic from "../../../lib/assets/profile.png";
import "../css/mobilehero.css";

export default function MobileHero() {
    return (
        <div className="mobile-hero">
            <Image alt="" src={profilepic} height={100} width={100} />
            <p>Web Developer | Software Engineer</p>
        </div>
    );
}