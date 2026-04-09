import { NonLinkProjectCardProps } from "../../../../lib/types";
import "../css/personalprojectcards.css";

export default function NonLinkProjectCards({ techList, title, children }: NonLinkProjectCardProps) {
    return (
        <div className="personal-project-card">
            <h3 className="proj-title">{title}</h3>
            {children}
            <p className="tech-list">{techList}</p>
        </div>
    );
}