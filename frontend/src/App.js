import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import TeamView from './pages/TeamView';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/team" element={<TeamView />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
