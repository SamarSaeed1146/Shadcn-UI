import Image from "next/image";
import { CalendarDemo } from "./CalendarDemo";
import { TypographyH1 } from "./Heading";
import { ButtonSecondary } from "./Button";

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold pt-10">Shadcn Ui</h1>
      <div className="grid grid-cols-2 gap-5 p-5 m-7">
        <div className="flex flex-col gap-8 justify-center items-center p-5">
          <TypographyH1 />
          <div className="flex gap-8 justify-center items-center p-5">
            <ButtonSecondary text={"Search"} />
            <ButtonSecondary text={"Profile"} />
          </div>
        </div>
        <div className="flex justify-center items-center p-5">
          <CalendarDemo />
        </div>
      </div>
    </div>
  );
}
