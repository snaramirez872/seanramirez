import Hero from "./components/static/Hero";
import AboutMe from "./components/static/AboutMe";

export default function Home() {
  return (
    <>
      <main className="homepage-hero">
        <Hero />
        <section className="about-me">
          <AboutMe />
        </section>
      </main>
    </>
  );
}