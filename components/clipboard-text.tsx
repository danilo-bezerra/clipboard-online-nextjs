"use client";

import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Check, Copy, X } from "lucide-react";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

type Props = {
  text?: string;
  onClose: () => void;
};

export default function ClipboardText({ text, onClose }: Props) {
  async function handleCopy() {
    if (text) {
      await window.navigator.clipboard.writeText(text);

      toast.success("Copiado!");
    }
  }

  if (!text) {
    return null;
  }

  return (
    <div className="">
      <Alert>
        <div className="flex gap-x-4 justify-between items-center mb-4">
          <AlertTitle className="flex items-center gap-x-2 ">
            <Check className="h-6 w-6 " color="#00aa55" />
            Resultado
            <Button
              variant="ghost"
              size="sm"
              className="border"
              onClick={handleCopy}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </AlertTitle>

          <Button
            variant="outline"
            size="sm"
            className="text-red-500 "
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <AlertDescription className="bg-neutral-100 dark:bg-slate-800 rounded-md p-4">
          {text.split("\n").map((t, i) => (
            <p key={i}>{t}</p>
          ))}
        </AlertDescription>
      </Alert>
    </div>
  );
}
