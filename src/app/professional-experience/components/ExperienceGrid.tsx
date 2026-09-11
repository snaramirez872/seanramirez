import LoadMoreGrid from "../../components/reusable/LoadMoreGrid";
import PositionCard from "../../components/reusable/PositionCard";

export default function ExperienceGrid() {
    return (
        <LoadMoreGrid>
            <PositionCard 
                position="Full Stack Developer"
                employer="Amplify"
                range="July 2026 to Present"
                url="/professional-experience/amplify"
            />
            <PositionCard 
                position="Web Developer"
                employer="Relevant Local Media"
                range="October 2025 to Present"
                url="/professional-experience/relevant-local-media"
            />
            <PositionCard 
                position="SDE Intern"
                employer="Sentari AI"
                range="July 2025 to October 2025"
                url="/professional-experience/sentari-ai"
            />
        </LoadMoreGrid>
    );
}