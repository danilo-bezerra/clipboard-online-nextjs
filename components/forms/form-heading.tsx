import React from "react";

type Props = {
  title: string;
};

export default function FormHeading({ title }: Props) {
  return (
    <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
      {title}
    </h2>
  );
}
