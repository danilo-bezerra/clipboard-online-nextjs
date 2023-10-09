import { LucideIcon } from "lucide-react";
import { Separator } from "../ui/separator";
import { ReactNode } from "react";

type Props = {
  title: string;
  icon?: ReactNode;
};

export default function FormHeading({ title, icon }: Props) {
  return (
    <div className="space-y-2">
      <h2 className="flex items-center gap-x-2 text-2xl font-bold text-slate-800 dark:text-slate-100">
        {icon != null && icon} {title}
      </h2>
      <Separator />
    </div>
  );
}
