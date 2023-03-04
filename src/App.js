import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPageComponent'; 
import TeslaComponent from './Components/TeslaComponent';
import MicrosoftComponent from './Components/MicrosoftComponent';
import AdobeComponent from './Components/AdobeComponent';
import BestBuyComponent from './Components/BestBuyComponent';
import WalMartComponent from './Components/WalMartComponent';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="Tesla" element={<TeslaComponent />} />
        <Route path="Microsoft" element={<MicrosoftComponent />} />
        <Route path="Adobe" element={<AdobeComponent />} />
        <Route path="BestBuy" element={<BestBuyComponent />} />
        <Route path="Walmart" element={<WalMartComponent />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
