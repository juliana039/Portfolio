'use client';

import { spacing, colors, typography, borderRadius, container } from '@/design-system';

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
    <section id="experiencia" style={{ 
      padding: `${spacing['4xl']} ${container.padding.mobile}`, 
      background: 'rgba(26, 26, 26, 0.2)' 
    }}>
      <div style={{ 
        width: '100%', 
        maxWidth: container.maxWidth, 
        margin: '0 auto' 
      }}>
        
        <div style={{ textAlign: 'center', marginBottom: spacing['3xl'] }}>
          <h2 style={{ 
            fontSize: typography.fontSize['5xl'], 
            fontWeight: typography.fontWeight.bold, 
            marginBottom: spacing.sm 
          }}
          className="exp-title">
            Experiência <span style={{
              background: `linear-gradient(135deg, ${colors.primary.blue}, ${colors.primary.purple})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Profissional</span>
          </h2>
          <p style={{ 
            fontSize: typography.fontSize.xl, 
            color: colors.neutral.text.tertiary 
          }}>
            Minha jornada no desenvolvimento
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          <div className="timeline-line" style={{ 
            position: 'absolute', 
            left: spacing.lg, 
            top: 0, 
            bottom: 0, 
            width: '2px', 
            background: `linear-gradient(to bottom, ${colors.primary.blue}, ${colors.primary.purple}, ${colors.primary.teal})` 
          }}></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing['2xl'] }}>
            {experiences.map((exp, index) => (
              <div key={index} style={{ position: 'relative', paddingLeft: spacing['3xl'] }} className="exp-item">
                <div style={{ 
                  position: 'absolute', 
                  left: `calc(${spacing.lg} - 10px)`, 
                  width: '20px', 
                  height: '20px', 
                  borderRadius: '50%', 
                  background: `linear-gradient(135deg, ${colors.primary.blue}, ${colors.primary.purple})`,
                  border: `4px solid ${colors.neutral.bg}` 
                }}></div>

                <div className="glass-card" style={{ 
                  padding: spacing.lg,
                  borderRadius: borderRadius.lg,
                  transition: 'transform 0.3s, box-shadow 0.3s' 
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    alignItems: 'flex-start', 
                    justifyContent: 'space-between', 
                    marginBottom: spacing.md,
                    gap: spacing.sm
                  }}>
                    <div>
                      <h3 style={{ 
                        fontSize: typography.fontSize['2xl'], 
                        fontWeight: typography.fontWeight.bold, 
                        marginBottom: spacing.xs 
                      }}>
                        {exp.title}
                      </h3>
                      <div style={{ 
                        color: colors.primary.blue, 
                        fontWeight: typography.fontWeight.semibold,
                        fontSize: typography.fontSize.base
                      }}>
                        {exp.company}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ 
                        color: colors.neutral.text.tertiary, 
                        fontSize: typography.fontSize.sm 
                      }}>{exp.period}</div>
                      <div style={{ 
                        color: colors.neutral.text.tertiary, 
                        fontSize: typography.fontSize.xs 
                      }}>{exp.location}</div>
                    </div>
                  </div>

                  <p style={{ 
                    color: colors.neutral.text.secondary, 
                    marginBottom: spacing.md, 
                    lineHeight: typography.lineHeight.relaxed,
                    fontSize: typography.fontSize.base
                  }}>
                    {exp.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing.xs }}>
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        style={{
                          padding: `${spacing.xs} ${spacing.sm}`,
                          background: colors.neutral.surface,
                          borderRadius: borderRadius.full,
                          fontSize: typography.fontSize.xs,
                          color: colors.neutral.text.secondary
                        }}
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

        <div style={{ 
          marginTop: spacing['3xl'], 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: spacing.md 
        }}>
          <div className="glass-card" style={{ 
            padding: spacing.md,
            borderRadius: borderRadius.lg
          }}>
            <div style={{ 
              color: colors.primary.yellow, 
              fontSize: typography.fontSize.sm, 
              fontWeight: typography.fontWeight.semibold, 
              marginBottom: spacing.sm 
            }}>Fev 2020 - Fev 2025</div>
            <h3 style={{ 
              fontSize: typography.fontSize.xl, 
              fontWeight: typography.fontWeight.bold, 
              marginBottom: spacing.xs 
            }}>Ciência da Computação</h3>
            <div style={{ 
              color: colors.neutral.text.tertiary,
              fontSize: typography.fontSize.base
            }}>UFAM - Manaus, Brasil</div>
          </div>
          <div className="glass-card" style={{ 
            padding: spacing.md,
            borderRadius: borderRadius.lg
          }}>
            <div style={{ 
              color: colors.primary.yellow, 
              fontSize: typography.fontSize.sm, 
              fontWeight: typography.fontWeight.semibold, 
              marginBottom: spacing.sm 
            }}>Fev 2017 - Dez 2019</div>
            <h3 style={{ 
              fontSize: typography.fontSize.xl, 
              fontWeight: typography.fontWeight.bold, 
              marginBottom: spacing.xs 
            }}>Técnico em Mecatrônica</h3>
            <div style={{ 
              color: colors.neutral.text.tertiary,
              fontSize: typography.fontSize.base
            }}>Fundação Matias Machline - Manaus</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .exp-title {
            font-size: ${typography.fontSize['4xl']} !important;
          }

          .timeline-line {
            display: none;
          }

          .exp-item {
            padding-left: 0 !important;
          }

          .exp-item > div:first-child {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .exp-title {
            font-size: ${typography.fontSize['3xl']} !important;
          }
        }
      `}</style>
    </section>
  );
}
