import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from './page.module.css'

export default function About() {
  return (
    <>
      <main className="p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Sobre mim</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Frontend: experiência em sites responsivos e interfaces atraentes, garantindo performance em todos os dispositivos e navegadores, sempre utilizando as melhores práticas e tecnologias modernas.</li>
          <li>Backend: Tenho experiência com APIs rápidas e eficientes, garantindo desempenho e escalabilidade.</li>
          <li>Designer de UI: Realizei pesquisas de design, criei interfaces visuais intuitivas e implementei layouts responsivos para a melhor experiência do usuário em qualquer dispositivo.</li>
        </ul>
      </main>
    </>
  )
}
