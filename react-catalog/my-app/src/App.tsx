import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Catalog from './Catalog';
import ProductDetails from './ProductDetails';
import About from './About';
import NotFound from './NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Catalog />} />
        <Route path="details/:productId" element={<ProductDetails />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
