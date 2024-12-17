"use client"
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import Logo from "./ui/Logo";

const Navbar = () => {
  return (
    <div className=" p-5">
      <div className="flex justify-between">
        <div className="">
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>
        <div>
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
