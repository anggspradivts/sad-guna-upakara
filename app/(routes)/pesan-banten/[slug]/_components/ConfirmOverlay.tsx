import Button from "@/app/components/ui/Button";
import { CheckSquare, X } from "lucide-react";
import { SetStateAction } from "react";

interface ConfirmOverlayProps {
  setIsShowOverlay: React.Dispatch<SetStateAction<boolean>>;
  confirmData: {
    name: string;
    selectedComponents: {
      name: string;
      img: string;
    }[];
    formData: {
      bahan: string;
      nama: string;
      alamat: string;
    };
  };
  baseData: {
    name: string;
    slug: string;
    img: string;
    description: string;
    components: {
      name: string;
      img: string;
    }[];
  };
}
const ConfirmOverlay = ({
  setIsShowOverlay,
  confirmData,
  baseData,
}: ConfirmOverlayProps) => {
  console.log(confirmData);
  return (
    <div className="bg-black bg-opacity-20 fixed inset-0 flex justify-center items-center ">
      <div className="w-5/6 h-4/6 md:w-4/6 md:h-4/6 bg-white rounded-lg p-3 px-8 md:px-10 relative">
        <div className="flex justify-center py-5 md:py-10 font-bold text-lg md:text-2xl w-full text-black">
          <h1>Konfirmasi Pesanan</h1>
        </div>
        <div>
          <div>
            <h1 className="font-semibold">{confirmData.name}</h1>
          </div>
          <div className="space-y-1">
            {baseData.components.map((item, index) => {
              return (
                <p className="flex items-center justify-between text-sm md:text-md" key={index}>
                  {item.name}{" "}
                  <span>
                    {confirmData.selectedComponents
                      .map((item) => item.name)
                      .includes(item.name) ? (
                      <CheckSquare />
                    ) : (
                      <X />
                    )}
                  </span>
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex space-x-5 justify-center absolute bottom-4 left-1/2 right-1/2">
          <Button type="submit" variant="normal" text={"Konfirmasi"} />
          <Button
            onClick={() => setIsShowOverlay(false)}
            variant="danger"
            text={"Batalkan"}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmOverlay;
