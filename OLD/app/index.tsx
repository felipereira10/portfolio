import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Olá! Sou Felipe</h2>
        <p>
          Desenvolvedor e entusiasta de tecnologia, com experiência em Java, Node.js, React, React Native, Python e automação de processos. Este portfólio apresenta meus projetos, experiências e formação.
        </p>
      </main>
      <Footer />
    </>
  )
}
