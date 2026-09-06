import ProjectsGrid from "./components/ProjectsGrid";

export default function ProjectsPage() {
    return (
        <section className="experience-page">
            <section className="experience-main-content">
                <h1>Personal Projects</h1>
                <p className="first-copy">
                    These projects are where I experiment, build, and put new ideas into practice. 
                    From learning new technologies to solving problems that interest me, each one 
                    has helped me grow as a developer. Click on a project to learn more about what 
                    I built and how I built it.
                </p>
                <section className="experience-cards-container">
                    <section className="professional-experience">
                        <ProjectsGrid />
                    </section>
                </section>
            </section>
        </section>
    );
}