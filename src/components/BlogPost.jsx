import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { posts } from '../data/posts';
import { format } from 'date-fns';

function BlogPost() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h2>
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          ← Back to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <article className="bg-white p-8 rounded-lg shadow">
        <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to blog
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="text-gray-600 mb-8">
          {format(new Date(post.date), 'MMMM d, yyyy')}
        </div>
        <div className="markdown-content prose max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}

export default BlogPost;