import React from 'react';

function Button({ 
    onClick, 
    text, 
    color = "blue", 
    rounded = "rounded", 
    size = "py-2 px-4", 
    icon, 
    font = "font-bold", 
    textColor = "text-white", 
    border="border-none", 
    borderColor="border-gray-100"
}) {
    // Diccionario de colores válidos en Tailwind
    const colors = {
        blue: "bg-blue-500 hover:bg-blue-600",
        red: "bg-red-500 hover:bg-red-600",
        green: "bg-green-500 hover:bg-green-600",
        gray: "bg-gray-500 hover:bg-gray-600",
        none: "", // Para botones sin color de fondo
    };

    return (
        <button 
            onClick={onClick} 
            className={`${colors[color] || ""} ${textColor} ${font} ${size} ${rounded} inline-flex items-center 
            transition-colors cursor-pointer ${border} ${borderColor}`}
        >
            {text}
            {icon && <span className="ml-2">{icon}</span>}
        </button>
    );
}

export default Button;
