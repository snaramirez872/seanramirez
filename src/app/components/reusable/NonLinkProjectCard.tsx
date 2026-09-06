import { NonLinkProjectCardProps } from "../../../lib/types";

export default function NonLinkProjectCards({ techList, title, children }: NonLinkProjectCardProps) {
    return (
        <article className="personal-project-card">
            <h3 className="proj-title">{title}</h3>
            {children}
            <p className="tech-list">{techList}</p>
        </article>
    );
}