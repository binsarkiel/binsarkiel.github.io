import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { format } from 'date-fns';

function BlogList() {
  return (
    <div className="max-w-3xl mx-auto">
      {posts.map((post) => (
        <article key={post.id} className="mb-8 bg-white p-6 rounded-lg shadow">
          <Link to={`/post/${post.id}`}>
            <h2 className="text-2xl font-bold text-gray-900 hover:text-blue-600 mb-2">
              {post.title}
            </h2>
          </Link>
          <div className="text-gray-600 mb-4">
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </div>
          <p className="text-gray-700">{post.excerpt}</p>
          <Link
            to={`/post/${post.id}`}
            className="inline-block mt-4 text-blue-600 hover:text-blue-800"
          >
            Read more →
          </Link>
        </article>
      ))}
    </div>
  );
}

export default BlogList;