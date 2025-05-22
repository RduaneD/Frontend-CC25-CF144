import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-100 text-center text-sm text-gray-500 py-6 mt-12">
      <div className="max-w-4xl mx-auto px-4">
        <p className="mb-1">
          &copy; {new Date().getFullYear()} <strong>HydroSmart</strong>. All rights reserved.
        </p>
        <p className="text-xs text-gray-400">
          Dibuat oleh Tim CC25-CF144 HydroSmart 🌿
        </p>
      </div>
    </footer>
  );
}
