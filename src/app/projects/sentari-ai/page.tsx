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
                    <p className="desc">I have made several contributions to the Sentari AI Journal as an SDE Intern. The tools we used were <span className="tools">Next.js</span>, <span className="tools">React Native</span>, <span className="tools">Tailwind CSS</span>, <span className="tools">Python Flask</span>, and <span className="tools">Supabase</span>.<br /><br />These contributions were made as a <span className="tools">Software Development Engineer Intern</span> under <Link className="tools" href="https://withsentari.com/" target="_blank" rel="noreferrer">Sentari AI.</Link></p>
                </ProjectCards>
                <div className='project-cards'>
                    <div className='proj-details'>
                        <h3 className='title'>Sentari AI Analytics Internal Tool</h3>
                        <p className='desc'>Led the initial development on this. This tool measures various analytics for the Sentari AI Journal Web App including Total User Count, Daily Active Users, and the Number of Users that stay as Users within 7 days of starting.<br /><br />These contributions were made as a <span className="tools">Software Development Engineer Intern</span> under <Link className="tools" href="https://withsentari.com/" target="_blank" rel="noreferrer">Sentari AI.</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );    
}