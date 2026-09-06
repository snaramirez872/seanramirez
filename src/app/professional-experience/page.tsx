import ExperienceGrid from "./components/ExperienceGrid";

export default function ProjectsPage() {
    return (
        <section className="experience-page">
            <section className="experience-main-content">
                <h1>Professional Experience</h1>
                <section className="first-copy">
                    <p>
                        Explore the roles that have shaped my experience as 
                        a developer. Each card provides a closer look at the 
                        position, projects I worked on, and the skills I 
                        developed along the way.
                    </p>
                </section>
                <section className="experience-cards-container">
                    <section className="professional-experience">
                        <ExperienceGrid />
                    </section>
                </section>
            </section>
        </section>
    );
}