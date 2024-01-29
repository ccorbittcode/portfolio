import './App.css'
import './index.css'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Experience from './pages/Experience.jsx'
import Projects from './pages/Projects.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Home from './pages/Home.jsx'
import Layout from './Layout.jsx'
import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <RoutesWithTransition />
    </Router>
  );
}

function RoutesWithTransition() {
  const location = useLocation();

  return (

    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout location={location} />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<Experience />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>

  );
}

export default App
