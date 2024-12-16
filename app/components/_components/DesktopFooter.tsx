import Link from "next/link";

const DesktopFooter = () => {
  return (
    <div className="mx-3 p-5 md:px-20 lg:px-52 grid grid-cols-2">
      <div className="flex space-x-6">
        <Link
          className="hover:text-slate-100 hover:border-collapse hover:underline transition-all"
          href={"/about"}
        >
          Tentang Kami
        </Link>
        <Link
          className="hover:text-slate-100 hover:border-collapse hover:underline transition-all"
          href={"/contact"}
        >
          Hubungi Kami
        </Link>
        <Link
          className="hover:text-slate-100 hover:border-collapse hover:underline transition-all"
          href={"/pesan-banten"}
        >
          Pesan Sekarang
        </Link>
      </div>
      <div className="flex justify-end">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Sad Guna Upakara. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default DesktopFooter;
