import Link from "next/link";
import { PositionCardProps } from "../../../../lib/types";
import "../css/positioncard.css";

export default function PositionCard({ url, employer, position }: PositionCardProps) {
    return (
        <Link className="position-card-container" href={url}>
            <div className="position-card">
                <h3 className="company">{employer}</h3>
                <p className="position">{position}</p>
            </div>
        </Link>
    );
}