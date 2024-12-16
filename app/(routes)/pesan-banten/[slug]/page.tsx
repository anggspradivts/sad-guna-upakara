"use client";

import Button from "@/app/components/ui/Button";
import HeaderComponent from "@/app/components/ui/Header";
import InputForm from "@/app/components/ui/InputForm";
import { dataBanten } from "@/app/data/bantenData";
import { Banten } from "@/types/banten";
import clsx from "clsx";
import { ImageIcon, ShoppingCart, SquareCheck, SquareX } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const BantenSlug = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug;
  const findData: Banten = dataBanten.find((item) => item.slug === slug);
  if (!findData) return <div>not found</div>;

  const [notIncludedComponents, setNotIncludedComponents] = useState<
    string[] | null
  >(null);
  const [formData, setFormData] = useState({
    bahan: "",
    nama: "",
    alamat: "",
  });

  const handleNotIncludedData = (name: string) => {
    setNotIncludedComponents((prev) =>
      prev
        ? prev.includes(name)
          ? prev.filter((item) => item !== name)
          : [...prev, name]
        : [name]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = {
      name: findData.name,
      components: findData.components.filter(
        (item) => !notIncludedComponents?.includes(item.name)
      ).map((item) => item.name).join(", "),
    };
    const whatsappMessage = `Nama: ${formData.nama}, Request bahan: ${formData.bahan ? formData.bahan : "-"}, Alamat: ${formData.alamat}, Pesanan: ${form.name}, sudah include: ${form.components}. `;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_CLIENT}?text=${encodedMessage}&app_absent=0`;
    window.open(whatsappURL, "_blank");
    console.log(encodedMessage);
  };

  return (
    <div className="bg-white text-black rounded-t-3xl p-5 md:px-[80px] lg:px-[250px] pb-20">
      <div className="space-y-5">
        <div className="bg-slate w-full h-[350px] md:h-[400px] flex justify-center items-center rounded-lg overflow-hidden bg-slate-200">
          {findData.img ? (
            <Image
              alt="banten-image"
              src={`/images/${findData.img}`}
              width={500}
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
        <div className="flex justify-between items-center">
          <HeaderComponent text={findData.name} />
          <div>
            <button
            // onClick={() => handleAddToCart("Keranjang", findData.slug)}
            >
              <ShoppingCart />
            </button>
          </div>
        </div>
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
                    "flex h-[70px] md:h-[130px] w-full border-2 rounded-md transition-all duration-300 overflow-hidden",
                    notIncludedComponents?.includes(item.name)
                      ? "border-red-300 translate-x-2"
                      : "border-green-400 shadow-greem-400 shadow-sm"
                  )}
                >
                  <div className="flex w-full">
                    <div className="w-2/6 bg-slate-100 flex justify-center items-center">
                      {item.img ? (
                        <Image
                          alt="komponen-image"
                          src={`/${item.img}`}
                          width={500}
                          height={500}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <ImageIcon />
                      )}
                    </div>
                    <div className="p-1 md:p-3 flex justify-between">{item.name}</div>
                  </div>
                  <div className="">
                    {notIncludedComponents?.includes(item.name) ? (
                      <SquareX className="text-red-300" />
                    ) : (
                      <SquareCheck className="text-green-400" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div id="form" className="mt-10 mx-0 md:mx-40">
        <form action="" className="space-y-3" onSubmit={handleSubmit}>
          <InputForm
            label="Bahan"
            note="Isi dengan bahan yang ingin di request dalam banten (kosongkan jika tidak ingin)"
            name="bahan"
            placeholder="Special request bahan pembuatan"
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                bahan: e.target.value,
              }))
            }
          />
          <InputForm
            label="Nama"
            note="Masukan nama lengkap."
            name="nama"
            placeholder="Nama pemesan"
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                nama: e.target.value,
              }))
            }
          />
          <InputForm
            label="Alamat"
            note="Masukan alamat lengkap"
            name="alamat"
            placeholder="e.g Jalan tukad cangkir, perumahan blabla, kecamatan bla, kabupaten bla."
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                alamat: e.target.value,
              }))
            }
          />
          <div className="flex justify-center w-full">
            <Button text={"Pesan"} type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BantenSlug;
