import Link from "next/link";
import { ButtonProps } from "../../lib/types";

export function Button({ name, href, children }: ButtonProps) {
    return (
        <>
            <Link 
                className='link-buttons'
                href={href}
                target='_blank'
                rel='noreferrer'
            >
                {children}
                {name}
            </Link>
        </>
    );
}
