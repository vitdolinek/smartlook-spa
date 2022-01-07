import React from "react";
import Home from "../../pages/Home/Home";
import Layout from "../Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { default as UserList } from "../../pages/Users/List/List.container";
import { default as UserProfile } from "../../pages/Users/Profile/Profile.container";
import { default as PostList } from "../../pages/Posts/List/List.container";
import { default as PostDetail } from "../../pages/Posts/Detail/Detail.container";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserProfile />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
