"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import './css/navbar.css';

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const resume = "https://drive.google.com/file/d/1rvuknsMQtivyeK2sU8rWoqd5UlAbigCN/view?usp=sharing";

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
                <div className="mobile-menu-icon" onClick={() => setIsOpen(true)}>
                    <Menu size={32} />
                </div>
            </div>

            {/* Overlay */}
            <div 
                className={`overlay ${isOpen ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile Drawer */}
            <div className={`mobile-drawer ${isOpen ? "open" : ""}`}>
                <div className="drawer-header">
                    <X size={32} onClick={() => setIsOpen(false)} />
                </div>

                <Link href="/" className="mobile-link" onClick={() => setIsOpen(false)}>Home</Link>
                <Link href="/projects" className="mobile-link" onClick={() => setIsOpen(false)}>Projects</Link>
                <Link 
                    href={resume} 
                    className="mobile-resume-link" 
                    target="_blank" 
                    rel="noreferrer"
                    onClick={() => setIsOpen(false)}
                >
                    Resume
                </Link>
            </div>
        </nav>
    );
}