import MobileButtons from "../reusable/MobileButton";
import projects from "../../../lib/assets/icons/code-block-regular-24.png";
import email from "../../../lib/assets/icons/envelope-regular-24.png";
import resume from "../../../lib/assets/icons/file-regular-24.png";
import github from "../../../lib/assets/icons/github-mark.png";
import linkedin from "../../../lib/assets/icons/InBug-Black.png";
import "../css/mobilemenu.css";

export default function MobileMenu() {
    let resumeLink = "https://drive.google.com/file/d/1ojtPZOia6mzuX6TBQL8Jxw8YcU1qU8xs/view?usp=sharing";
    let githubLink = "https://www.github.com/snaramirez872";
    let linkedInLink = "https://www.linkedin.com/in/seanaramirez";
    let emailLink = "mailto:sean.ramirez.dev@gmail.com";
    return (
        <div className="mobile-menu-container">
            <MobileButtons linkText="Projects" url="/projects" image_url={projects} />
            <MobileButtons linkText="Resume" url={resumeLink} image_url={resume} />
            <MobileButtons linkText="Email" url={emailLink} image_url={email} />
            <MobileButtons linkText="LinkedIn" url={linkedInLink} image_url={linkedin} />
            <MobileButtons linkText="GitHub" url={githubLink} image_url={github} />
        </div>
    );
}