// src/Pages/MainRoutes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { AllProblems } from "../Pages/AllProblems";

export const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/all-problems" element={<AllProblems />} />
    </Routes>
  );
};
