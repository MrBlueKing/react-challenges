import React from 'react';
import RetoCard from '../UI/RetoCard';
import { Link } from 'react-router-dom';

const Main = () => {
  const retos = [
    { 
      id: 1, 
      nombre: 'Reto 1: Contador Básico', 
      imagen: 'img1.png', 
      descripcion: 'Este reto consiste en crear un contador simple que permita incrementar y decrementar su valor al hacer clic en los botones correspondientes. El objetivo es familiarizarse con el manejo del estado en React usando el hook useState.',
      tecnologias: ['React', 'useState']
    },
    { 
      id: 2, 
      nombre: 'Reto 2: Input Controlado', 
      imagen: 'img2.png', 
      descripcion: 'En este reto, crearás un formulario con un campo de texto (input) cuyo valor se actualizará en tiempo real a medida que el usuario escriba. Este ejercicio te ayudará a comprender cómo React maneja el estado y los formularios controlados.',
      tecnologias: ['React', 'useState', 'Formularios Controlados']
    }
  ];
  

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">Lista de Retos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {retos.map((reto) => (
          <div key={reto.id}>
            <Link to={`/retos/${reto.id}`}>
              <RetoCard reto={reto} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
