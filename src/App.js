import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import data from './data/data.json';
import Header from './components/Header';
import slugify from './utils/slugify';
import Renting from './pages/Renting';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import About from './pages/About';

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
          <Route path="*" element={<NotFound />} />
          <Route path="/a-propos" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
