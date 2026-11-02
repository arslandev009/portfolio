import Link from "next/link";
import { profile } from "@/lib/content";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/demos", label: "Demos" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0a0a0b]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5">
        <Link href="/" className="shrink-0 font-semibold text-white">{profile.name}</Link>
        <ul className="flex gap-5 overflow-x-auto text-sm text-zinc-400">
          {links.map((l) => (
            <li key={l.href}><Link href={l.href} className="transition hover:text-white">{l.label}</Link></li>
          ))}
        </ul>
        <Link href={profile.booking || "/#contact"} className="hidden shrink-0 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black transition hover:bg-emerald-300 sm:block">
          Book a call
        </Link>
      </nav>
    </header>
  );
}
