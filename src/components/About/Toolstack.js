import React from "react";

const tools = [
  { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
  { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
  { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase" },
  { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
  // { name: "Chrome", icon: "https://skillicons.dev/icons?i=googlechrome" },
  { name: "Windows", icon: "https://skillicons.dev/icons?i=windows" },
  { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
  { name: "Notion", icon: "https://skillicons.dev/icons?i=notion" },
  { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" },
];

function Toolstack() {
  return (
    <div className="tools-container">
      <div className="icons-grid">
        {tools.map((tool) => (
          <div key={tool.name} className="tech-icon">
            <img src={tool.icon} alt={tool.name} />
            <div className="tech-icon-text">{tool.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Toolstack;
