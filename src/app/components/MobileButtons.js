import Link from "next/link";
import Image from "next/image";
import email from '../../../public/icons/envelope-regular-24.png';
import linkedin from '../../../public/icons/InBug-Black.png';
import codeIcon from '../../../public/icons/code-block-regular-24.png';
import file from '../../../public/icons/file-regular-24.png';
import { Button } from "./Button";

export function MobileButtons() {
    const resumeLink = process.env.NEXT_PUBLIC_RESUME_LINK;
    return (
        <div className='mobile-buttons'>
            <Button
                href='mailto:snaramirez872@gmail.com'
                name='Email'
            >
                <Image src={email} alt='Email' />
            </Button>
            <Button
                href={resumeLink}
                name='Resume'
            >
                <Image src={file} alt='Resume/CV' />
            </Button>
            <Button
                href='https://linkedin.com/in/seanaramirez/'
                name='LinkedIn'
            >
                <Image src={linkedin} alt='LinkedIn' />
            </Button>
            <Link 
                href='/projects'
                className='link-buttons'
            >
                <Image src={codeIcon} alt='Projects' />
                Projects
            </Link>
        </div>
    );
}
