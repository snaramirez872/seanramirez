import LoadMoreGrid from "../../../components/reusable/LoadMoreGrid";
import NonLinkProjectCards from "../../../components/reusable/NonLinkProjectCard";

export default function AmplifyGrid() {
    return (
        <LoadMoreGrid>
            <NonLinkProjectCards
                techList="Google Office Suite, Next.js, WordPress, GitHub, Vercel"
                title="Technical Improvements"
            >
                <p>My role so far has consisted of seeing where any bottlenecks lie in Amplify's development process and to plan out strategies and adjustments accordingly.</p>
            </NonLinkProjectCards>
        </LoadMoreGrid>
    );
}