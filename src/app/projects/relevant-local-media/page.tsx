import { ProjectCards } from "../../components/ProjectCards";
import Link from "next/link";
export default function RelevantLocalMediaWork() {
    return (
        <div>
            <h1>Relevant Local Media</h1>
            <div className="cards-container">
                <ProjectCards
                    title="Quick and Quality"
                    link="https://quickandqualitydeli.com/"
                    hover="Website for Quick and Quality"
                >
                    <p className="desc">The first website I made with Relevant Local Media. Quick and Quality is a deli located in the Spruce Hill area of Philadelphia, PA and is one of Relevant Local Media's clients.<br /><br />This was developed using <span className="tools">WordPress Elementor</span>, branding was designed using <span className="tools">Canva</span>, and <span className="tools">SEO</span> structuring was implemented with the help of the <span className="tools">Yoast</span> plugin in WordPress.<br /><br />This website was developed while working as a <span className="tools">Web Developer</span> under <Link className="tools" href="https://relevantlocalmedia.com/" target="_blank" rel="noreferrer">Relvant Local Media</Link>.</p>
                </ProjectCards>
                <ProjectCards
                    title="4th Street Pizza"
                    link="https://fourthstpizza.wpenginepowered.com"
                    hover="Development Website for 4th Street Pizza"
                >
                    <p className="desc">This website is not yet live as of December 11th, 2025. 4th Street Pizza is a Pizzeria located in St. Petersburg, FL and is one of Relevant Local Media's clients.<br /><br />This was developed using <span className="tools">WordPress Elementor</span>, branding was designed using <span className="tools">Canva</span>, and <span className="tools">SEO</span> structuring was implemented with the help of the <span className="tools">Yoast</span> plugin in WordPress.<br /><br />This website was developed while working as a <span className="tools">Web Developer</span> under <Link className="tools" href="https://relevantlocalmedia.com/" target="_blank" rel="noreferrer">Relvant Local Media</Link>.</p>
                </ProjectCards>
                <ProjectCards
                    title="The Swiss Bar"
                    link="https://swissbar.wpenginepowered.com"
                    hover="Development Website for The Swiss Bar"
                >
                    <p className="desc">This website is not yet live as of December 11th, 2025. The Swiss Bar is a dive bar located in Reno, NV and is one of Relevant Local Media's clients.<br /><br />This was developed using <span className="tools">WordPress Elementor</span>, branding was designed using <span className="tools">Canva</span>, and <span className="tools">SEO</span> structuring was implemented with the help of the <span className="tools">Yoast</span> plugin in WordPress.<br /><br />This website was developed while working as a <span className="tools">Web Developer</span> under <Link className="tools" href="https://relevantlocalmedia.com/" target="_blank" rel="noreferrer">Relvant Local Media</Link>.</p>
                </ProjectCards>
                <ProjectCards
                    title="El Chullo Peruvian Restaurant"
                    link="https://elchullo.wpenginepowered.com"
                    hover="Development Website for El Chullo Peruvian Restaurant"
                >
                    <p className="desc">This website is not yet live as of December 11th, 2025. El Chullo is a Peruvian Restaurant located in Pheonix, AZ and is one of Relevant Local Media's clients.<br /><br />This was developed using <span className="tools">WordPress Elementor</span>, branding was designed using <span className="tools">Canva</span>, and <span className="tools">SEO</span> structuring was implemented with the help of the <span className="tools">Yoast</span> plugin in WordPress.<br /><br />This website was developed while working as a <span className="tools">Web Developer</span> under <Link className="tools" href="https://relevantlocalmedia.com/" target="_blank" rel="noreferrer">Relvant Local Media</Link>.</p>
                </ProjectCards>
            </div>
        </div>
    );    
}