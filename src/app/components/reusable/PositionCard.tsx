import Link from "next/link";
import { PositionCardProps } from "../../../lib/types";

export default function PositionCard({ url, employer, position, range }: PositionCardProps) {
    return (
        <Link className="position-card-container" href={url}>
            <article className="position-card">
                <h3 className="company">{employer}</h3>
                <p className="position">{position}</p>
                <p className="range">{range}</p>
            </article>
        </Link>
    );
}