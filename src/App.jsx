import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Blog from './pages/Blog';
import Home from './pages/Home.jsx';
import Special from './pages/Special';
import CourseWork from './pages/CourseWork';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trabajo-especial" element={<Special />} />
        <Route path="/trabajos-del-curso" element={<CourseWork />} />
      </Routes>
    </>
  );
}

export default App;
