import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          My Markdown Blog
        </Link>
      </div>
    </header>
  );
}

export default Header;