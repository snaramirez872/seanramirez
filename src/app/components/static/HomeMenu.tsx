import Link from "next/link";
import HomeButtons from "../reusable/HomeButtons";

export default function HomeMenu() {
    let resumeLink = "https://drive.google.com/file/d/1hN7Ghd2LTL5Qh5kjb8SzYxiTrbHS_Cuh/view?usp=sharing";
    let githubLink = "https://www.github.com/snaramirez872";
    return (
        <nav className="HomeMenu">
            <HomeButtons linkText="Experience" url="/experience" />
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