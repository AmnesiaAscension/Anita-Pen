
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from './components.tsx';
import Home from './pages/Home.tsx';
import Author from './pages/Author.tsx';
import Books from './pages/Books.tsx';
import BookDetail from './pages/BookDetail.tsx';
import Shop from './pages/Shop.tsx';
import Events from './pages/Events.tsx';
import Blog from './pages/Blog.tsx';
import PostDetail from './pages/PostDetail.tsx';
import Contact from './pages/Contact.tsx';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/author" element={<Author />} />
            <Route path="/books" element={<Books />} />
            <Route path="/book/:id" element={<BookDetail />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:slug" element={<PostDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
