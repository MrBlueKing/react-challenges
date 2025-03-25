import { useState } from 'react'; // useState es un hook de react
import Header from '../Components/Common/Header';

function RetoInputControlado() {
  // Estado para almacenar el valor del input
  const [text, setText] = useState("");

  // Función para manejar el cambio del input
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header text={"Input Controlado"} />

      <main className="flex-1 p-4">
        <div className="flex space-x-4">
          <div className="bg-gray-200 p-4 flex-1">
            <p className="mb-4">Escribe algo en el campo de texto para activar la función.</p>

            {/* Input con evento onInput */}
            <input 
              type="text" 
              value={text} 
              onInput={handleInputChange} 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
              focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
              dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Texto..." 
              required 
            />

            {/* Mostrar el texto ingresado */}
            <p className="mt-4">Lo que estas escribiendo: {text}</p>
          </div>
        </div>
      </main>

      <footer className="bg-blue-500 text-white p-4">
        <p className="text-center">©Mr Blue Dev</p>
      </footer>
    </div>
  );
}

export default RetoInputControlado;
