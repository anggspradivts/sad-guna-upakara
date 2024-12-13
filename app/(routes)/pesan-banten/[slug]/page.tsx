"use client";

import HeaderComponent from "@/app/components/ui/Header";
import { dataBanten } from "@/app/data/bantenData";
import clsx from "clsx";
import { ImageIcon, SquareCheck, SquareX } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

const BantenSlug = () => {
  const params = useParams();
  const slug = params.slug;

  const [notIncludedData, setNotIncludedData] = useState<string[] | null>(null);
  const findData = dataBanten.find((item) => item.slug === slug);

  const handleNotIncludedData = (name: string) => {
    setNotIncludedData((prev) =>
      prev
        ? prev.includes(name)
          ? prev.filter((item) => item !== name)
          : [...prev, name]
        : [name]
    );
  };

  if (!findData) {
    return <div>not found</div>;
  }

  return (
    <div className="bg-white text-black rounded-t-3xl p-5 md:px-[80px] lg:px-[250px] pb-20">
      <div className="space-y-5">
        <div>
          <div className="bg-slate w-full h-[350px] flex justify-center items-center rounded-lg overflow-hidden bg-slate-200">
            {findData.img ? (
              <Image alt="banten" src={findData.img} />
            ) : (
              <ImageIcon />
            )}
          </div>
          <HeaderComponent text={findData.name} />
          <div className="space-y-3">
            <p className="font-bold italic">Sudah include item berikut:</p>
            <p className="italic text-slate-400 text-sm md:text-md">
              Bebas kustumoisasi apakah ingin include item berikut atau tidak
            </p>
            <div className="flex flex-col space-y-3">
              {findData.components.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleNotIncludedData(item.name)}
                    className={clsx(
                      "flex h-[70px] md:h-[100px] w-full border-2 rounded-md transition-all duration-300",
                      notIncludedData?.includes(item.name) ? "border-red-300 translate-x-2" : "border-green-400 shadow-greem-400 shadow-sm"
                    )}
                  >
                    <div className="flex w-full">

                    <div className="w-2/6 bg-slate-100 flex justify-center items-center">
                      {item.img ? (
                        <Image
                          alt="component-img"
                          src={item.img}
                          height={100}
                          width={100}
                        />
                      ) : (
                        <ImageIcon />
                      )}
                    </div>
                    <div className="p-1 md:p-3">{item.name}</div>
                    </div>
                    <div className="">
                      {notIncludedData?.includes(item.name) ? <SquareX className="text-red-300" /> : <SquareCheck className="text-green-400" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BantenSlug;
