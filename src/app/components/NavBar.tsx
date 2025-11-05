import Link from "next/link";
import './css/navbar.css';
export function NavBar() {
    const resume = "https://drive.google.com/file/d/1iIIlRDXKuEJkgeD5tOq1edP_uWvo_ug4/view?usp=sharing";
    return (
        <nav className='navbar'>
            <div className='nav-container'>
                <Link href="/" className='logo'>Sean A Ramirez</Link>
                <div className='links'>
                    <Link href='/' className='nav-link'>About Me</Link>
                    <Link href='/projects' className='nav-link'>Projects</Link>
                    <Link href={resume} className='resume-link' target='_blank' rel='noreferrer'>Resume</Link>
                </div>
            </div>
        </nav>
    );
}
