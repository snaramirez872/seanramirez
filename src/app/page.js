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
        <p className='photo'>Photography has been a hobby of mine for many years! All of my work can be viewed on my Instagram by <span className='desktop-mode'>clicking the Instagram icon to the right</span><span className='mobile-mode'>tapping the Instagram icon at the bottom of this page</span>.</p>
        <p className='intro-to-projs'>I&apos;ve been making web applications for a few years and they can be viewed by <span className='desktop-mode'>clicking &quot;Projects&quot; at the top right</span><span className='mobile-mode'>tapping &quot;Projects&quot; below</span>.</p>
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
