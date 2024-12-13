"use client"
import { Ellipsis, Flower, UsersRound } from "lucide-react";
import ButtonIconComponent from "../components/ui/ButtonIcon";
import HeaderComponent from "../components/ui/Header";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  return (
    <div className="h-screen bg-white text-black rounded-t-3xl p-5 md:px-20 lg:px-40">
      <HeaderComponent text={"Pilihan Unggulan"} />
      <div className="grid grid-cols-4 md:grid-cols-6 gap-1">
        <ButtonIconComponent icon={UsersRound} text={"Pengayah"} onClick={() => router.push("/pengayah")}/>
        <ButtonIconComponent icon={Flower} text={"Pesan Banten"} onClick={() => router.push("/pesan-banten")}/>
        <ButtonIconComponent icon={Ellipsis} text={"Lainnya"}/>
      </div>
    </div>
  );
}
