import Link from "next/link";
import { PersonalProjectCardProps } from "../../../../lib/types";
import "../../components/css/personalprojectcards.css";

export default function RLMProjCard({ url, techList, title, children }: PersonalProjectCardProps) {
    return (
        <Link 
            href={url} 
            rel="noreferrer"
            target="_blank"
            className="personal-project-card"
        >
            <h3 className="proj-title">{title}</h3>
            {children}
            <p className="description">This was accomplished while working for <span className="company-name">Relevant Local Media</span> as a Web Developer.</p>
            <p className="tech-list">{techList}</p>
        </Link>
    );
}