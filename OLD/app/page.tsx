import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <main className="p-8 max-w-4xl mx-auto">
        <h2 className={styles.title}>Oi, eu sou o Felipe Pereira!</h2>
        <p>
          Sou um Desenvolvedor Full-Stack com mais de 2 ano de experiência construindo aplicações web modernas usando React, React Native e Node.js. Tenho experiência prática com bancos de dados como MongoDB e MySQL, e sou certificado em Google Cloud. Também trabalho com serviços da AWS e uso ativamente Python e TypeScript para desenvolver soluções escaláveis e de alta performance em toda a stack. Entre em contato se quiser saber mais!
        </p>
      </main>
    </>
  )
}
