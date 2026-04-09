import Hero from "./components/static/Hero";
import HomeMenu from "./components/static/HomeMenu";
import AboutMe from "./components/static/AboutMe";
import MobileMenu from "./components/static/MobileMenu";
import MobileHero from "./components/static/MobileHero";
import "./homepage.css";

export default function Home() {
  return (
    <>
      <div className="homepage-desktop">
        <div className="hero-menu-container">
          <Hero />
          <HomeMenu />
        </div>
        <div className="about-me">
          <AboutMe />
        </div>
      </div>
      <div className="homepage-mobile">
        <MobileHero />
        <MobileMenu />
      </div>
    </>
  );
}