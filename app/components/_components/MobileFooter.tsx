"use client"
import { Home, Info, PersonStanding, Phone } from "lucide-react";
import { useRouter } from "next/navigation";

const MobileFooter = () => {
  const router = useRouter();
  const list = [
    {
      name: "Info",
      icon: Home,
      link: "/"
    },
    {
      name: "Contact",
      icon: Phone,
      link: "/contact"
    },
    {
      name: "Tentang Kami",
      icon: Info,
      link: "/tentang-kami"
    },
    {
      name: "Bergabung bersama kami",
      icon: PersonStanding,
      link: "/bergabung"
    },
  ];

  return (
    <div className="bg-transparent fixed flex justify-center p-2 w-full bottom-0 right-0 z-[9999] h-[70px]">
      <div className=" bg-green-400 rounded-full w-full h-full grid grid-cols-4 shadow-2xl">
        {list.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex justify-center items-center">
              <button onClick={() => router.push(`${item.link}`)}>
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
