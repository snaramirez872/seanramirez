import Hero from "./components/static/Hero";
import HomeMenu from "./components/static/HomeMenu";
import AboutMe from "./components/static/AboutMe";
import MobileMenu from "./components/static/MobileMenu";
import MobileHero from "./components/static/MobileHero";
import "./homepage.css";

export default function Home() {
  return (
    <>
      <main className="homepage-desktop">
        <section className="hero-menu-container">
          <Hero />
          <HomeMenu />
        </section>
        <section className="about-me">
          <AboutMe />
        </section>
      </main>
      <main className="homepage-mobile">
        <MobileHero />
        <MobileMenu />
      </main>
    </>
  );
}