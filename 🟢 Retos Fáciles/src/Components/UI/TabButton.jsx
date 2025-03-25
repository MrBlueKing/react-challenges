// Components/UI/TabButton.jsx
import React from 'react';
import Button from './Button';

function TabButton({ 
  isActive,
  onClick, 
  text 
}) {
  return (
    <Button 
      onClick={onClick}
      text={text}
      color="none"
      font="font-medium"
      textColor={isActive ? "text-blue-600" : "text-gray-500"}
      border={isActive ? "border-b-2" : ""}
      borderColor={isActive ? "border-blue-600" : ""}
      rounded=""
      size="py-2 px-4"
    />
  );
}

export default TabButton;