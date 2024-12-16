import clsx from "clsx";

interface ButtonProps {
  text: string | boolean;
  onClick?: () => void;
  type?: "submit" | "button" | undefined;
  variant: "danger" | "normal"
}
const Button = ({ text, onClick, type, variant }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        "md:w-20 lg:w-40 p-2 text-center  text-white rounded-md shadow-sm ",
        variant === "normal" && "bg-green-400 shadow-green-400",
        variant === "danger" && "bg-red-400 shadow-red-400"
      )}
    >
      {text}
    </button>
  );
};

export default Button;
