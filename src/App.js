import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Terminal } from "./pages/terminal/Terminal";
import { Instagram } from "./pages/instagram/Instagram";
import { Tiktok } from "./pages/tiktok/Tiktok";
import { Facebook } from "./pages/facebook/Facebook";

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route index element={ <Tiktok /> } />
        <Route path="/insta-get-page" element={ <Instagram /> } />
        <Route path="/tiktok-get-page" element={ <Tiktok /> } />
        <Route path="/facebook-get-page" element={ <Facebook /> } />
        <Route path="/terminal" element={ <Terminal /> } />
        <Route path="" element={ '' } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
