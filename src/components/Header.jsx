import { useState } from "react";
import logo from "../assets/logo.png";
const base = "https://www.upskillacademy.tech";
const links = [
  ["Home", "/"],
  ["Courses", "/courses"],
  ["Testimonials", "/testimonials"],
  ["Scholarship", "/scholarship-applications"],
  ["About", "/about"],
  ["Partners", "/partners"],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur transition-shadow duration-200">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href={base} aria-label="Upskill home">
          <img className="h-16 w-auto" src={logo} alt="Upskill Online Logo" />
        </a>
        <div className="ml-10 hidden items-baseline gap-8 lg:flex">
          {links.map(([label, path]) => (
            <a
              key={label}
              href={base + path}
              className="relative px-3 py-2 text-sm font-medium text-gray-900 transition-all duration-200 hover:text-brand"
            >
              {label}
              {label === "Scholarship" && (
                <span className="absolute -right-3 -top-2 animate-pulse rounded-full border border-sky-200 bg-sky-500 px-2 py-0.5 text-[10px] font-semibold uppercase text-white shadow-sm">
                  New
                </span>
              )}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-4 lg:flex">
          <a
            className="rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-900 shadow-sm transition hover:bg-gray-50"
            href={base + "/login"}
          >
            Log in
          </a>
          <a
            className="rounded-full bg-gradient-to-r from-brand to-brand/70 px-6 py-3 text-sm font-medium text-white transition-all hover:shadow-lg"
            href={base + "/register"}
          >
            Start Learning
          </a>
        </div>
        <button
          className="rounded-xl border border-gray-200 p-2 shadow-sm transition hover:text-brand active:scale-95 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d={open ? "M6 6l12 12M6 18L18 6" : "M4 7h16M4 12h16M4 17h16"}
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>
      {open && (
        <div
          className="absolute left-0 top-full w-full space-y-1 border-t border-gray-100 bg-white px-4 pb-4 pt-2 shadow-lg lg:hidden"
          id="mobile-menu"
        >
          {links.map(([label, path]) => (
            <a
              key={label}
              href={base + path}
              className="block rounded-md px-3 py-2 hover:bg-gray-50 hover:text-sky-500"
            >
              {label}
            </a>
          ))}
          <a
            className="mt-2 block text-center rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-900 shadow-sm transition hover:bg-gray-50"
            href={base + "/login"}
          >
            Log in
          </a>
          <a
            className="mt-2 block text-center rounded-full bg-gradient-to-r from-brand to-brand/70 px-6 py-3 text-sm font-medium text-white transition-all hover:shadow-lg"
            href={base + "/register"}
          >
            Start Learning
          </a>
        </div>
      )}
    </header>
  );
}
