interface HeaderComponentProps {
  text: string;
}
const HeaderComponent = ({ text }: HeaderComponentProps) => {
  return (
    <div className="py-5 md:py-10 font-bold text-lg md:text-2xl w-full text-black">
      {text}
    </div>
  );
};

export default HeaderComponent;
