import { DialogDemo } from "@/components/dialog";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-300 text-white h-screen">
      <h1 className="text-center text-3xl pt-4">Hello Samar Saeed</h1>
      {/* <DialogDemo /> */}
      <Hero />
    </div>
  );
}
