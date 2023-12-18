import { Clipboard } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Logo({}: Props) {
  return (
    <div className=" flex items-center gap-2 text-white">
      <Clipboard /> <strong>db.clipboard</strong>
    </div>
  );
}
