import Image from "next/image";
import { AlertDialogDemo } from "./AlertDialog";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center pt-5">Shadcn Ui</h1>
      <div className="p-10">
        <AlertDialogDemo />
      </div>
    </div>
  );
}
