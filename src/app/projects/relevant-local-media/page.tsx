import RLMProjCard from "./components/RLMProjCard";
import BackButtonHeader from "../components/reusable/BackButtonHeader";
import "../projectspage.css";
import Link from "next/link";

export default function RLMPage() {
    return (
        <section className="projectspage">
           <section className="projectspage-main-content">
                <BackButtonHeader url="/projects" />
                <h1>Relevant Local Media</h1>
                <h2 className="first-subheader">Job Title: Web Developer</h2>
                <p className="first-copy">These websites were designed while under the employment of <Link href="https://www.relevantlocalmedia.com" className="company-name">Relevant Local Media</Link>.</p>
                <section className="professional-projects">
                    <section className="personal-grid">
                        <RLMProjCard
                            title="Larry Pro Complete Home Renovation"
                            url="https://larryproreno.wpenginepowered.com/"
                            techList="WordPress, Elementor, CSS"
                        >
                            <p className="description">This website is not yet live as of June 11th, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="Aced Enterprises, Inc. - Blackwood, NJ"
                            url="https://acedenterprise.wpenginepowered.com/"
                            techList="WordPress, Elementor, CSS"
                        >
                            <p className="description">This website is not yet live as of May 27th, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="Blue Jeans Pizza, Pasta, and Wings - Blue Ridge, GA"
                            url="https://bluejeansblueridge.com/"
                            techList="WordPress, Elementor, CSS"
                        >
                            <p className="description">This website went live on May 28th, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="Garson - Houston, TX"
                            url="https://garsonrestaurant.com"
                            techList="WordPress, Elementor, CSS"
                        >
                            <p className="description">This website is live as of May 27th, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="Reali's Cuisine - Johnston, RI"
                            url="https://realis-cuisine.com/"
                            techList="WordPress, Elementor, CSS"
                        >
                            <p className="description">This website is live as of May 27th, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="Lexi J's Boutique - Fort Myers, FL"
                            url="https://lexijs.com"
                            techList="WordPress, Elementor, CSS"
                        >
                            <p className="description">This website went live on May 8th, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="Banjo's BBQ - Dayton, TN"
                            url="https://banjosbbq.com/"
                            techList="WordPress, Elementor, CSS"
                        >
                            <p className="description">This website went live on April 27th, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="Charleston Movement Co. - Charlston, SC"
                            url="https://charlestonmovementco.com"
                            techList="WordPress, Elementor, CSS, Da Vinci Resolve"
                        >
                            <p className="description">These websites are live as of May 27th, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="US BanCard Merchant Services - Brentwood, TN"
                            url="https://usbancard.com"
                            techList="WordPress, Elementor, CSS, Da Vinci Resolve"
                        >
                            <p className="description">This website went live on March 23rd, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="Pine Island Seafood Co. - Matlacha, FL"
                            url="https://pineislandseafoodco.com"
                            techList="WordPress, Elementor, CSS, Canva"
                        >
                            <p className="description">This website went live on April 28th, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="Old Fort - Cleveland, TN"
                            url="https://oldforttn.com"
                            techList="WordPress, Elementor, CSS, Canva"
                        >
                            <p className="description">This website went live on March 4th, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="New York Bagel Bakery - Philadelphia, PA"
                            url="https://newyorkbagelspa.com"
                            techList="WordPress, Elementor, CSS"
                        >
                            <p className="description">This website went live on April 27th, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="Skeeter's Pub - Blackwood, NJ"
                            url="https://skeeterspub.com"
                            techList="WordPress, Elementor, CSS"
                        >
                            <p className="description">This website went live on February 20th, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="Ali's Roti Shop - Plantation, FL"
                            url="https://alisrotifl.com"
                            techList="WordPress, Elementor, CSS"
                        >
                            <p className="description">This website went live on March 18th, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="Rexy's Restaurant & Bar - Haddon Township, NJ"
                            url="https://rexys.com"
                            techList="WordPress, Elementor, CSS"
                        >
                            <p className="description">This website went live in February 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="Carolina Carpet Cleaning of the Midlands, Inc. - West Columbia, SC"
                            url="https://carolinacarpetcleaning.com"
                            techList="WordPress, Elementor, CSS, Canva"
                        >
                            <p className="description">This website went live on January 20th, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="Old Village Pizza - Westampton, NJ"
                            url="https://oldvillagepizzanj.com"
                            techList="WordPress, Elementor, CSS"
                        >
                            <p className="description">This website went live on January 16th, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="JP McGurkee's Sandwich Shop - Pheonix, AZ"
                            url="https://jpmcgurkees.wpenginepowered.com"
                            techList="WordPress, Elementor, CSS, Canva"
                        >
                            <p className="description">This website is not yet live as of December 17th, 2025.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="The Sweet Sage Cafe & Boutique - North Redington Beach, FL"
                            url="https://sweetsagecafe.com"
                            techList="WordPress, Elementor, CSS, Canva"
                        >
                            <p className="description">This website went live on January 2nd, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="El Chullo Peruvian Restaurant - Pheonix, AZ"
                            url="https://elchullo.wpenginepowered.com"
                            techList="WordPress, Elementor, CSS"
                        >
                            <p className="description">This website is not yet live as of November 26th, 2025.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="The Swiss Bar - Reno, NV"
                            url="https://swissbarreno.com"
                            techList="WordPress, Elementor, CSS, Canva"
                        >
                            <p className="description">This website went live on December 18th, 2025.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="4th Street Pizza - St. Petersburg, FL"
                            url="https://4thstreetpizzas.com"
                            techList="WordPress, Elementor, CSS"
                        >
                            <p className="description">This website went live on January 21st, 2026.</p>
                        </RLMProjCard>
                        <RLMProjCard
                            title="Quick and Quality - Philadelphia, PA"
                            url="https://quickandqualitydeli.com"
                            techList="WordPress, Elementor, CSS, Canva"
                        >
                            <p className="description">This website went live on November 5th, 2025.</p>
                        </RLMProjCard>
                    </section>
                </section>
           </section>
        </section>
    );
}