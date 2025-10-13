import Image from "next/image";
import ProfilePic from "../lib/assets/profile.png";
import { Icons } from "./components/Icons";
import { MobileButtons } from "./components/MobileButtons";
import { NavBar } from "./components/NavBar";
import './homepage.css';

export default function Home() {
  return (
    <>
      <div className='navbar-container'>
        <NavBar />
      </div>
      <div className='homepage-desktop'>
        <div className='words'>
          <p className='intro'>Hello! I&apos;m a <span className='keywords'>Software Developer</span> based in New Jersey. I prioritize <span className='keywords'>Front End Web Development</span>, but I also have some experience with <span className='keywords'>Full Stack Development</span>.</p>
          <p className='right-now'>I&apos;m currently engaging in different opportunites, but I&apos;m always happy to connect with people in the industry! My email and LinkedIn are both available to the right.</p>
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
          <h2>Sean A Ramirez</h2>
          <p>Web Developer | Software Developer</p>
        </div>
        <MobileButtons />
      </div>
    </>
  );
}
