// Importe os componentes de ícones necessários (Ionicon set no React Icons é o 'io5')
import { IoGameControllerOutline, IoBookOutline, IoAirplaneOutline } from 'react-icons/io5';

const HOBBIES = [
  {
    id: 1,
    icon: <IoGameControllerOutline className="text-4xl text-blue-600" />,
    title: 'Jogos Estratégicos',
    description: 'Melhora minha capacidade de planejamento e raciocínio lógico sob pressão.',
  },
  {
    id: 2,
    icon: <IoGameControllerOutline className="text-4xl text-blue-600" />,
    title: 'Artes Marciais',
    description: 'Um exercício de coordenação, paciência e disciplina que se reflete no código.',
  },
  {
    id: 3,
    icon: <IoGameControllerOutline className="text-4xl text-blue-600" />,
    title: 'Animes e Mangás',
    description: 'Um exercício de coordenação, paciência e disciplina que se reflete no código.',
  },
  {
    id: 4,
    icon: <IoAirplaneOutline className="text-4xl text-blue-600" />,
    title: 'Viajar',
    description: 'Buscar novas culturas e perspectivas é fundamental para expandir a criatividade e visão de mundo.',
  },
];


export default function About() {
  return (
    <>
      <main className="p-8 max-w-4xl mx-auto">

        {/* ... Sua seção Sobre mim (Habilidades) ... */}
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Sobre mim</h2>

        <div className="space-y-6 mb-12">
          <p className="text-lg text-gray-700">
            **Frontend:** Experiência em sites responsivos e interfaces atraentes, garantindo performance em todos os dispositivos e navegadores, sempre utilizando as melhores práticas e tecnologias modernas.
          </p>
          <p className="text-lg text-gray-700">
            **Backend:** Tenho experiência com APIs rápidas e eficientes, garantindo desempenho e escalabilidade.
          </p>
          <p className="text-lg text-gray-700">
            **Designer de UI:** Realizei pesquisas de design, criei interfaces visuais intuitivas e implementei layouts responsivos para a melhor experiência do usuário em qualquer dispositivo.
          </p>
        </div>

        <hr className="my-10 border-gray-200" />

        {/* === Seção de Hobbies com Ícones Profissionais === */}
        <section>
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Meus Hobbies</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOBBIES.map((hobby) => (
              <div
                key={hobby.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                {/* AQUI É ONDE O COMPONENTE ÍCONE É RENDERIZADO */}
                <div className="mb-3 text-blue-600">{hobby.icon}</div>

                <h4 className="text-xl font-semibold mb-2 text-gray-800">{hobby.title}</h4>

                <p className="text-gray-600 text-sm">{hobby.description}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </>
  )
}