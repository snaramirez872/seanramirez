"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import './css/navbar.css';

export function NavBar() {
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const resume = "https://drive.google.com/file/d/1xwvu3BgdvfT3kgcLGG9Bv4cJyHtbcuPM/view?usp=sharing";

    function toggleMobileMenu() {
        setIsMobileMenu(!isMobileMenu);
    }

    return (
        <nav className='navbar'>
            <div className='nav-container'>
                <Link href="/" className='logo'>Sean A Ramirez</Link>

                {/* Desktop */}
                <div className='links'>
                    <Link href='/' className='nav-link'>Home</Link>
                    <Link href='/projects' className='nav-link'>Projects</Link>
                    <Link href={resume} className='resume-link' target='_blank' rel='noreferrer'>Resume</Link>
                </div>

                {/* Mobile Menu Icon */}
                <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                    {isMobileMenu ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenu && (
                <div className={`mobile-links ${isMobileMenu ? "open" : ""}`}>
                    <Link href='/' className='nav-link' onClick={toggleMobileMenu}>Home</Link>
                    <Link href='/projects' className='nav-link' onClick={toggleMobileMenu}>Projects</Link>
                </div>
            )}
        </nav>
    );
}
