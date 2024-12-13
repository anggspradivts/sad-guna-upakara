import { Contact, Info, Phone } from "lucide-react";

const MobileFooter = () => {
  const list = [
    {
      name: "Info",
      icon: Info,
    },
    {
      name: "Contact",
      icon: Phone,
    },
    {
      name: "Info",
      icon: Info,
    },
    {
      name: "Info",
      icon: Info,
    },
  ];
  return (
    <div className="bg-transparent fixed flex justify-center p-2 w-full bottom-0 right-0 z-[9999] h-[70px]">
      <div className=" bg-green-400 rounded-full w-full h-full grid grid-cols-4 shadow-2xl">
        {list.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex justify-center items-center">
              <button>
                <Icon size={30} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileFooter;
