import Link from "next/link";
import { HomeButtonProps } from "../../../lib/types";
import "../css/homebutton.css";

export default function HomeButtons({ linkText, url }: HomeButtonProps) {
    return (
        <Link className="home-link" href={url}>
            <div>
                <p>{linkText}</p>
            </div>
        </Link>
    );
}