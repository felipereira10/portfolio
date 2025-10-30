interface ProjectCardProps {
  title: string
  description: string
  link: string
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="my-2">{description}</p>
      <a href={link} target="_blank" className="text-blue-500 underline">Ver Projeto</a>
    </div>
  )
}
