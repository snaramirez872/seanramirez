import LoadMoreGrid from "../../components/reusable/LoadMoreGrid";
import PersonalProjectCards from "../../components/reusable/PersonalProjectCards";
import NonLinkProjectCards from "../../components/reusable/NonLinkProjectCard";

export default function ProjectsGrid() {
    return (
        <LoadMoreGrid>
            <PersonalProjectCards 
                url="https://github.com/snaramirez872/seanramirez"
                title="Portfolio Website"
                techList="Next.js, TypeScript, CSS"
            >
                <p className="description">
                    The source code behind this portfolio.
                     Explore the repository to see how the site is structured and built.
                </p>
            </PersonalProjectCards>
            <PersonalProjectCards 
                url="https://effectiveness-dex.vercel.app"
                title="Effectiveness Dex"
                techList="Next.js, TypeScript, CSS, PokeAPI"
            >
                <p className="description">
                    An online search tool used to simplify the Pok&eacute;mon Type Chart.
                </p>
            </PersonalProjectCards>
            <PersonalProjectCards 
                url="https://github.com/snaramirez872/seanvgo-v2"
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
                url="https://github.com/palina-pauliuchenka/bandgeeks-news-app"
                title="Band Geeks News App"
                techList="Redwood.js, React.js, Tailwind CSS, GraphQL, Prisma, NewsAPI"
            >
                <p className="description">
                    An online news feed application developed as the course project for NJIT's CS 490 Summer 2023 Class.
                </p>
            </PersonalProjectCards>
        </LoadMoreGrid>
    );
}