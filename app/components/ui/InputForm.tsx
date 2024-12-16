interface InputFormProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label?: string;
  placeholder?: string;
  note?: string;
}
const InputForm = ({ onChange, name, label, placeholder, note }: InputFormProps) => {
  return (
    <div className="w-full flex flex-col">
      <label htmlFor="">{label}</label>
      <p className="text-sm md:text-md italic text-slate-300">{note}</p>
      <div className="h-[35px] ">
        <input
          onChange={onChange}
          type="text"
          name={name}
          id=""
          placeholder={placeholder}
          className=" p-2 border-2 border-slate-300 w-full h-full rounded focus:outline-none"
        />
      </div>
    </div>
  );
};

export default InputForm;
