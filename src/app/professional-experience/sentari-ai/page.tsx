import Link from "next/link";
import SentariGrid from "./components/SentariGrid";

export default function SentariAIPage() {
    return (
        <section className="experience-page">
            <section className="experience-main-content">
                <h1>Sentari AI</h1>
                <h2 className="first-subheader">Job Title: Software Development Engineer (SDE) Intern</h2>
                <p className="first-copy">
                    This was accomplished while engaged in a contract of employment 
                    with <Link href="https://www.withsentari.com" className="company-name">Sentari AI</Link>.
                </p>
                <section className="experience-cards-container">
                    <section className="professional-experience">
                        <SentariGrid />
                    </section>
                </section>
            </section>
        </section>
    );
}