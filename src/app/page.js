import Link from "next/link";
import Image from "next/image";
import ProfilePic from '../../public/profile.png';
import { Icons } from "./components/Icons";

export default function Home() {
  const resumeLink = process.env.NEXT_PUBLIC_RESUME_LINK;
  return (
    <div className='homepage'>
      <div className='words'>
        <p className='intro'>I&apos;m a Software Developer specializing in Front End Web Development/Design using Next.js, React.js, and CSS.</p>
        <p className='extras'>When I&apos;m not coding I enjoy playing video games, photography, watching movies, and watching anime!</p>
        <p className='intro-to-projs'>I&apos;ve been making web applications for a couple of years now and they can be viewed by clicking &quot;Projects&quot; at the top right taping &quot;Projects&quot; below.</p>
        <p className='right-now'>Right now, I'm doing the writing for SNAR-Dev and I am also developing Effectiveness Dex. More info can be found in the &quot;Projects&quot; tab.</p>
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
