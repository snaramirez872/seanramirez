import Link from "next/link";
import RLMWebsitesGrid from "./components/RLMWebsitesGrid";

export default function RLMPage() {
    return (
        <section className="experience-page">
           <section className="experience-main-content">
                <h1>Relevant Local Media</h1>
                <h2 className="first-subheader">Job Title: Web Developer</h2>
                <p className="first-copy">These websites were designed while under the employment of <Link href="https://www.relevantlocalmedia.com" className="company-name">Relevant Local Media</Link>.</p>
                <section className="experience-cards-container">
                    <section className="professional-experience">
                        <RLMWebsitesGrid />
                    </section>
                </section>
           </section>
        </section>
    );
}