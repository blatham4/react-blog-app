
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CommentSection from "../components/CommentSection";
import axios from "axios"; 

function IndividualPostPage() {
  const params = useParams();

  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  function addComment(newComment) {
    setComments(previousComments=>[...previousComments, newComment]);
  }

  useEffect(() => {
    setLoading(true);
    setError("");

    axios.get("https://jsonplaceholder.typicode.com/posts/" + params.id)
      .then(res => {
        setPost(res.data); 

        return axios.get("https://jsonplaceholder.typicode.com/users/" + res.data.userId);
      })
      .then(res => {
        setUser(res.data);

        return axios.get("https://jsonplaceholder.typicode.com/users/" + params.id+ "/comments"); 
      })
      .then(res => {
        const formattedComments = res.data.map(comment=>({
          id: comment.id,
          author: comment.name,
          text: comment.body
        })); 
        setComments(formattedComments);
      })
      .catch(err=>{
        console.error("Error getting data: ", err); 
        setError("Unable to load this blog post.")
      })
      .finally(()=> setLoading(false)); 
    }, [params.id]);
    

  if (loading) {
    return (
      <div className="page-container">
        <p>Loading post...</p>
      </div>
    );
  }
  if(error){ 
    return(
      <div className="page-container">
        <p className="form-error">{error}</p>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="page-container">
        <h1>Blog Post Not Found</h1>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="individual-post">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <p><strong>Author:</strong> {user && user.name}</p>
        <p><strong>Email:</strong> {user && user.email}</p>
        <hr />

        <CommentSection
          comments={comments}
          onAddComment={addComment}
          postId={params.id}
        />
      </div>
    </div>
  );
}
export default IndividualPostPage;