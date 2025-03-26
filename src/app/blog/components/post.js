import './post-card.css';
import blogPosts from '../../../../data/posts.json';

export function PostCard() {
    // Grabbing the blog posts
    const convertToUTC = (dateStr) => { // Converting the given time
        const localDate = new Date(dateStr);
        return localDate.toISOString();
    }

    const getTimeAgo = (dateStr) => {
        const date = new Date(convertToUTC(dateStr));
        const now = new Date();
        const diff = now - date; // in milliseconds

        // Converting time as needed
        const sec = Math.floor(diff / 1000);
        const min = Math.floor(sec / 60);
        const hr = Math.floor(min / 60);
        const day = Math.floor(hr / 24);

        // Formatting for return string
        if (sec < 60) return `${sec}s`;
        if (min < 60) return `${min}m`;
        if (hr < 60) return `${hr}h`;
        return `${day}d`;
    }

    const reversePosts = blogPosts.length > 0 ? [...blogPosts].reverse(): [];


    return (
        <>
            {reversePosts.map((post) => (
                <div key={post.id} className='post-card'>
                    <div className='heading'>
                        <h2>{post.title}</h2>
                        <p className='time-since'>{getTimeAgo(post.datetime)}</p>
                    </div>
                    <p>
                        {post.content.split("\n").map((line, idx) => (
                            <span key={idx}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </p>
                </div>
            ))}
        </>
    );
}
