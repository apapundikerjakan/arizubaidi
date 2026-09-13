"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        show
          ? "translate-y-0 border-b border-bone/10 bg-ink/85 opacity-100 backdrop-blur-md"
          : "pointer-events-none -translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#" className="font-display text-lg font-black tracking-tight text-bone">
          ARI<span className="text-pdip">ZUBAIDI</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-widest sm:flex">
          <a className="transition hover:text-pdip" href="#visi">Visi</a>
          <a className="transition hover:text-pdip" href="#program">Program</a>
          <a className="transition hover:text-pdip" href="#kandidat">Kandidat</a>
        </nav>
        <a
          href="#dukung"
          className="rounded-full bg-bone px-5 py-2 text-sm font-bold text-ink transition hover:bg-pdip hover:text-bone"
        >
          Dukung
        </a>
      </div>
    </header>
  );
}
