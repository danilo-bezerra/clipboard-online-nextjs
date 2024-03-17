import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="p-6 bg-neutral-200 dark:bg-slate-800">
      <p className="text-center text-sm ">
        Criado por{" "}
        <a
          className="hover:underline transition-all"
          href="https://github.com/danilo-bezerra"
          target="_blank"
        >
          <strong>Danilo Bezerra</strong>
        </a>
      </p>
    </footer>
  );
}
