import Image from "next/image";
import ProfilePic from "../lib/assets/profile.png";
import { Icons } from "./components/Icons";
import { MobileButtons } from "./components/MobileButtons";
import Link from "next/link";
import './homepage.css';

export default function Home() {
  return (
    <>
      <div className='homepage-desktop'>
        <div className='words'>
          <p className='intro'>Hello! I&apos;m a Software Developer based in New Jersey. I prioritize Front End Web Development, but I also have some experience with Full Stack Development.</p>
          <p className='right-now'>I&apos;m always happy to connect with people in the industry! My email and LinkedIn are both available to the right.</p>
          <p className='right-now'>I&apos;m current working as a Web Developer for <Link className="rlm-home" href="https://www.relevantlocalmedia.com" target="_blank" rel="noreferrer">Relevant Local Media</Link> and I'm working on a couple side projects in my free time. My portfolio of work can be found below!</p>
          <Link 
            href="/projects"
            className="proj-home-link"
          >
            View Projects
          </Link>
        </div>
        <div className='profile-card'>
          <Image className='profile-picture' src={ProfilePic} alt='profile picture' height='170' width='170' />
          <Icons />
        </div>
      </div>
      <div className='homepage-mobile'>
        <div className='profile-card-mbl'>
          <Image 
            className='profile-picture' 
            src={ProfilePic} 
            alt='profile picture' 
            height='150' 
            width='150' 
          />
        </div>
        <MobileButtons />
      </div>
    </>
  );
}
