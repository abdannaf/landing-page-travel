import { useState } from "react";
import { IoAirplane, IoClose, IoMenu } from "react-icons/io5";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Booking", href: "#booking" },
  { label: "FAQ", href: "#faq" },
  { label: "Lokasi", href: "#location" },
];

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 font-[Inter] md:px-8">
        <a href="#about" className="flex items-center gap-2 text-xl font-black text-slate-950">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-white">
            <IoAirplane />
          </span>
          WebTravel
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm font-bold text-slate-600 transition hover:text-sky-600"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#booking"
          className="hidden rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-sky-600 md:inline-flex"
        >
          Booking
        </a>

        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-2xl md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="mx-4 mb-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl md:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block rounded-xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-sky-50 hover:text-sky-700"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#booking"
            className="mt-2 flex justify-center rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Booking
          </a>
        </div>
      )}
    </header>
  );
}

export default Nav;
