import Image from "next/image";
import ProfilePic from '../../public/profile.png';
import { Icons } from "./components/Icons";
import { MobileButtons } from "./components/MobileButtons";
import { Footer } from "./components/Footer";
import './homepage.css';

export default function Home() {
  return (
    <>
      <div className='homepage-desktop'>
        <div className='words'>
          <p className='intro'>I&apos;m a <span className='keywords'>Software Developer</span> specializing in <span className='keywords'>Front End Development/Design</span> using <span className='keywords'>Next.js</span>, <span className='keywords'>React.js</span>, and <span className='keywords'>CSS</span>.</p>
          <p className='extras'>When I&apos;m not coding I enjoy playing video games, photography, watching movies, and watching anime!</p>
          <p className='photo'>Photography has been a hobby of mine for many years! All of my work can be viewed on my Instagram by clicking the Instagram icon to the right.</p>
          <p className='intro-to-projs'>I&apos;ve been making web applications for a few years and they can be viewed by clicking &quot;Projects&quot; at the top right.</p>
          <p className='right-now'>Right now, I&apos;m doing the writing for <span className="keywords">SNAR-Dev</span> and I&apos;m also developing <span className="keywords">Effectiveness Dex</span>. More info can be found in the &quot;Projects&quot; tab.</p>
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
      <Footer />
    </>
  );
}
