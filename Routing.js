import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Page1 from "./page3";
import LoginPage from "./login";

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Page2" element={<Page1 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Root;