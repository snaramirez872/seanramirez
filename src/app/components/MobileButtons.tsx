import Link from "next/link";
import Image from "next/image";
import email from '../../../public/icons/envelope-regular-24.png';
import linkedin from '../../../public/icons/InBug-Black.png';
import codeIcon from '../../../public/icons/code-block-regular-24.png';
import file from '../../../public/icons/file-regular-24.png';
import { Button } from "./Button";

export function MobileButtons() {
    const resume = "https://drive.google.com/file/d/1IDc0xVyzyRZuKRxylz9WVaYMJieJLi3q/view?usp=sharing";
    return (
        <div className='mobile-buttons'>
            <Button
                href='mailto:sean.ramirez.dev@gmail.com'
                name='Email'
            >
                <Image src={email} alt='Email' width={24} height={24} />
            </Button>
            <Button
                href={resume}
                name='Resume'
            >
                <Image src={file} alt='Resume/CV' width={24} height={24} />
            </Button>
            <Button
                href='https://linkedin.com/in/seanaramirez/'
                name='LinkedIn'
            >
                <Image src={linkedin} alt='LinkedIn' width={24} height={24} />
            </Button>
            <Link 
                href='/projects'
                className='link-buttons'
            >
                <Image src={codeIcon} alt='Projects' width={24} height={24} />
                Projects
            </Link>
        </div>
    );
}
