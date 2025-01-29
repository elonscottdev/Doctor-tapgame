import "./App.css";
import Header from "./components/layouts/Header";
import FooterNav from "./components/layouts/FooterNav";
import Home from "./components/home/Home";
import Staking from "./components/staking/Staking";
import Minting from "./components/minting/Minting";
import Reward from "./components/reward/Reward";
import Profile from "./components/profile/Profile";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/minting" element={<Minting />} />
          <Route path="/reward" element={<Reward />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <FooterNav />
      </BrowserRouter>
    </div>
  );
}

export default App;
