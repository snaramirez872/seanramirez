import Link from 'next/link';
import Image from 'next/image';
import github from '../../../public/icons/github-mark-white.png';
import './css/projectcard.css';

export function ProjectCards({ title, link, hover, desc, children }) {
    return (
        <div className='project-cards'>
            <div className='img-container'>
                <Link href={link} title={hover} target='_blank' rel='noreferrer'>
                    <Image src={github} alt='' width='80' height='80' />
                </Link>
            </div>
            <div className='proj-details'>
                <p className='proj-title'>{title}</p>
                {children}
            </div>
        </div>
    );
}
