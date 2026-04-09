import Link from "next/link";
import Image from "next/image";
import linkedin from "../../../lib/assets/icons/In-White-96@2x.png";
import envelope from "../../../lib/assets/icons/envelope.svg";
import "../css/icons.css";

export default function Icons() {
    let emailLink = "mailto:sean.ramirez.dev@gmail.com";
    let linkedInLink = "https://www.linkedin.com/in/seanaramirez";

    return (
        <div className="icons-container">
            <Link href={linkedInLink} rel="noreferrer" target="_blank" title="in/seanaramirez">
                <Image className="icon-img" src={linkedin} alt="" height="40" width="40" /> 
            </Link>
            <Link href={emailLink} rel="noreferrer" target="_blank" title="sean.ramirez.dev@gmail.com">
                <Image className="icon-img" src={envelope} alt="" height="40" width="40" /> 
            </Link>
        </div>
    );
}