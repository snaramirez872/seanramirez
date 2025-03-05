import { BackButton } from "../components/BackButton";
import { ProjectCards } from "../components/ProjectCards";
import './projects.css';

export default function Page() {
    return (
        <div className='projects'>
            <BackButton />
            <div className='cards-container'>
                <ProjectCards 
                    title='Band Geeks News App'
                    link='https://github.com/ppauliuchenka02/bandgeeks-news-app'
                    hover='GitHub Repo for App'
                    
                >
                    <p className='desc'>A personal news app developed using <a className='tools' href='https://redwoodjs.com/docs/introduction' target='_blank' rel='noreferrer'>RedwoodJS</a> and <a className='tools' href='https://tailwindcss.com/docs' target='_blank' rel='noreferrer'>TailwindCSS</a>.</p>
                </ProjectCards>
                <div className='project-cards'>
                    <div className='proj-details'>
                        <p className='title'>Court Notice Translation Service (Fall 2023 Prototype)</p>
                        <p className='desc'>Translates NJ Court Notices into a selection of languages. Developed using <a className='tools' href='https://docs.pega.com/bundle/platform/page/platform/app-dev/dev-studio-overview.html' target='_blank' rel='noreferrer'>Pega Dev Studio</a> and <a className='tools' href='https://docs.aws.amazon.com/translate/latest/APIReference/API_TranslateDocument.html' target='_blank' rel='noreferrer'>AWS Translate API</a>.</p>
                    </div>
                </div>
                <ProjectCards 
                    title='SeanVGO'
                    link='https://github.com/snaramirez872/SeanVGO'
                    hover='GitHub Repo for App'
                    
                >
                    <p className='desc'>A video game collection organizer that was built using <span className='tools'>React.js</span>, <span className='tools'>CSS</span>, and <a className='tools' href='https://firebase.google.com/docs/firestore' target='_blank' rel='noreferrer'>Cloud Firestore</a>.</p>
                </ProjectCards>
                <ProjectCards 
                    title='SNAR-Dev'
                    link='https://github.com/snaramirez872/snaramirez-dev'
                    hover='GitHub Repo for App'
                    
                >
                    <p className='desc'>Still in-progress collection of coding tutorials. I am developing this using <span className='tools'>React.js</span> and <span className='tools'>CSS</span>.</p>
                </ProjectCards>
                <ProjectCards 
                    title='Effectiveness Dex'
                    link='https://github.com/snaramirez872/Effectiveness-Dex'
                    hover='GitHub Repo for App'
                    
                >
                    <p className="desc">Still in-progress Pok&eacute;mon type effectiveness finder. I am building this using <span className="tools">Next.js</span>, <span className="tools">TailwindCSS</span>, and <a className="tools" href="https://pokeapi.co/docs/v2" target="_blank" rel="noreferrer">Pok&eacute;APi</a>.</p>
                </ProjectCards>
            </div>
        </div>
    );
}
