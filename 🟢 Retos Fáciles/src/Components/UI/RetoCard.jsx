import React from 'react';

function RetoCard({ reto }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95">
      <img
        src={`/Assets/${reto.imagen}`}
        alt={reto.nombre}
        className="w-full h-40 object-contain rounded-md"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{reto.nombre}</div>
        <p className="text-gray-700 text-base">
        {reto.descripcion}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center justify-between">
        {reto.tecnologias.map((tech, index) => (
          <span
            key={index} // O puedes usar reto.id si es único
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default RetoCard;
