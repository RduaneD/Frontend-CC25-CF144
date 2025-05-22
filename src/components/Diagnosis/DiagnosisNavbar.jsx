// src/components/DiagnosisNavbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function DiagnosisNavbar() {
  return (
    <nav className="bg-white px-6 py-4 shadow-md flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2">
        <img src="/logo.svg" alt="logo" className="w-6 h-6" />
        <h1 className="text-xl font-bold text-green-800">HydroSmart</h1>
      </Link>
      <Link to="/" className="text-sm text-gray-600 hover:text-green-600 transition">
        Beranda
      </Link>
    </nav>
  );
}
