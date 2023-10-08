import React from "react";
import Logo from "./logo";
import ThemeSwitcher from "./theme-switcher";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="">
      <div className="max-w-[1200px] mx-auto p-4 flex gap-6 justify-between ">
        <Logo />

        <ThemeSwitcher />
      </div>
    </header>
  );
}
