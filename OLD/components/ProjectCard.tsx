interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <div className="bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
      <h3 className="text-cyan-400 text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline"
        >
          Ver Projeto →
        </a>
      )}
    </div>
  );
}
