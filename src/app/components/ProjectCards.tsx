import Link from 'next/link';
import { ProjectCardProps } from '../../lib/types';
import './css/projectcard.css';

export function ProjectCards({ title, link, hover, children }: ProjectCardProps) {
    return (
        <Link className="proj-link-card" href={link} title={hover} target='_blank' rel='noreferrer'>
            <div className='project-cards'>
                <div className='proj-details'>
                    <h3 className='proj-title'>{title}</h3>
                    {children}
                </div>
            </div>
        </Link>
    );
}
