import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import InfosPage from "../pages/InfosPage/InfosPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/infos/:id" element={<InfosPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
