import Link from "next/link";
import AmplifyGrid from "./components/AmplifyGrid";

export default function AmplifyPage() {
    return (
        <section className="experience-page">
           <section className="experience-main-content">
                <h1>Amplify</h1>
                <h2 className="first-subheader">Job Title: Full Stack Developer</h2>
                <p className="first-copy">
                    <Link href="https://www.amplifylaw.ai" target="_blank" rel="noreferrer" className="company-name">Amplify</Link> is 
                    a PR First, Digital Marketing Agency that works to better the connection between lawyers and their clients.
                </p>
                <section className="experience-cards-container">
                    <section className="professional-experience">
                        <AmplifyGrid />
                    </section>
                </section>
           </section>
        </section>
    );
}