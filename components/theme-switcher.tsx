"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

type Props = {};

type Theme = "dark" | "light";

export default function ThemeSwitcher({}: Props) {
  const [theme, setTheme] = useState<Theme>("dark");

  function toggleTheme() {
    const newTheme = theme == "dark" ? "light" : "dark";

    localStorage.setItem("@theme", newTheme);
    setTheme(newTheme);
    document.body.classList.toggle("dark");
  }

  useEffect(() => {}, []);

  return (
    <Button onClick={toggleTheme} variant="ghost">
      {theme == "dark" ? (
        <Moon className="w-6 h-6" />
      ) : (
        <Sun className="w-6 h-6" />
      )}
    </Button>
  );
}
