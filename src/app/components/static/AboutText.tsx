import Link from "next/link";
import "../css/abouttext.css";

export default function AboutText() {
    return <p className="about-text">
        Currently, I&apos;m a Web Developer at <Link className="text-links" href="https://www.relevantlocalmedia.com" rel="noreferrer" target="_blank">Relevant Local Media</Link>, where I focus on crafting seamless digital experiences. When I&apos;m not working on client sites, I&apos;m building projects like SeanVGO, a dedicated organizer for video game collections. My go-to toolkit includes React.js, Next.js, TypeScript, and Python, backed by a solid foundation in Postgres and SQL. Feel free to explore my work and GitHub to see what I&apos;ve been up to lately!
    </p>
}