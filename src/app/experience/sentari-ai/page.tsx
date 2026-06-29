import Link from "next/link";
import NonLinkProjectCards from "../components/reusable/NonLinkProjectCard";
import PersonalProjectCards from "../components/reusable/PersonalProjectCards";
import BackButtonHeader from "../components/reusable/BackButtonHeader";
import "../projectspage.css";

export default function SentariAIPage() {
    return (
        <section className="projectspage">
            <section className="projectspage-main-content">
                <BackButtonHeader url="/projects" />
                <h1>Sentari AI</h1>
                <h2 className="first-subheader">Job Title: Software Development Engineer (SDE) Intern</h2>
                <p className="first-copy">This was accomplished while engaged in a contract of employment with <Link href="https://www.withsentari.com" className="company-name">Sentari AI</Link> as a Software Development Engineer Intern.</p>
                <section className="projects-cards-container">
                    <section className="professional-projects">
                        <section className="personal-grid">
                            <PersonalProjectCards
                                url="https://journal.withsentari.com"
                                title="Sentari AI Journal"
                                techList="Next.js, TypeScript, Tailwind CSS, Python, FastAPI, Supabase"
                            >
                                <p className="description">An online voice journaling application. Assisted the web team in the development of the History and Insights pages.</p>
                            </PersonalProjectCards>
                            <NonLinkProjectCards
                                title="Sentari AI Internal Analytics Dashboard"
                                techList="Next.js, TypeScript, Tailwind CSS, Python, FastAPI, Supabase"
                            >
                                <p className="description">Led the development of an internal tool that visualizes various various metrics to help scale the app and make more informed business decisions.</p>
                            </NonLinkProjectCards>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    );
}