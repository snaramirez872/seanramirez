import Image from "next/image";
import Link from "next/link";
import { MobileButtonProps } from "../../../lib/types";
import "../css/mobilemenu.css";

export default function MobileButtons({ linkText, url, image_url }: MobileButtonProps) {
    return (
        <Link className="mobile-button" href={url}>
            <Image alt="" src={image_url} height={40} width={40} />
            <p>{linkText}</p>
        </Link>
    );
}