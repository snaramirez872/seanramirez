import Link from "next/link";
import './css/backbutton.css';

export function BackButton() {
    return (
        <div className='back-button'>
            <Link href='/'>Back</Link>
        </div>
    );
}
