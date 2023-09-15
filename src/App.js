import { Route, Routes } from "react-router-dom"
import Header from './components/Header';
import HomePage from './pages/HomePage';
import GenrePage from './pages/GenrePage';

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/genres/:genreId" element={<GenrePage />} />
      </Routes>
    </>
  );
}

export default App;
