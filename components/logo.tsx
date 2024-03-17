import { Clipboard } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Logo({}: Props) {
  return (
    <div className=" flex items-center gap-2 text-white">
      <Image
        className="w-6 h-6"
        src="/clipboard.png"
        alt="clipboard"
        width={64}
        height={64}
      />{" "}
      <strong>Clipboard Online</strong>
    </div>
  );
}
