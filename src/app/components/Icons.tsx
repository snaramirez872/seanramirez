import Image from "next/image";
import Link from "next/link";
import email from '../../lib/assets/icons/envelope.svg';
import github from '../../lib/assets/icons/github-mark-white.png';
import linkedin from '../../lib/assets/icons/In-White-96@2x.png';
import './css/icons.css';

export function Icons() {
    return (
        <div className='icons'>
            <Link href='mailto:sean.ramirez.dev@gmail.com' target='_blank' rel='noreferrer'><Image src={email} alt='' height='40' width='40' /></Link>
            <Link href='https://github.com/snaramirez872' target='_blank' rel='noreferrer'><Image src={github} alt='' height='40' width='40' /></Link>
            <Link href='https://linkedin.com/in/seanaramirez' target='_blank' rel='noreferrer'><Image src={linkedin} alt='' height='40' width='40' /></Link>
        </div>
    );
}
