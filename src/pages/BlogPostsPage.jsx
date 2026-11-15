import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import blogData from "../components/data/blogData";
import BlogPost from "../components/BlogPost";
import axios from "axios"; 

function BlogPostsPage() {
    const [posts, setPosts] = useState([]);
    const [liked, setLiked] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    function handleLike() {
        setLiked(!liked);
    }

    useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => setPosts(res.data))
        .catch(err => {
            console.error("Error getting posts:", err);
            setError("Unable to load the blog posts. Try again");
        })
        .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <p>Loading posts...</p>;
    }

    if (error) {
        return <p className="form-error">{error}</p>;
    }

    return (
        <div className="page-container">
            <h1>Blog Posts</h1>
            {blogData.map((post) => (
            <div className="post-card" key={post.id}>
                <BlogPost
                    post={post}
                    liked={liked}
                    onLike={handleLike}
                />
                <Link to={"/posts/" + post.id}>Read More</Link>
            </div>
            ))}
        </div>
    );
}
export default BlogPostsPage;