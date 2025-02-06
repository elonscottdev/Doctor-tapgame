import "./App.css";
import Header from "./components/layouts/Header";
import FooterNav from "./components/layouts/FooterNav";
import Home from "./components/home/Home";
import Staking from "./components/staking/Staking";
import Minting from "./components/minting/Minting";
import Reward from "./components/reward/Reward";
import Profile from "./components/profile/Profile";
import Mint_Detail from "./components/minting/Mint_Detail";


import bg_img from "./assets/bg_img.png"

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App font-roboto">


      <div className="   rounded-2xl  h-screen overflow-auto" style={{backgroundImage: `url(${bg_img})`,backgroundSize: 'cover', backgroundPosition: 'center'}}>
     
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/minting" element={<Minting />} />
            <Route path="/reward" element={<Reward />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/minting/mint_detail" element={<Mint_Detail />} />
          </Routes>
          <FooterNav/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
