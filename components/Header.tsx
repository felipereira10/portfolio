import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Meu Portfólio</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/projetos">Projetos</Link>
      </nav>
    </header>
  )
}
