function BlogPost({ post, liked, onLike }) {
  return (
    <article className="blog-post" id="home">
      <p className="post-label">LATEST POST</p>

      <h2>{post.title}</h2>

      <p className="post-info">
        By {post.author} | {post.date}
      </p>

      <div className="post-content">
        <p>{post.content}</p>
      </div>

      <button className="like-button" onClick={onLike}>
        {liked ? "♥ Liked" : "♡ Like"}
      </button>
    </article>
  );
}
export default BlogPost;