import Image from "next/image";

const Logo = () => {
  return (
    <div className=" flex space-x-2">
      <Image
        alt="logo"
        src={"/logo-sad-guna-upakara.png"}
        width={30}
        height={30}
      />
      <span>SAD GUNA UPAKARA</span>
    </div>
  );
};

export default Logo;
