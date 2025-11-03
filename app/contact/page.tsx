import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from './page.module.css'

export default function Contacts() {
  return (
    <>
      <main className="p-8 max-w-4xl mx-auto">
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Contato</h1>

          <div className="max-w-md w-full space-y-4">
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full border rounded-xl p-3"
            />
            <input
              type="email"
              placeholder="Seu email"
              className="w-full border rounded-xl p-3"
            />
            <textarea
              placeholder="Sua mensagem"
              className="w-full border rounded-xl p-3 h-32"
            />
            <button className="w-full rounded-xl p-3 shadow text-white bg-black hover:opacity-80 transition">
              Enviar
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
