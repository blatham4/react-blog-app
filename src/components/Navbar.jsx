import { Link } from "react-router-dom";
import blogData from "./data/blogData"; 

function Navbar() {
    return (
        <nav className="navbar">
            <h2>My Blog</h2>
            <div>
            <Link to="/">Blog Posts</Link>
                {blogData.map((post) => (
            <Link to={"/posts/" + post.id} 
                key={post.id}
            >
                Individual Post
            </Link>
            ))}
            <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}
export default Navbar; 