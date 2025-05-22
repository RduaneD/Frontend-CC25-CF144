// src/components/DiagnosisBrandInfo.jsx
import React from "react";

export default function DiagnosisBrandInfo() {
  return (
    <div className="bg-white py-6 px-6 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto text-gray-600">
      <div className="flex items-center gap-3">
        <img src="/logo.svg" alt="HydroSmart logo" className="w-8 h-8" />
        <span className="font-semibold text-green-800 text-xl">HydroSmart</span>
      </div>
      <p className="mt-3 md:mt-0 text-sm text-center md:text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}
