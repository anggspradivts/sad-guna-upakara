interface ButtonProps {
  text: string | boolean;
  onClick?: () => void;
  type?: "submit";
}
const Button = ({ text, onClick, type }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="md:w-20 lg:w-40 p-2 text-center bg-green-400 text-white rounded-md shadow-sm shadow-green-400 "
    >
      {text}
    </button>
  );
};

export default Button;
