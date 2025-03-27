import { PostCard } from './components/post';
import { NavBar } from '../components/NavBar';
import { MobileNavBar } from '../components/MobileNavBar';
import { BackButton } from '../components/BackButton';
import './blog.css';

export default function BlogPage() {
    return (
        <>
            <div className='navbar-container'>
                <NavBar />
            </div>
            <div className='mbl-navbar-container'>
                <MobileNavBar />
            </div>
            <BackButton />
            <div className='blog-page'>
                <div className='posts-section'>
                    <PostCard />
                </div>
            </div>
        </>
    );
}
