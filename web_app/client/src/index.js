import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { AppHome } from './pages/AppHome'
import { createBrowserRouter, createRoutesFromElements, Route, Routes, RouterProvider, BrowserRouter, } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <Routes>
        <Route index element={<AppHome />} />
        <Route path="/edit/:person_id" element={<AppHome />} />
        <Route path="*" element={<AppHome />} />
      </Routes>
  </BrowserRouter>
);

