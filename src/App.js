import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import PreNav from "./Components/PreNav";
import Categories from "./Pages/Categories";
import Home from "./Pages/Home";

export default function App() {
  return (
    <div className="flex flex-col items-center font-medium">
      <PreNav />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <Footer/>
    </div>
  );
}
