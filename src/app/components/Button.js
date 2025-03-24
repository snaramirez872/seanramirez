import Link from "next/link";

export function Button({ name, href, children = null }) {
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
