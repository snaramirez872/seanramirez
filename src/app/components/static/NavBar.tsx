"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const resumeLink = "https://drive.google.com/file/d/1ibh-dYm28lZeEmhsd8bVLtcaTTZFrH4b/view?usp=drive_link"

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
        
            <nav className="nav-bar">
                <div className="logo">
                    <Link href="/">
                        <p>Sean Ramirez</p>
                    </Link>
                </div>
                <div className="nav-links">
                    {/* Desktop Nav */}
                    <div className="actual-links">
                        <Link href="/professional-experience">Professional Experience</Link>
                        <Link href="/personal-projects">Personal Projects</Link>
                    </div>

                    <button
                        className="menu-button"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open navigation menu"
                    >
                        <Menu size={28} />
                    </button>

                    <Link 
                        href={resumeLink} 
                        className="resume-btn"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Resume
                    </Link>
                </div>
            </nav>

            {/* Overlay */}
            {menuOpen && (
                <div 
                    className="menu-overlay" 
                    onClick={closeMenu}
                />
            )}

            {/* Side Menu */}
            <aside className={`side-menu ${menuOpen ? "open" : ""}`}>
                <button
                    className="close-menu"
                    onClick={closeMenu}
                    aria-label="Close navigation menu"
                >
                    <X size={28} />
                </button>

                <div className="mobile-links">
                    <Link
                        href="/professional-experience"
                        onClick={closeMenu}
                        className="side-links"
                    >
                        Professional Experience
                    </Link>
                    <Link
                        href="/personal-projects"
                        onClick={closeMenu}
                        className="side-links"
                    >
                        Personal Projects
                    </Link>
                    <Link
                        href={resumeLink}
                        onClick={closeMenu}
                        className="mobile-resume"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Resume
                    </Link>
                </div>
            </aside>
        </>
    );
}