import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import data from './data/data.json';
import Header from './components/Header';
import slugify from './utils/slugify';
import Renting from './pages/Renting';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home houses={data} />} />
          {data.map((house, index) => (
            <Route
              key={index}
              path={`/${slugify(house.title)}`}
              element={<Renting house={house} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
