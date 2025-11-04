import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from './page.module.css'

export default function Experience() {
  return (
    <>
      <main className="p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Experiência</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Desenvolvedor Full Stack - Estagiário, Redenção Turismo</li>
          <li>Desenvolvedor Full Stack, Freelancer</li>
        </ul>
      </main>
    </>
  )
}
