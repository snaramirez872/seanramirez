import { ProjectCards } from "../components/ProjectCards";
import Link from "next/link";                                                                                                                                                                                                        
import './projects.css';

export default function Page() {                            
    return (
        <div className='projects'>
            <h1>Personal Projects</h1>
            <div className='cards-container'>
                <ProjectCards
                    title="Definitive KH"
                    link="https://github.com/snaramirez872/definitiveKH"
                    hover="GitHub Repo for App"
                >
                    <p className="desc">
                        Definitive KH is a slightly ambitious web project aimed at providing information about the Kingdom Hearts games to newcomers and returning players alike! Built using <span className="tools">Next.js</span> and <span className="tools">TailwindCSS</span>.
                    </p>
                </ProjectCards>
                <ProjectCards 
                    title='Effectiveness Dex'
                    link='https://github.com/snaramirez872/Effectiveness-Dex'
                    hover='GitHub Repo for App'
                    
                >
                    <p className="desc">Pok&eacute;mon type effectiveness finder. Built using <span className="tools">Next.js</span>, <span className="tools">TailwindCSS</span>, and <Link className="tools" href="https://pokeapi.co/docs/v2" target="_blank" rel="noreferrer">Pok&eacute;APi</Link>.</p>
                </ProjectCards>
                <ProjectCards 
                    title='SeanVGO'
                    link='https://github.com/snaramirez872/SeanVGO'
                    hover='GitHub Repo for App'
                    
                >
                    <p className='desc'>A video game collection organizer that was built using <span className='tools'>React.js</span>, <span className='tools'>CSS</span>, and <Link className='tools' href='https://firebase.google.com/docs/firestore' target='_blank' rel='noreferrer'>Cloud Firestore</Link>.</p>
                </ProjectCards>
                <ProjectCards 
                    title='Band Geeks News App'
                    link='https://github.com/ppauliuchenka02/bandgeeks-news-app'
                    hover='GitHub Repo for App'
                >
                    <p className='desc'>A personal news app developed using <Link className='tools' href='https://redwoodjs.com/docs/introduction' target='_blank' rel='noreferrer'>RedwoodJS</Link> and <Link className='tools' href='https://tailwindcss.com/docs' target='_blank' rel='noreferrer'>TailwindCSS</Link>.</p>
                </ProjectCards>
            </div>
            <h1 className="header-two">Professional Portfolio</h1>
            <div className="cards-container">
                <div className='project-cards'>
                    <div className='proj-details'>
                        <h3 className='title'>Court Notice Translation Service (Fall 2023 Prototype)</h3>
                        <p className='desc'>Translates NJ Court Notices into a selection of languages. Developed using <a className='tools' href='https://docs.pega.com/bundle/platform/page/platform/app-dev/dev-studio-overview.html' target='_blank' rel='noreferrer'>Pega Dev Studio</a> and <a className='tools' href='https://docs.aws.amazon.com/translate/latest/APIReference/API_TranslateDocument.html' target='_blank' rel='noreferrer'>AWS Translate API</a>.<br /><br />This was accomplished as part of NJIT's YWCC Senior Capstone Program during the Fall 2023 semester.</p>
                    </div>
                </div>
                <Link className="position-links" href="/projects/sentari-ai">
                    <div className='position-cards'>
                        <div>
                            <h2>Sentari AI</h2>
                            <h3>Software Development Engineer Intern</h3>
                        </div>
                    </div>
                </Link>
                <Link className="position-links" href="/projects/relevant-local-media">
                    <div className='position-cards'>
                        <div>
                            <h2>Relevant Local Media</h2>
                            <h3>Web Developer</h3>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
