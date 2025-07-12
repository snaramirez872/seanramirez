import Link from "next/link";
import './css/navbar.css';
export function NavBar() {
    const resumeLink = process.env.NEXT_PUBLIC_RESUME_LINK;
    return (
        <nav className='navbar'>
            <div className='nav-container'>
                <Link href="/" className='logo'>Sean A Ramirez</Link>
                <div className='links'>
                    <Link href='/' className='nav-link'>About Me</Link>
                    <Link href='/projects' className='nav-link'>Projects</Link>
                    <Link href={resumeLink} className='resume-link' target='_blank' rel='noreferrer'>Resume</Link>
                </div>
            </div>
        </nav>
    );
}
