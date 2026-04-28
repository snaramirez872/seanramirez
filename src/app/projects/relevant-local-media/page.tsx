import RLMProjCard from "./components/RLMProjCard";
import BackButtonHeader from "../components/reusable/BackButtonHeader";
import "../projectspage.css";

export default function RLMPage() {
    return (
        <div className="projectspage">
           <div className="projectspage-main-content">
                <BackButtonHeader url="/projects" />
                <h1>Relevant Local Media</h1>
                <h2 className="first-subheader">Web Developer</h2>
                <div className="professional-projects">
                    <div className="personal-grid">
                        <RLMProjCard
                            title="Lexi J's Boutique"
                            url="https://lexijsboutique.wpenginepowered.com"
                            techList="WordPress, Elementor, CSS"
                        >
                            <p className="description">This website is not yet live as of April 27th, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="Banjo's BBQ"
                            url="https://eigthstreetpt.wpenginepowered.com"
                            techList="WordPress, Elementor, CSS"
                        >
                            <p className="description">This website went live on April 27th, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="Charleston Movement Co. Physical Therapy"
                            url="https://eigthstreetpt.wpenginepowered.com"
                            techList="WordPress, Elementor, CSS, Da Vinci Resolve"
                        >
                            <p className="description">This website is not yet live as of April 9th, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="Charleston Movement Co. Pilates"
                            url="https://eighthpilates.wpenginepowered.com"
                            techList="WordPress, Elementor, CSS, Da Vinci Resolve"
                        >
                            <p className="description">This website is not yet live as of April 9th, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="US BanCard Merchant Services"
                            url="https://usbancard.com"
                            techList="WordPress, Elementor, CSS, Da Vinci Resolve"
                        >
                            <p className="description">This website went live on March 23rd, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="Pine Island Seafood Co."
                            url="https://pineislandseafoodco.com"
                            techList="WordPress, Elementor, CSS, Canva"
                        >
                            <p className="description">This website went live on April 28th, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="Old Fort"
                            url="https://oldforttn.com"
                            techList="WordPress, Elementor, CSS, Canva"
                        >
                            <p className="description">This website went live on March 4th, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="New York Bagel Bakery"
                            url="https://newyorkbagelspa.com"
                            techList="WordPress, Elementor, CSS"
                        >
                            <p className="description">This website went live on April 27th, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="Skeeter's Pub"
                            url="https://skeeterspub.com"
                            techList="WordPress, Elementor, CSS"
                        >
                            <p className="description">This website went live on February 20th, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="Ali's Roti Shop"
                            url="https://alisrotifl.com"
                            techList="WordPress, Elementor, CSS"
                        >
                            <p className="description">This website went live on March 18th, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="Rexy's Restaurant & Bar"
                            url="https://rexys.com"
                            techList="WordPress, Elementor, CSS"
                        >
                            <p className="description">This website went live in February 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="Carolina Carpet Cleaning of the Midlands, Inc."
                            url="https://carolinacarpetcleaning.com"
                            techList="WordPress, Elementor, CSS, Canva"
                        >
                            <p className="description">This website went live on January 20th, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="Old Village Pizza"
                            url="https://oldvillagepizzanj.com"
                            techList="WordPress, Elementor, CSS"
                        >
                            <p className="description">This website went live on January 16th, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="JP McGurkee's Sandwich Shop"
                            url="https://jpmcgurkees.wpenginepowered.com"
                            techList="WordPress, Elementor, CSS, Canva"
                        >
                            <p className="description">This website is not yet live as of December 17th, 2025.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="The Sweet Ssage Cafe & Boutique"
                            url="https://sweetsagecafe.com"
                            techList="WordPress, Elementor, CSS, Canva"
                        >
                            <p className="description">This website went live on January 2nd, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="El Chullo Peruvian Restaurant"
                            url="https://elchullo.wpenginepowered.com"
                            techList="WordPress, Elementor, CSS"
                        >
                            <p className="description">This website is not yet live as of November 26th, 2025.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="The Swiss Bar"
                            url="https://swissbarreno.com"
                            techList="WordPress, Elementor, CSS, Canva"
                        >
                            <p className="description">This website went live on December 18th, 2025.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="4th Street Pizza"
                            url="https://4thstreetpizzas.com"
                            techList="WordPress, Elementor, CSS"
                        >
                            <p className="description">This website went live on January 21st, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="Quick and Quality"
                            url="https://quickandqualitydeli.com"
                            techList="WordPress, Elementor, CSS, Canva"
                        >
                            <p className="description">This website went live on November 5th, 2025.</p>
                        </RLMProjCard>
                    </div>
                </div>
           </div>
        </div>
    );
}