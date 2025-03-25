// RetosPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import RetoContadorBasico from '../RetosFaciles/RetoContadorBasico'; // Aquí puedes importar más componentes de reto
import RetoInputControlado from '../RetosFaciles/RetoInputControlado'; // Aquí puedes importar más componentes de reto

const RetosPage = () => {
  const { id } = useParams(); // Obtiene el ID del reto desde la URL
  
  // Aquí puedes definir un objeto con los diferentes retos y sus componentes
  const retos = {
    1: <RetoContadorBasico />,
    2: <RetoInputControlado /> 
  };

  // Verifica si existe el reto y muestra el componente adecuado
  const RetoComponente = retos[id] || <div>Reto no encontrado</div>;

  return (
    <div>
      {RetoComponente}
    </div>
  );
};

export default RetosPage;
