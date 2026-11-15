
import { useState } from "react";
import axios from "axios"; 

function CommentForm({ onAddComment, postId }) {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const[errorMessage, setErrorMessage]= useState(""); 

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setErrorMessage(""); 

        if (name.trim() === "" || comment.trim() === "") {
            alert("Please enter your name and comment"); 
            return;
        }
        axios.post("https://jsonplaceholder.typicode.com/posts/" + postId + "/comments", {
                name: name,
                body: comment
            })
            .then((res) => { 
                console.log(res);

                const newComment = {
                    id: res.data.id,
                    author : res.data.name,
                    text: res.data.body
                };
                onAddComment(newComment);
                setName("");
                setComment("");
            })
            .catch((error)=>{
                console.error("error submitting comment: ", error); 
                setErrorMessage("Unable to submit your comment. Try again!")
            }); 
    }

    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <h3>Leave a Comment</h3>

            <label>Name</label>
            <input
                type="text"
                value={name}
                onChange={handleNameChange}
                required
            />
            <label>Comment</label>
            <textarea
                value={comment}
                onChange={handleCommentChange}
                required
            />

            <button type="submit">Submit Comment</button>
            {errorMessage && <p className="form-error"> {errorMessage}</p>}
        </form>
    );
}
export default CommentForm; 