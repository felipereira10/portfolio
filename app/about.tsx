import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Header />
      <main className="p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Sobre mim</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Formação: Análise e Desenvolvimento de Sistemas / Logística / Mecatrônica</li>
          <li>Habilidades: Java, Node.js, React, React Native, Python, SQL, AWS</li>
          <li>Automação de processos e projetos com Python</li>
          <li>Metodologias ágeis, ética profissional e inglês técnico</li>
        </ul>
      </main>
      <Footer />
    </>
  )
}
