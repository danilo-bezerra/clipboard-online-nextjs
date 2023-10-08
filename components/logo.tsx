import Image from "next/image";
import React from "react";

type Props = {};

export default function Logo({}: Props) {
  return (
    <Image src="logo.svg" width={200} height={48} alt="logo" className="h-10" />
  );
}
