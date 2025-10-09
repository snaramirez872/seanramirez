import Link from 'next/link';
import Image from 'next/image';
import { ProjectCardProps } from '../../lib/types';
import github from '../../lib/assets/icons/github-mark-white.png';
import './css/projectcard.css';

export function ProjectCards({ title, link, hover, children }: ProjectCardProps) {
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
