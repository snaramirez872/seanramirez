import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import "../css/backbuttonheader.css";

interface BackButtonProps {
    url: string;
}

export default function BackButtonHeader({ url }: BackButtonProps) {
    return (
        <div className="back-button-header">
            <Link href={url}>
                <ChevronLeft />
                Back
            </Link>
        </div>
    );
}