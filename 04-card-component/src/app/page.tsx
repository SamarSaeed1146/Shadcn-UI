import CardDemo from "./Card";
import { CardWithForm } from "./Card2";

export default function Home() {
  return (
   <div>
    <h1 className="text-3xl font-bold text-center pt-5">Shadcn Ui Card Component</h1>
    <div className="w-screen h-screen flex justify-around items-center">
      <CardDemo />
      <CardWithForm />
    </div>
   </div>
  );
}
