import { BackButton } from "../components/BackButton";
import { ProjectCards } from "../components/ProjectCards";                                                                  
import { NavBar } from "../components/NavBar";
import { MobileNavBar } from "../components/MobileNavBar";                                                                                                                                      
import './projects.css';

export default function Page() {                            
    return (
        <>
            <div className='navbar-container'>
                <NavBar />
            </div>
            <div className='mbl-navbar-container'>
                <MobileNavBar />
            </div>
            <div className='projects'>
                <BackButton />
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
                    <div className='project-cards'>
                        <div className='proj-details'>
                            <a className='mock-website' title='WPEngine Hosted Site' href='https://interviewalt.wpengine.com' target='_blank' rel='noreferrer'>LINK</a>
                            <p className='title'>Mock Landing Page Interview Project</p>
                            <p className='desc'>Mock landing page designed and implemented as part of the Interview process for <a className="tools" href="https://relevantlocalmedia.com" target='_blank' rel='noreferrer'>Relevant Local Media</a>. Built using <span className="tools">Elementor (WordPress)</span>, and a provided design brief for an actual past client.</p>
                        </div>
                    </div>
                    <ProjectCards 
                        title='SeanVGO'
                        link='https://github.com/snaramirez872/SeanVGO'
                        hover='GitHub Repo for App'
                        
                    >
                        <p className='desc'>A video game collection organizer that was built using <span className='tools'>React.js</span>, <span className='tools'>CSS</span>, and <a className='tools' href='https://firebase.google.com/docs/firestore' target='_blank' rel='noreferrer'>Cloud Firestore</a>.</p>
                    </ProjectCards>
                    <div className='project-cards'>
                        <div className='proj-details'>
                            <p className='title'>Court Notice Translation Service (Fall 2023 Prototype)</p>
                            <p className='desc'>Translates NJ Court Notices into a selection of languages. Developed using <a className='tools' href='https://docs.pega.com/bundle/platform/page/platform/app-dev/dev-studio-overview.html' target='_blank' rel='noreferrer'>Pega Dev Studio</a> and <a className='tools' href='https://docs.aws.amazon.com/translate/latest/APIReference/API_TranslateDocument.html' target='_blank' rel='noreferrer'>AWS Translate API</a>.</p>
                        </div>
                    </div>
                    <ProjectCards 
                        title='Band Geeks News App'
                        link='https://github.com/ppauliuchenka02/bandgeeks-news-app'
                        hover='GitHub Repo for App'
                    >
                        <p className='desc'>A personal news app developed using <a className='tools' href='https://redwoodjs.com/docs/introduction' target='_blank' rel='noreferrer'>RedwoodJS</a> and <a className='tools' href='https://tailwindcss.com/docs' target='_blank' rel='noreferrer'>TailwindCSS</a>.</p>
                    </ProjectCards>
                </div>
            </div>
        </>
    );
}
