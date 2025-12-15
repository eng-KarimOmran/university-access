import type { ReactNode } from "react";

interface ICustomSection {
  title: string;
  description: string;
  children: ReactNode;
}

export default function CustomSection({
  title,
  description,
  children,
}: ICustomSection) {
  return (
    <section>
      <header className="py-5">
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </header>
      <main>{children}</main>
    </section>
  );
}
