import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BuyPage from "../pages/BuyPage/BuyPage";
import HomePage from "../pages/HomePage/HomePage";
import InfosPage from "../pages/InfosPage/InfosPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/infos/:id" element={<InfosPage />} />
        <Route path="/buypage" element={<BuyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
