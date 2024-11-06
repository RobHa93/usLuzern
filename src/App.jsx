import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AboutTeam from './Pages/AboutTeam';
import Kontakt from './Pages/Kontakt';
import Shop from './Pages/Shop';
import SignIn from './Pages/SignIn';
import ShopItemPage from './Pages/ShopItemPage';

//routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-team" element={<AboutTeam />} />
        <Route path="/Kontakt" element={<Kontakt />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/shop-items" element={<ShopItemPage />} />

      </Routes>
    </Router>
  );
}

export default App;
