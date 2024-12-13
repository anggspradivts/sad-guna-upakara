interface ButtonProps {
  text: string | boolean;
  onClick?: () => void
}
const Button = ({text, onClick}: ButtonProps) => {
  return ( 
    <button onClick={onClick} className="md:w-20 lg:w-40 p-2 text-center bg-slate-100 rounded-md shadow-md">
      {text}
    </button>
   );
}
 
export default Button;