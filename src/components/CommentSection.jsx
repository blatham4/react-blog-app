import CommentForm from "./CommentForm"

function CommentSection({ comments, onAddComment, postId }) {
  return (
    <section className="comments-section">
      <CommentForm 
      onAddComment={onAddComment} 
      postId={postId}
      />
      <h2>Comments ({comments.length})</h2>
      {comments.length === 0 ? (
      <p>No comments yet. Be the first to comment!</p>
      ) : (
      comments.map((comment) => (
      <div className="comment" key={comment.id}>
        <h3>{comment.author}</h3>
        <p>{comment.text}</p>
        </div>
       ))
    )}
  </section>
  );
}

export default CommentSection;