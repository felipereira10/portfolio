import React from "react";

const techSkills = [
  { name: "Python", icon: "https://skillicons.dev/icons?i=py" },
  { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
  { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
  { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
  { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
  { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
  { name: "PHP", icon: "https://skillicons.dev/icons?i=php" },
  { name: "FastAPI", icon: "https://skillicons.dev/icons?i=fastapi" },
  { name: "Spring Boot", icon: "https://skillicons.dev/icons?i=spring" },
  { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
  { name: "React.js", icon: "https://skillicons.dev/icons?i=react" },
  { name: "React Native", icon: "https://skillicons.dev/icons?i=react" },
  { name: "Vue", icon: "https://skillicons.dev/icons?i=vue" },
  { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
  { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" },
  { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
  { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
  { name: "Redis", icon: "https://skillicons.dev/icons?i=redis" },
  { name: "AWS", icon: "https://skillicons.dev/icons?i=aws" },
  { name: "GCP", icon: "https://skillicons.dev/icons?i=gcp" },
  { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
  { name: "Kubernetes", icon: "https://skillicons.dev/icons?i=kubernetes" },
];

function Techstack() {
  return (
    <div className="techstack-container">
      <div className="icons-grid">
        {techSkills.map((skill) => (
          <div
            key={skill.name}
            className="tech-icon"
            style={{
              transition: "transform 0.3s, box-shadow 0.3s",
              borderRadius: "12px",
              padding: "10px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(96, 211, 231, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              style={{ width: "50px", height: "50px" }}
            />
            <div
              className="tech-icon-text"
              style={{ marginTop: "8px", color: "#fff", fontWeight: "500" }}
            >
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Techstack;