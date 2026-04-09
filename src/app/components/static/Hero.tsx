"use client"
import { useState, useEffect } from "react";
import "../css/hero.css";

export default function Hero() {
    const positionWords = ["developer", "engineer", "designer"];
    const [index, setIndex] = useState(0);
    const [fadeProp, setFadeProp] = useState("fade-up");

    useEffect(() => {
        const fadeTimeout = setTimeout(() => {
            setFadeProp("fade-down");
        }, 2500);

        const wordTimeout = setTimeout(() => {
            setIndex((prev) => (prev + 1) % positionWords.length);
            setFadeProp("fade-up");
        }, 3000);

        return () => {
            clearTimeout(fadeTimeout);
            clearTimeout(wordTimeout);
        };
    }, [index]);

    return (
        <div className="hero-section">
            <div className="hero-text">
                <h2>Hello, I&apos;m Sean</h2>
                <h1>
                    I&apos;m a{" "}
                    <span className="positions-wrapper">
                        <span className={`positions ${fadeProp}`}>
                            {positionWords[index]}
                        </span>
                    </span>
                </h1>
            </div>
        </div>
    );
}