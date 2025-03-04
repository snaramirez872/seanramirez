import { BackButton } from "../components/BackButton";
import { ProjectCards } from "../components/ProjectCards";

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
                    <p className='desc'></p>
                </ProjectCards>
                <div className='project-cards'>
                    <div className='proj-details'>
                        <p className='title'>Court Notice Translation Service (Fall 2023 Prototype)</p>
                        <p className='desc'></p>
                    </div>
                </div>
                <ProjectCards 
                    title='SeanVGO'
                    link='https://github.com/snaramirez872/SeanVGO'
                    hover='GitHub Repo for App'
                    
                >
                    <p className='desc'></p>
                </ProjectCards>
                <ProjectCards 
                    title='SNAR-Dev'
                    link='https://github.com/snaramirez872/snaramirez-dev'
                    hover='GitHub Repo for App'
                    
                >
                    <p className='desc'></p>
                </ProjectCards>
                <ProjectCards 
                    title='Effectiveness Dex'
                    link='https://github.com/snaramirez872/Effectiveness-Dex'
                    hover='GitHub Repo for App'
                    
                >
                    <p className='desc'></p>
                </ProjectCards>
            </div>
        </div>
    );
}
