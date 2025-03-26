import { PostCard } from './components/post';
import './blog.css';

export default function BlogPage() {
    return (
        <div className='blog-page'>
            <div className='posts-section'>
                <PostCard />
            </div>
        </div>
    );
}
