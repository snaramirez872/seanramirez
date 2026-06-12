import Link from "next/link";
import HomeButtons from "../reusable/HomeButtons";

export default function HomeMenu() {
    let resumeLink = "https://drive.google.com/file/d/1eFhg4kfwjCCJ00RFjMuMQly2K8ttjDi0/view?usp=sharing";
    let githubLink = "https://www.github.com/snaramirez872";
    return (
        <nav className="HomeMenu">
            <HomeButtons linkText="Experience" url="/projects" />
            <Link 
                className="home-link" 
                rel="noreferrer" 
                target="_blank"
                href={resumeLink}
            >
                <div>
                    <p>Resume</p>
                </div>
            </Link>
            <Link 
                className="home-link" 
                rel="noreferrer" 
                target="_blank"
                href={githubLink}
            >
                <div>
                    <p>GitHub</p>
                </div>
            </Link>
            
        </nav>
    );
}