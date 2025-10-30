import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'

export default function Projets() {
  const projetos = [
    { title: 'Sistema de Nutrição', description: 'App React Native integrado com backend em FastAPI e MySQL.', link: '#' },
    { title: 'Automação de Relatórios', description: 'Script Python para gerar relatórios automáticos de dados.', link: '#' },
    { title: 'Site Portfólio', description: 'Portfólio pessoal desenvolvido em Next.js e Tailwind CSS.', link: '#' },
  ]

  return (
    <>
      <Header />
      <main className="p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projetos.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
