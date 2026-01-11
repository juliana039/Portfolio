'use client';

const experiences = [
  {
    title: 'Desenvolvedora iOS',
    company: 'Apple Developer Academy',
    period: 'Fev 2024 - Dez 2025',
    location: 'Manaus, Brasil',
    description: 'Desenvolvimento de projetos utilizando tecnologias Apple, aplicando metodologias ágeis e desenvolvendo produtos completos para o mercado.',
    technologies: ['iOS', 'SwiftUI', 'UIKit', 'CoreML', 'CloudKit', 'Game Center'],
    color: 'from-primary-blue to-primary-purple'
  },
  {
    title: 'Desenvolvedora de Jogos',
    company: 'Instituto de Pesquisas Eldorado',
    period: '2025',
    location: 'Residência',
    description: 'Desenvolvimento de jogo 3D educacional em Unity, trabalhando em equipe multidisciplinar com designers e modeladores 3D.',
    technologies: ['C#', 'Unity'],
    color: 'from-primary-purple to-primary-teal'
  },
  {
    title: 'Desenvolvedora QA',
    company: 'Instituto de Pesquisas Eldorado',
    period: '2022',
    location: 'Estágio',
    description: 'Controle de qualidade de software para dispositivos Motorola, realizando reprodução e documentação de bugs, automação de processos e análise de logs.',
    technologies: ['C/C++', 'Python', 'ADB'],
    color: 'from-primary-teal to-primary-yellow'
  }
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-32 px-6 bg-surface/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">
            Experiência <span className="gradient-text">Profissional</span>
          </h2>
          <p className="text-xl text-gray-400">
            Minha jornada no desenvolvimento
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha vertical */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-blue via-primary-purple to-primary-teal"></div>

          {/* Experiências */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20">
                {/* Dot */}
                <div className={`absolute left-6 w-5 h-5 rounded-full bg-gradient-to-br ${exp.color} border-4 border-background`}></div>

                {/* Card */}
                <div className="glass-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      <div className="text-primary-blue font-semibold">{exp.company}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-400 text-sm">{exp.period}</div>
                      <div className="text-gray-500 text-xs">{exp.location}</div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1.5 bg-surface rounded-full text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Educação */}
        <div className="mt-20 grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <div className="text-primary-yellow text-sm font-semibold mb-3">Fev 2020 - Fev 2025</div>
            <h3 className="text-xl font-bold mb-2">Ciência da Computação</h3>
            <div className="text-gray-400">UFAM - Manaus, Brasil</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-primary-yellow text-sm font-semibold mb-3">Fev 2017 - Dez 2019</div>
            <h3 className="text-xl font-bold mb-2">Técnico em Mecatrônica</h3>
            <div className="text-gray-400">Fundação Matias Machline - Manaus</div>
          </div>
        </div>
      </div>
    </section>
  );
}
