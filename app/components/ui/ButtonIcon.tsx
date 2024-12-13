import { Component, ComponentType, ElementType } from "react";

interface ButtonIconComponentProps {
  icon: ComponentType;
  text: string;
  onClick?: () => void
}
const ButtonIconComponent = ({ icon: Icon, text, onClick }: ButtonIconComponentProps) => {
  
  return ( 
    <button onClick={onClick} className="flex flex-col items-center space-y-2">
      <div className="flex w-12 justify-center items-center p-2 border border-slate-400 rounded-xl">
        <Icon />
      </div>
      <div className="text-center text-sm">
        {text}
      </div>
    </button>
   );
}
 
export default ButtonIconComponent ;