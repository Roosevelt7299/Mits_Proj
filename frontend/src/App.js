import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MithunPortfolio from './MithunPortfolio';
import KumariPage from './KumariPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MithunPortfolio />} />
        <Route path="/kumari" element={<KumariPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
