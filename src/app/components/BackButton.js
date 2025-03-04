import Link from "next/link";

export function BackButton() {
    return (
        <div className='back-button'>
            <Link href='/'>Back</Link>
        </div>
    );
}
