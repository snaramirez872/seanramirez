import NonLinkProjectCards from "../components/reusable/NonLinkProjectCard";
import PersonalProjectCards from "../components/reusable/PersonalProjectCards";
import BackButtonHeader from "../components/reusable/BackButtonHeader";
import "../projectspage.css";

export default function SentariAIPage() {
    return (
        <div className="projectspage">
            <div className="projectspage-main-content">
                <BackButtonHeader url="/projects" />
                <h1>Sentari AI</h1>
                <h2 className="first-subheader">Software Development Engineer (SDE) Intern</h2>
                <div className="projects-cards-container">
                    <div className="professional-projects">
                        <div className="personal-grid">
                            <PersonalProjectCards
                                url="https://journal.withsentari.com"
                                title="Sentari AI Journal"
                                techList="Next.js, TypeScript, Tailwind CSS, Python, FastAPI, Supabase"
                            >
                                <p className="description">An online voice journaling application. Assisted in the development of the History and Insights pages.<br /><br />This was accomplished while engaged in a contract of employment with <span className="company-name">Sentari AI</span> as a Software Development Engineer Intern.</p>
                            </PersonalProjectCards>
                            <NonLinkProjectCards
                                title="Sentari AI Internal Analytics Dashboard"
                                techList="Next.js, TypeScript, Tailwind CSS, Python, FastAPI, Supabase"
                            >
                                <p className="description">Led the development of an internal tool that visualizes various metrics such as how the app scales over time.<br /><br />This was accomplished while engaged in a contract of employment with <span className="company-name">Sentari AI</span> as a Software Development Engineer Intern.</p>
                            </NonLinkProjectCards>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}