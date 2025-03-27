import Link from "next/link";
import './css/navbar.css';
export function MobileNavBar() {
    return (
        <nav className='navbar'>
            <div className='nav-container'>
                <Link href="/" className='logo'>Sean A Ramirez</Link>
            </div>
        </nav>
    );
}
