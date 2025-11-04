"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Felipe Pereira</h1>
      <nav className="space-x-6">
        <Link href="/" className={pathname === "/" ? "text-cyan-400" : "hover:text-cyan-400"}>
          Home
        </Link>
        <Link href="/about" className={pathname === "/about" ? "text-cyan-400" : "hover:text-cyan-400"}>
          Sobre
        </Link>
        <Link href="/projects" className={pathname === "/projects" ? "text-cyan-400" : "hover:text-cyan-400"}>
          Projetos
        </Link>
        <Link href="/contact" className={pathname === "/contact" ? "text-cyan-400" : "hover:text-cyan-400"}>
          Contato
        </Link>
      </nav>
    </header>
  );
}
