import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import Feed from "./components/Feed/Feed.jsx";
import TrendingPost from "./components/TrendingPost/TrendingPost.jsx"
import Layout from "./Layout.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  Routes,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import TopUsers from "./components/TopUsers/TopUsers.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Feed />} />
      <Route path="trending-posts" element={<TrendingPost />} />
      <Route path="top-users" element={<TopUsers />} />

    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
