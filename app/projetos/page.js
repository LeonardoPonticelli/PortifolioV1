import React from "react";
import CardSkills from "../Components/CardSkills/CardSkills";

export default function Projeto() {
  return (
    <div className="projeto">
      <h1 className="projeto-h1">Projetos</h1>
      <div className="projeto-container">
        <a href="https://github.com/LeonardoPonticelli/calculadora" target="_blank" className="projeto-item">
          <CardSkills
            title="Calculadora"
            description="Projeto Calculadora, usando react, states, reutilização de componentes, aplicação de classes"
            image="calculadora.png"
          />
        </a>
        <a href="https://github.com/LeonardoPonticelli/botfaceit" target="_blank" className="projeto-item">
          <CardSkills
            title="Bot Discord"
            description="Projeto Bot Faceit, usando react,consumo de apis e logica de cargos"
            image="botdiscord.jpg"
          />
        </a>
      </div>
    </div>
  );
}