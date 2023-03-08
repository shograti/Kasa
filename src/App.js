import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import data from './data/data.json';
import Header from './components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home houses={data} />} />
          {data.map((house) => (
            <Route path/
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
