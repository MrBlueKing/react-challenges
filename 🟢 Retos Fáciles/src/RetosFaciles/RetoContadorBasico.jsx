import { useEffect, useState } from 'react';
import '../App.css';
import Header from '../Components/Common/Header';
import Button from '../Components/UI/Button';
import TabButton from '../Components/UI/TabButton';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


// Definimos los componentes fuera de RetoContadorBasico
const Display = (props) => {
  return(
    <div>
      <p className='pb-5 text-2xl'>Contador: {props.counter}</p>
    </div>
  );
}

function RetoContadorBasico() {
  //Manejan el estado del contador
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () => setCounter(counter - 1);
  const resetCounter = () => setCounter(0);

  //Maneja los efecto de cambios.
  const [flash, setFlash] = useState(false);

  //Maneja el estado del panel.
  const [isPanelExpanded, setIsPanelExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('visual');


  // Cuando el contador cambie, activar el efecto
  useEffect(() => {
    setFlash(true);
    const timer = setTimeout(() => setFlash(false), 300); // Duración del efecto
    return () => clearTimeout(timer); // Limpiar el timeout si se desmonta el componente
  }, [counter]); // Se ejecuta cuando `counter` cambia

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header text={"Contador Básico"} />

      {/* Main */}
      <main className="flex-1 p-4 flex justify-center ">
        <div className="bg-gray-200 border-2 border-blue-500 p-6 rounded-lg shadow-lg h-full max-h-min">
          <div>
            App Component
          </div>
          <h1 className="text-3xl font-bold underline pb-6 text-center">
            Reto 1: Contador Básico
          </h1>
          <Display counter={counter} />
          <div className="flex flex-col gap-4">
            <Button onClick={incrementCounter} text="Incrementar Valor" color={"blue"} />
            <Button onClick={decrementCounter} text="Disminuir Valor" color={"blue"} />
            <Button onClick={resetCounter} text="Restablecer Valor"color={"blue"} />
            
            {/* Botón para expandir/colapsar el panel */}
            <div className="mt-8 text-center">
              <Button 
                  onClick={() => setIsPanelExpanded(!isPanelExpanded)} 
                  text={isPanelExpanded ? "Ocultar explicación" : "Explorar cómo funciona"} 
                  color="green" 
                  rounded="rounded-full" 
                  size="py-2 px-6"
                  icon={isPanelExpanded ? <FaChevronDown size={18} /> : <FaChevronUp size={18} />}
              />
            </div>
          </div>
        </div>
      </main>
      {/* Panel expandible */}
      <div
        className={`bg-gray-100 border-t border-gray-200 shadow-inner transition-all duration-500 ease-in-out overflow-hidden transform ${
          isPanelExpanded 
            ? 'max-h-screen opacity-100 scale-100 py-6' 
            : 'max-h-0 opacity-0 scale-95 py-0'
        }`}
      >
        <div className="container mx-auto px-4">
          {/* Pestañas de navegación */}
          <div className="flex border-b border-gray-200 mb-4">
            <TabButton 
              isActive={activeTab === 'visual'}
              onClick={() => setActiveTab('visual')}
              text="Vista visual"
            />
            <TabButton 
              isActive={activeTab === 'code'}
              onClick={() => setActiveTab('code')}
              text="Código"
            />
            <TabButton 
              isActive={activeTab === 'concepts'}
              onClick={() => setActiveTab('concepts')}
              text="Conceptos"
            />
          </div>
          
          {/* Contenido de las pestañas */}
          <div className="pb-6">
            {activeTab === 'visual' && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Visualización Interactiva</h2>
                
                {/* Aquí iría el componente de visualización interactiva */}
                <div className={`border-2 border-blue-500 rounded-lg p-4 mb-4 relative transition-all duration-300 
                  ${flash ?"border-blue-800 shadow-lg shadow-blue-300" : "border-blue-500"}`}
                >
                  <div className="absolute -top-3 left-4 bg-blue-500 text-white px-2 py-0.5 rounded-md">
                    App Component
                  </div>
                  
                  <div className="border-2 border-gray-300 rounded-lg p-3 mb-4">
                    <div className="font-mono mb-2">useState({counter})</div>
                    <div className="flex items-center">
                      <div className="mr-2">counter = </div>
                      <div className="bg-gray-100 px-2 py-1 rounded font-mono">{counter}</div>
                    </div>
                  </div>
                  
                  {/* Componentes simplificados para la visualización */}
                  <div className="border-2 border-green-500 rounded-lg p-3 mb-4">
                    <div>Display Component</div>
                    <div className="font-mono">props.counter = {counter}</div>
                  </div>
                  
                  <div className="flex gap-2 flex-wrap">
                    <div className="border-2 border-purple-500 rounded-lg p-3">
                      <div>Button Component</div>
                      <div className="font-mono text-sm">onClick → incrementCounter</div>
                    </div>
                    <div className="border-2 border-purple-500 rounded-lg p-3">
                      <div>Button Component</div>
                      <div className="font-mono text-sm">onClick → decrementCounter</div>
                    </div>
                    <div className="border-2 border-purple-500 rounded-lg p-3">
                      <div>Button Component</div>
                      <div className="font-mono text-sm">onClick → resetCounter</div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p>Prueba los botones y observa cómo fluyen los datos en la aplicación:</p>
                  <ol className="list-decimal pl-5 mt-2 space-y-1">
                    <li>El clic del botón ejecuta la función correspondiente</li>
                    <li>La función actualiza el estado con setCounter()</li>
                    <li>React re-renderiza el componente</li>
                    <li>El nuevo valor se propaga a los componentes hijos</li>
                  </ol>
                </div>
              </div>
            )}
            
            {activeTab === 'code' && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Código del Contador</h2>
                <div className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
                    {`import { useState } from 'react';

// Component for displaying the counter value
const Display = (props) => {
  return (
    <div>
      <p className='pb-5 text-2xl'>Contador: {props.counter}</p>
    </div>
  );
}

// Reusable Button component
const Button = (props) => {
  return (
    <button 
      onClick={props.onClick} 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <h1>{props.text}</h1>
    </button>
  );
}

function RetoContadorBasico() {
  // State declaration using useState hook
  const [counter, setCounter] = useState(0);
  
  // Event handler functions
  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () => setCounter(counter - 1);
  const resetCounter = () => setCounter(0);
  
  return (
    <div>
      <Display counter={counter} />
      <div className="flex flex-col gap-4">
        <Button onClick={incrementCounter} text="Incrementar Valor" />
        <Button onClick={decrementCounter} text="Disminuir Valor" />
        <Button onClick={resetCounter} text="Restablecer Valor" />
      </div>
    </div>
  );
}`}
                  </pre>
                </div>
              </div>
            )}
            
            {activeTab === 'concepts' && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Conceptos de React</h2>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <h3 className="font-bold text-lg">Componentes</h3>
                    <p>Los componentes son piezas reutilizables de la interfaz de usuario. En este ejemplo tenemos tres componentes: <code>ContadorBasico</code>, <code>Display</code> y <code>Button</code>.</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <h3 className="font-bold text-lg">Estado (useState)</h3>
                    <p>El estado es memoria que persiste entre renderizados. <code>useState</code> es un Hook que permite añadir estado a los componentes funcionales.</p>
                    <p className="mt-1">Devuelve un par: el valor actual y una función para actualizarlo.</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4 py-2">
                    <h3 className="font-bold text-lg">Props</h3>
                    <p>Props son argumentos que se pasan a los componentes React. Permiten la comunicación entre componentes padres e hijos.</p>
                    <p className="mt-1">En este ejemplo, pasamos <code>counter</code> como prop al componente <code>Display</code>, y <code>onClick</code> y <code>text</code> al componente <code>Button</code>.</p>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4 py-2">
                    <h3 className="font-bold text-lg">Renderizado</h3>
                    <p>Cada vez que el estado cambia, React vuelve a renderizar el componente y sus hijos. Este proceso es automático y eficiente.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-500 text-white p-4">
        <p className="text-center">© Mr Blue Dev</p>
      </footer>
    </div>
  );
}

export default RetoContadorBasico;
