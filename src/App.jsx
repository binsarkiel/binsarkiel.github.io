import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/post/:id" element={<BlogPost />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;