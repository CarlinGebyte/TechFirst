import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AddBlog from "../Components/AddBlog";
import BlogDetail from "../Components/BlogDetail";
import Footer from "../Components/Footer";
import Home from "../Components/Home";
import Navbar from "../Components/Navbar";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/TechFirst/" element={<Home />} />
        <Route path="/TechFirst/Add" element={<AddBlog />} />
        <Route path="/TechFirst/Detail/:id" element={<BlogDetail />} />
        <Route path="/*" element={<Navigate to="/TechFirst/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
