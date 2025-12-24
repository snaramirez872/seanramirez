import Link from 'next/link';
import { ProjectCardProps } from '../../lib/types';
import './css/projectcard.css';

export function ProjectCards({ title, link, hover, children }: ProjectCardProps) {
    return (
        <div className='project-cards'>
                <div className='proj-details'>
                    <Link className="proj-link" href={link} title={hover} target='_blank' rel='noreferrer'>
                        <h2 className='proj-title'>{title}</h2>
                    </Link>
                    {children}
                </div>
            </div>
    );
}
