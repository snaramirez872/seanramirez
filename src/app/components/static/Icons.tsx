import Link from "next/link";
import Image from "next/image";
import github from "../../../lib/assets/icons/github-mark-white.png";
import linkedin from "../../../lib/assets/icons/In-White-96@2x.png";
import envelope from "../../../lib/assets/icons/envelope.svg";

export default function Icons() {
    let emailLink = "mailto:sean.ramirez.dev@gmail.com";
    let linkedInLink = "https://www.linkedin.com/in/seanaramirez";
    let githubLink = "https://www.github.com/snaramirez872";

    return (
        <section className="icons-container">
            <Link href={githubLink} rel="noreferrer" target="_blank" title="github.com/snaramirez872">
                <Image className="icon-img" src={github} alt="" height="40" width="40" /> 
            </Link>
            <Link href={linkedInLink} rel="noreferrer" target="_blank" title="in/seanaramirez">
                <Image className="icon-img" src={linkedin} alt="" height="40" width="40" /> 
            </Link>
            <Link href={emailLink} rel="noreferrer" target="_blank" title="sean.ramirez.dev@gmail.com">
                <Image className="icon-img" src={envelope} alt="" height="40" width="40" /> 
            </Link>
        </section>
    );
}