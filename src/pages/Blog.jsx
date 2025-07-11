import "./Blog.css";
import PostCard from "../components/PostCard";
import { posts } from "../data/posts";

export default function Blog() {
  return (
    <main className="main-content">
      <h2 className="section-title">All Posts</h2>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
}
