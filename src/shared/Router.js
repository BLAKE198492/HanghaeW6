import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Join from "../pages/Join";
import AddCard from "../pages/AddCard";
import List from "../components/List";
import Detail from "../pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Join />} />
        <Route path="/post" element={<AddCard />} />
        <Route path="/list" element={<List />} />
        <Route path="/post/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;