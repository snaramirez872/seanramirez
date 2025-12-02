import { BackButton } from "../components/BackButton";
import { ProjectCards } from "../components/ProjectCards";                                                                                                                                                                                                        
import './projects.css';

export default function Page() {                            
    return (
            <div className='projects'>
                <BackButton />
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
                        <p className="desc">Pok&eacute;mon type effectiveness finder. Built using <span className="tools">Next.js</span>, <span className="tools">TailwindCSS</span>, and <a className="tools" href="https://pokeapi.co/docs/v2" target="_blank" rel="noreferrer">Pok&eacute;APi</a>.</p>
                    </ProjectCards>
                    <ProjectCards 
                        title='SeanVGO'
                        link='https://github.com/snaramirez872/SeanVGO'
                        hover='GitHub Repo for App'
                        
                    >
                        <p className='desc'>A video game collection organizer that was built using <span className='tools'>React.js</span>, <span className='tools'>CSS</span>, and <a className='tools' href='https://firebase.google.com/docs/firestore' target='_blank' rel='noreferrer'>Cloud Firestore</a>.</p>
                    </ProjectCards>
                    <ProjectCards 
                        title='Band Geeks News App'
                        link='https://github.com/ppauliuchenka02/bandgeeks-news-app'
                        hover='GitHub Repo for App'
                    >
                        <p className='desc'>A personal news app developed using <a className='tools' href='https://redwoodjs.com/docs/introduction' target='_blank' rel='noreferrer'>RedwoodJS</a> and <a className='tools' href='https://tailwindcss.com/docs' target='_blank' rel='noreferrer'>TailwindCSS</a>.</p>
                    </ProjectCards>
                </div>
                <h1>Professional Projects</h1>
                <div className="cards-container">
                    <div className='project-cards'>
                        <div className='proj-details'>
                            <p className='title'>Court Notice Translation Service (Fall 2023 Prototype)</p>
                            <p className='desc'>Translates NJ Court Notices into a selection of languages. Developed using <a className='tools' href='https://docs.pega.com/bundle/platform/page/platform/app-dev/dev-studio-overview.html' target='_blank' rel='noreferrer'>Pega Dev Studio</a> and <a className='tools' href='https://docs.aws.amazon.com/translate/latest/APIReference/API_TranslateDocument.html' target='_blank' rel='noreferrer'>AWS Translate API</a>.<br /><br />This was accomplished as part of NJIT's YWCC Senior Capstone Program during the Fall 2023 semester.</p>
                        </div>
                    </div>
                    <div className='project-cards'>
                        <div className='proj-details'>
                            <a className='website' title='Journal with Sentari' href='https://journal.withsentari.com/' target='_blank' rel='noreferrer'>LINK</a>
                            <p className='title'>Sentari AI Journal</p>
                            <p className='desc'>Assisted in the development of Sentari AI's online journaling web app using <span className="tools">Next.js</span>, <span className="tools">Python Flask</span>, and <span className="tools">Supabase</span>. I also developed an internal analytics tool for the site.<br /><br />This website was all done while working as a Software Development Engineer Intern for <a className="tools" href="https://www.withsentari.com" target='_blank' rel='noreferrer'>Sentari AI</a>.</p>
                        </div>
                    </div>
                    <div className='project-cards'>
                        <div className='proj-details'>
                            <a className='website' title='Quick & Quality Deli' href='https://quickandqualitydeli.com' target='_blank' rel='noreferrer'>LINK</a>
                            <p className='title'>Website for Quick and Quality</p>
                            <p className='desc'>Designed website for Quick and Quality deli located in West Philadelphia. Developed using Wordpress Elementor, designed branding for the business using Canva, and implemented SEO structuring.<br /><br />This website was developed while working as a Web Developer for <a className="tools" href="https://www.relevantlocalmedia.com" target='_blank' rel='noreferrer'>Relevant Local Media</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
    );
}
