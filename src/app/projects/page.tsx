import BackButtonHeader from "./components/reusable/BackButtonHeader";
import PersonalProjectCards from "./components/reusable/PersonalProjectCards";
import PositionCard from "./components/reusable/PositionCard";
import NonLinkProjectCards from "./components/reusable/NonLinkProjectCard";
import "./projectspage.css";

export default function ProjectsPage() {
    return (
        <div className="projectspage">
            <div className="projectspage-main-content">
                <BackButtonHeader url="/" />
                <h1>Projects</h1>
                <div className="projects-cards-container">
                    <div className="professional-projects">
                        <h2 className="first-subheader">Professional Projects</h2>
                        <div className="personal-grid">
                            <PositionCard 
                                employer="Relevant Local Media" 
                                position="Web Developer"
                                url="/projects/relevant-local-media"
                            />
                            <PositionCard 
                                employer="Sentari AI" 
                                position="Software Development Engineer Intern"
                                url="/projects/sentari-ai"
                            />
                            <NonLinkProjectCards 
                                title="Court Notice Translation Service Prototype"
                                techList="Pega, AWS Translate Document API"
                            >
                                <p className="description">Translates NJ Court Notices into a selection of languages. This was accomplished as part of the NJIT YWCC Senior Capstone Program in the Fall 2023 Semester.</p>
                            </NonLinkProjectCards>
                        </div>
                    </div>
                    <div className="personal-projects">
                        <h2 className="second-subheader">Personal Projects</h2>
                        <div className="personal-grid">
                            <PersonalProjectCards 
                                url="https://seanvgo-v2.vercel.app/login"
                                title="SeanVGO v2"
                                techList="Next.js, TypeScript, Tailwind CSS, Python, FastAPI, Supabase"
                            >
                                <p className="description">
                                    An updated version of SeanVGO, an online video game organizer and tracker.
                                    <br /><br />
                                    <u>Demo Account</u>:<br />
                                    <b>Email: </b>svgo_demo@seanaramirez.dev<br />
                                    <b>Password: </b>GameVault_Demo@26
                                    <br /><br />
                                    <b>Note: </b>Demo data may be modified by other visitors at any time.
                                </p>
                            </PersonalProjectCards>
                            <PersonalProjectCards 
                                url="https://github.com/snaramirez872/definitiveKH"
                                title="Definitive KH"
                                techList="Next.js, TypeScript, Tailwind CSS"
                            >
                                <p className="description">
                                    A fanmade guide to the Kingdom Hearts series for newcomers and returning players alike.
                                </p>
                            </PersonalProjectCards>
                            <PersonalProjectCards 
                                url="https://github.com/snaramirez872/effectiveness-dex"
                                title="Effectiveness Dex"
                                techList="Next.js, TypeScript, Tailwind CSS, PokeAPI"
                            >
                                <p className="description">
                                    An online guide to help Pok&eacute;mon newcomers and returning players determine type match-ups for battling.
                                </p>
                            </PersonalProjectCards>
                            <PersonalProjectCards 
                                url="https://github.com/palina-pauliuchenka/bandgeeks-news-app"
                                title="Band Geeks News App"
                                techList="Redwood.js, React.js, Tailwind CSS, GraphQL, Prisma, NewsAPI"
                            >
                                <p className="description">
                                    An online news feed application developed as the course project for NJIT's CS 490 Summer 2023 Class.
                                </p>
                            </PersonalProjectCards>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}