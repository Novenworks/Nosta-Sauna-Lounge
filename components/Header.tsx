"use client";

import { useState } from "react";

const BOOK = "https://booking.mangomint.com/321625?hp=1";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-soot-900/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#top" className="focus-ring font-display text-2xl tracking-tight text-ember-100">
          nosta
        </a>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.18em] text-ember-100/80 md:flex">
          <a href="#ritual" className="focus-ring hover:text-ember-200">Ritual</a>
          <a href="#intro" className="focus-ring hover:text-ember-200">Intro</a>
          <a href="#memberships" className="focus-ring hover:text-ember-200">Memberships</a>
          <a href="#hospitality" className="focus-ring hover:text-ember-200">Hospitality</a>
          <a href="tel:+19493172536" className="focus-ring hover:text-ember-200">949-317-2536</a>
          <a href={BOOK} className="focus-ring rounded-full bg-ember-200 px-4 py-2 font-medium text-soot-900 hover:bg-ember-100">
            Try $30
          </a>
        </nav>
        <button type="button" className="focus-ring text-xs uppercase tracking-[0.2em] md:hidden" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((v) => !v)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="flex flex-col gap-4 border-t border-white/10 px-5 py-5 text-sm uppercase tracking-[0.16em] md:hidden">
          <a href="#ritual" onClick={() => setOpen(false)}>Ritual</a>
          <a href="#intro" onClick={() => setOpen(false)}>Intro</a>
          <a href="#memberships" onClick={() => setOpen(false)}>Memberships</a>
          <a href="#hospitality" onClick={() => setOpen(false)}>Hospitality</a>
          <a href="tel:+19493172536">Call 949-317-2536</a>
          <a href={BOOK} className="rounded-full bg-ember-200 px-4 py-3 text-center text-soot-900">Try Nosta — $30</a>
        </nav>
      )}
    </header>
  );
}
