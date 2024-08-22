import { Button } from "@/components/ui/button"

export function ButtonSecondary({text}:{text:string}) {
  return <Button className="bg-slate-200" variant="secondary">{text}</Button>
}
