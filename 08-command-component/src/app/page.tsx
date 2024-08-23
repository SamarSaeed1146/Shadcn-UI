import Image from "next/image";
import { CommandDemo } from "./Command";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center pt-5">Command Component In Shadcn Ui</h1>
      <div className="p-5">
        <CommandDemo />
      </div>
    </div>
  );
}
