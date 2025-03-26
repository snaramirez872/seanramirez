import Image from "next/image";
import ProfilePic from '../../public/profile.png';
import { Icons } from "./components/Icons";
import { MobileButtons } from "./components/MobileButtons";
import './homepage.css';

export default function Home() {
  return (
    <>
      <div className='homepage-desktop'>
        <div className='words'>
          <p className='intro'>Hello! I&apos;m a <span className='keywords'>Software Developer</span> based in New Jersey. I prioritize <span className='keywords'>Front End Web Development</span>, but I also have some experience with <span className='keywords'>Full Stack Development</span>.</p>
          <p className='right-now'>Right now, I&apos;m doing the writing for <span className="keywords">SNAR-Dev</span> and I&apos;m also developing <span className="keywords">Effectiveness Dex</span>. More info about these works and my other projects can be found in the &quot;Projects&quot; tab.</p>
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
