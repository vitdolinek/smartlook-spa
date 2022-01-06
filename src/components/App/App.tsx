import React from "react";
import Home from "../../pages/Home/Home";
import Layout from "../Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListContainer from "../../pages/Users/List/List.container";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/users" element={<ListContainer />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
