import Link from "next/link";
import { PersonalProjectCardProps } from "../../../../lib/types";
import "../css/personalprojectcards.css";

export default function PersonalProjectCards({ url, techList, title, children }: PersonalProjectCardProps) {
    return (
        <Link 
            href={url} 
            rel="noreferrer"
            target="_blank"
            className="personal-project-card"
        >
            <h3 className="proj-title">{title}</h3>
            {children}
            <p className="tech-list">{techList}</p>
        </Link>
    );
}