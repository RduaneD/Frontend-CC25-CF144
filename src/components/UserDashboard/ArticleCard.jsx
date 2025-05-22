import React from "react";

export default function ArticleCard({ title, image, excerpt }) {
  return (
    <div className="bg-green-50 shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 group">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-green-700 transition">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-4">{excerpt}</p>
        <button className="inline-block text-sm font-medium text-green-600 hover:text-green-800 transition">
          Baca Selengkapnya →
        </button>
      </div>
    </div>
  );
}