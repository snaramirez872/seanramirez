import Link from "next/link";
import Image from "next/image";
import ProfilePic from '../../public/profile.png';
import { Icons } from "./components/Icons";
import './homepage.css';

export default function Home() {
  const resumeLink = process.env.NEXT_PUBLIC_RESUME_LINK;
  return (
    <div className='homepage'>
      <div className='words'>
        <p className='intro'>I&apos;m a <span className='keywords'>Software Developer</span> specializing in <span className='keywords'>Front End Development/Design</span> using <span className='keywords'>Next.js</span>, <span className='keywords'>React.js</span>, and <span className='keywords'>CSS</span>.</p>
        <p className='extras'>When I&apos;m not coding I enjoy playing video games, photography, watching movies, and watching anime!</p>
        <p className='intro-to-projs'>I&apos;ve been making web applications for a couple of years now and they can be viewed by <span className='desktop-mode'>clicking "Projects" at the top right</span><span className='mobile-mode'>tapping "Projects" below</span>.</p>
        <p className='right-now'>Right now, I&apos;m doing the writing for <span className="keywords">SNAR-Dev</span> and I&apos;m also developing <span className="keywords">Effectiveness Dex</span>. More info can be found in the &quot;Projects&quot; tab.</p>
      </div>
      <div className='mobile-tabs'>
        <Link href='/projects'>Projects</Link>
        <Link href={resumeLink}>Resume</Link>
      </div>
      <div className='profile-card'>
        <Image className='profile-picture' src={ProfilePic} alt='profile picture' height='170' width='170' />
        <Icons />
      </div>
    </div>
  );
}
