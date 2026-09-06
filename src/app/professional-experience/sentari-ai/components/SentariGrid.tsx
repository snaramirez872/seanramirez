import LoadMoreGrid from "../../../components/reusable/LoadMoreGrid";
import PersonalProjectCards from "../../../components/reusable/PersonalProjectCards";
import NonLinkProjectCards from "../../../components/reusable/NonLinkProjectCard";

export default function SentariGrid() {
    return (
        <LoadMoreGrid>
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
        </LoadMoreGrid>
    );
}