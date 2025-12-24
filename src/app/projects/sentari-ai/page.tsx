import { ProjectCards } from "../../components/ProjectCards";
import Link from "next/link";
export default function SentariAIWork() {
    return (
        <div>
            <h1>Sentari AI</h1>
            <div className="cards-container">
                <ProjectCards 
                    title="Sentari AI Journal"
                    link="https://journal.withsentari.com"
                    hover="Sentari AI Journal Web App"
                >
                    <p className="desc">I have made several contributions to the Sentari AI Journal from refactors to features like the history calendar. The tools we used were <span className="tools">Next.js</span>, <span className="tools">React Native</span>, <span className="tools">Tailwind CSS</span>, <span className="tools">Python Flask</span>, and <span className="tools">Supabase</span>.<br /><br />These contributions were made as a <span className="tools">Software Development Engineer Intern</span> under <Link className="tools" href="https://withsentari.com/" target="_blank" rel="noreferrer">Sentari AI.</Link></p>
                </ProjectCards>
                <div className='project-cards'>
                    <div className='proj-details'>
                        <h3 className='title'>Sentari AI Analytics Internal Tool</h3>
                        <p className='desc'>Built and shipped an internal analytics tool that measures various analytics for the Sentari AI Journal Web App including Total User Count and Daily Active Users.<br /><br />The tool works via custom APIs on the back end written in <span className="tools">Python</span> that queries <span className="tools">Supabase</span> and reports the data to the front end using <span className="tools">Next.js</span>. We designed the tool using <span className="tools">Tailwind CSS</span>.<br /><br />This was developed while being a <span className="tools">Software Development Engineer Intern</span> under <Link className="tools" href="https://withsentari.com/" target="_blank" rel="noreferrer">Sentari AI.</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );    
}