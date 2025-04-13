import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import TeamView from './pages/TeamView';
import Footer from './components/footer';
import Navbar from './components/navbar';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import Stack from './pages/stack';




function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/team" element={<TeamView />} />
        <Route path="/tech-stack" element={<Stack />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
