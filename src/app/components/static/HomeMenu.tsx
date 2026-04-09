import Link from "next/link";
import HomeButtons from "../reusable/HomeButtons";

export default function HomeMenu() {
    let resumeLink = "https://drive.google.com/file/d/1ojtPZOia6mzuX6TBQL8Jxw8YcU1qU8xs/view?usp=sharing";
    let githubLink = "https://www.github.com/snaramirez872";
    return (
        <div className="HomeMenu">
            <HomeButtons linkText="Projects" url="/projects" />
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
            
        </div>
    );
}