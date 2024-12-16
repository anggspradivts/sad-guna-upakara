"use client";
import Button from "@/app/components/ui/Button";
import HeaderComponent from "@/app/components/ui/Header";
import { dataBanten } from "@/app/data/bantenData";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PesanBantenPage = () => {
  const [viewBanten, setViewBanten] = useState(10);
  return (
    <div className="bg-white text-black rounded-t-3xl p-5 md:px-20 lg:px-52 pb-20">
      <div className="space-y-5">
        <HeaderComponent text={"Pilihan Banten"} />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {dataBanten.slice(0, viewBanten).map((item, index) => {
            return (
              <Link key={index} href={`/pesan-banten/${item.slug}`}>
                <div className="flex flex-col w-full h-[200px] overflow-hidden rounded-lg border border-slate-300 shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="w-full h-4/6 flex  justify-center items-center bg-slate-200 ">
                    {item.img ? (
                      <Image
                        alt="banten-image"
                        src={`/images/${item.img}`}
                        width={300}
                        height={500}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <ImageIcon />
                    )}
                  </div>
                  <div className="h-2/6 p-2 font-bold">{item.name}</div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center items-center">
          {dataBanten.length >= viewBanten && (
            <Button
              text={"Lihat lebih"}
              onClick={() => setViewBanten((prev) => prev + 10)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PesanBantenPage;
