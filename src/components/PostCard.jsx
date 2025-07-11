import "./PostCard.css";

export default function PostCard({ post }) {
  return (
    <section className="blog-card">
      <img src={post.image} alt="Imagen del post" />
      <div className="blog-info">
        <p className="author">
          {post.author} · {post.date} · {post.readTime}
        </p>
        <h3 className="blog-title">{post.title}</h3>
        <p className="blog-summary">{post.summary}</p>
      </div>
    </section>
  );
}
