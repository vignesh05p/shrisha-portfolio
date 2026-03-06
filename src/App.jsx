import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Work from './components/Work/Work';
import Blog from './components/Blog/Blog';
import Tools from './components/Tools/Tools';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BlogDetail from './components/Blog/BlogDetail';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
      <Blog />
      <Tools />
      <Contact />
      <Footer />
    </>
  );
}

function BlogPage() {
  return (
    <>
      <Navbar />
      <BlogDetail />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
