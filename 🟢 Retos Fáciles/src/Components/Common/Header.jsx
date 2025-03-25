import React from 'react';
import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Header({ text }) {
  return (
    <header className="flex items-center justify-center p-4 bg-blue-600 text-white relative">
      {/* Icono alineado a la izquierda */}
      <Link to="/" className='absolute left-1 flex items-center'>
        <IoHome
          className="absolute left-15 text-4xl hover:text-gray-300 transition-all duration-300 cursor-pointer "
        />
      </Link>

      {/* Texto completamente centrado */}
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold rounded-lg px-6 py-2">
        {text}
      </h1>
    </header>
  );
}

export default Header;
