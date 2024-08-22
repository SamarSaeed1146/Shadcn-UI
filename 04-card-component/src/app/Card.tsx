import { Card } from "@/components/ui/card";
import Image from "next/image";
import sanity from "../../public/sanity img.png";

const CardDemo = () => {
  return (
    <Card className="group duration-500 w-[400px] hover:w[450px] hover:bg-blue-300 hover:p-8 p-6 divide-x-2 divide-slate-300 flex justify-start items-center">
      <Image
        src={sanity}
        alt="user"
        width={100}
        height={100}
        className="w-[50px] duration-500 h-[50px] rounded-full mr-3 group-hover:opacity-30"
      />
      <p className="pl-3 group-hover:pl-10 w-full group-hover:text-white duration-500">Sanity</p>
    </Card>
  );
};

export default CardDemo;
