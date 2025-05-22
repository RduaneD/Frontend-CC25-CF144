// src/components/DiagnosisFooter.jsx
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function DiagnosisFooter() {
  return (
    <footer className="bg-white border-t mt-16 px-6 py-8 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="logo" className="w-6 h-6" />
          <span className="font-bold text-green-700">HydroSmart</span>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex gap-4 text-xl">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
      <p className="text-center mt-6 text-xs">© 2025 HydroSmart. Powered by HydroTeam.</p>
    </footer>
  );
}
