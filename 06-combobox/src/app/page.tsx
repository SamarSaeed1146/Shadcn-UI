import Image from "next/image";
import { ComboboxDemo } from "./Combobox";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center pt-5">Shadcn Ui Combobox</h1>
      <div className="flex justify-center">
        <ComboboxDemo />
      </div>
    </div>
  );
}
