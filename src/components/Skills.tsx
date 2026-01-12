'use client';

import { spacing, colors, typography, borderRadius, shadows, container } from '@/design-system';

const skills = [
  {
    category: 'iOS Development',
    items: ['Swift', 'SwiftUI', 'UIKit', 'SpriteKit', 'MVVM'],
    color: colors.primary.blue
  },
  {
    category: 'Apple Frameworks',
    items: ['CloudKit', 'CoreML', 'Game Center', 'Watch Connectivity', 'Push Notifications'],
    color: colors.primary.purple
  },
  {
    category: 'Acessibilidade',
    items: ['VoiceOver', 'Dynamic Type', 'Voice Control'],
    color: colors.primary.yellow
  },
  {
    category: 'Ferramentas',
    items: ['Xcode', 'Git', 'Figma', 'TestFlight', 'App Store Connect'],
    color: colors.primary.teal
  },
  {
    category: 'Outras Tecnologias',
    items: ['Python', 'C/C++', 'Unity', 'C#'],
    color: colors.primary.purple
  }
];

const certifications = [
  { 
    title: 'App Development with Swift', 
    year: '2025', 
    org: 'Certiport Certified User',
    featured: true
  },
  { title: 'Desenvolvimento para AR/VR', year: '2025' },
  { title: 'Fundamentos em testes de software', year: '2025' },
  { title: 'Desenvolvimento de jogos 2D', year: '2025' },
  { title: 'Introdução ao desenvolvimento mobile', year: '2024' },
];

export default function Skills() {
  return (
    <section id="skills" style={{ 
      padding: `${spacing['4xl']} ${container.padding.mobile}`, 
      background: colors.neutral.bg 
    }}>
      <div style={{ 
        width: '100%', 
        maxWidth: container.maxWidth, 
        margin: '0 auto'
      }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: spacing['2xl'] }}>
          <div style={{ 
            display: 'inline-block', 
            padding: `${spacing.xs} ${spacing.md}`, 
            backgroundColor: 'rgba(60, 68, 255, 0.1)', 
            borderRadius: borderRadius.full, 
            marginBottom: spacing.sm 
          }}>
            <span style={{ 
              fontSize: typography.fontSize.sm, 
              color: colors.primary.blue, 
              fontWeight: typography.fontWeight.semibold 
            }}>
              🚀 Minhas Habilidades
            </span>
          </div>
          <h2 style={{ 
            fontSize: typography.fontSize['5xl'], 
            fontWeight: typography.fontWeight.bold, 
            lineHeight: typography.lineHeight.tight, 
            marginBottom: spacing.sm 
          }}
          className="skills-title">
            <span style={{ color: colors.primary.yellow }}>Skills</span> & Tecnologias
          </h2>
          <p style={{ 
            fontSize: typography.fontSize.lg, 
            color: colors.neutral.text.tertiary, 
            maxWidth: '600px', 
            margin: '0 auto' 
          }}>
            Ferramentas e frameworks que domino
          </p>
        </div>

        {/* Skills Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: spacing.md, 
          marginBottom: spacing['3xl'] 
        }}>
          {skills.map((skillGroup, index) => (
            <div 
              key={index}
              style={{ 
                padding: spacing.lg,
                background: 'rgba(26, 26, 26, 0.4)',
                backdropFilter: 'blur(12px)',
                border: `1px solid ${skillGroup.color}33`,
                borderRadius: borderRadius.xl,
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = `0 20px 40px ${skillGroup.color}20`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <h3 style={{ 
                fontSize: typography.fontSize.xl, 
                fontWeight: typography.fontWeight.bold, 
                marginBottom: spacing.md, 
                color: skillGroup.color 
              }}>
                {skillGroup.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing.xs }}>
                {skillGroup.items.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    style={{ 
                      padding: `${spacing.xs} ${spacing.sm}`,
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: `1px solid ${colors.neutral.border}`,
                      borderRadius: borderRadius.full,
                      fontSize: typography.fontSize.sm,
                      color: colors.neutral.text.secondary,
                      fontWeight: typography.fontWeight.medium
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certificações */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: spacing.xl }}>
            <div style={{ 
              display: 'inline-block', 
              padding: `${spacing.xs} ${spacing.md}`, 
              backgroundColor: 'rgba(255, 240, 105, 0.1)', 
              borderRadius: borderRadius.full, 
              marginBottom: spacing.sm 
            }}>
              <span style={{ 
                fontSize: typography.fontSize.sm, 
                color: colors.primary.yellow, 
                fontWeight: typography.fontWeight.semibold 
              }}>
                🏆 Conquistas
              </span>
            </div>
            <h3 style={{ 
              fontSize: typography.fontSize['4xl'], 
              fontWeight: typography.fontWeight.bold, 
              marginBottom: spacing.xs 
            }}
            className="cert-title">
              Certificações
            </h3>
            <p style={{ 
              fontSize: typography.fontSize.base, 
              color: colors.neutral.text.tertiary 
            }}>
              Formações e especializações
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridAutoRows: 'minmax(180px, auto)',
            gap: spacing.md 
          }}
          className="cert-grid">
            {certifications.map((cert, index) => {
              const colorList = [colors.primary.blue, colors.primary.purple, colors.primary.yellow, colors.primary.teal, colors.primary.blue];
              const color = colorList[index % colorList.length];
              
              // Card destacado
              if (cert.featured) {
                return (
                  <div 
                    key={index}
                    style={{ 
                      gridColumn: 'span 1',
                      gridRow: 'span 2',
                      padding: spacing.xl,
                      background: `linear-gradient(135deg, ${color}15 0%, ${color}05 100%)`,
                      backdropFilter: 'blur(12px)',
                      border: `2px solid ${color}`,
                      borderRadius: borderRadius.xl,
                      textAlign: 'center',
                      position: 'relative',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}
                    className="featured-cert"
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = `0 25px 50px ${color}40`;
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: '-12px',
                      right: spacing.md,
                      padding: `${spacing.xs} ${spacing.sm}`,
                      background: colors.primary.yellow,
                      color: '#000',
                      borderRadius: borderRadius.full,
                      fontSize: typography.fontSize.xs,
                      fontWeight: typography.fontWeight.bold,
                      boxShadow: shadows.glow(colors.primary.yellow)
                    }}>
                      ⭐ Destaque
                    </div>

                    <div style={{ marginBottom: spacing.sm }}>
                      <img 
                        src="/certiport-badge.png"
                        alt="Certiport Badge"
                        style={{ 
                          width: '120px', 
                          height: '120px',
                          margin: '0 auto',
                          borderRadius: borderRadius.xl,
                          filter: `drop-shadow(0 10px 20px ${color}30)`
                        }}
                      />
                    </div>

                    <div style={{ 
                      fontSize: typography.fontSize.sm, 
                      color: color, 
                      fontWeight: typography.fontWeight.bold, 
                      marginBottom: spacing.sm,
                      padding: `${spacing.xs} ${spacing.md}`,
                      background: `${color}20`,
                      borderRadius: borderRadius.full,
                      display: 'inline-block'
                    }}>
                      {cert.year}
                    </div>
                    
                    <div style={{ 
                      fontSize: typography.fontSize.xl, 
                      fontWeight: typography.fontWeight.bold, 
                      lineHeight: typography.lineHeight.normal, 
                      color: colors.neutral.text.primary, 
                      marginBottom: spacing.xs 
                    }}>
                      {cert.title}
                    </div>
                    
                    <div style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: spacing.xs,
                      padding: `${spacing.xs} ${spacing.sm}`,
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: borderRadius.full,
                      fontSize: typography.fontSize.xs, 
                      color: colors.neutral.text.secondary,
                      fontWeight: typography.fontWeight.semibold,
                      marginBottom: spacing.sm
                    }}>
                      <span>🎓</span>
                      {cert.org}
                    </div>

                    <div>
                      <a 
                        href="https://www.credly.com/badges/9609cc2a-c987-4b73-8fa3-94aba6e2d0a2/public_url"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: spacing.xs,
                          padding: `${spacing.sm} ${spacing.md}`,
                          background: color,
                          color: colors.neutral.text.primary,
                          borderRadius: borderRadius.full,
                          fontSize: typography.fontSize.sm,
                          fontWeight: typography.fontWeight.bold,
                          textDecoration: 'none',
                          transition: 'opacity 0.2s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
                        onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                      >
                        <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Verificar no Credly
                      </a>
                    </div>
                  </div>
                );
              }
              
              return (
                <div 
                  key={index} 
                  style={{ 
                    padding: spacing.lg,
                    background: 'rgba(26, 26, 26, 0.4)',
                    backdropFilter: 'blur(12px)',
                    border: `1px solid ${color}33`,
                    borderRadius: borderRadius.xl,
                    textAlign: 'center',
                    transition: 'transform 0.3s, box-shadow 0.3s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = `0 20px 40px ${color}20`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ 
                    fontSize: typography.fontSize.sm, 
                    color: color, 
                    fontWeight: typography.fontWeight.bold, 
                    marginBottom: spacing.sm,
                    padding: `${spacing.xs} ${spacing.sm}`,
                    background: `${color}15`,
                    borderRadius: borderRadius.full,
                    display: 'inline-block'
                  }}>
                    {cert.year}
                  </div>
                  <div style={{ 
                    fontSize: typography.fontSize.base, 
                    fontWeight: typography.fontWeight.semibold, 
                    lineHeight: typography.lineHeight.normal, 
                    color: colors.neutral.text.primary, 
                    marginBottom: spacing.xs 
                  }}>
                    {cert.title}
                  </div>
                  {cert.org && (
                    <div style={{ 
                      fontSize: typography.fontSize.xs, 
                      color: colors.neutral.text.tertiary, 
                      marginTop: spacing.xs 
                    }}>
                      {cert.org}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .cert-grid {
          grid-template-columns: repeat(3, 1fr) !important;
        }

        @media (max-width: 1024px) {
          .cert-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          .featured-cert {
            grid-column: span 1 !important;
            grid-row: span 2 !important;
          }
        }

        @media (max-width: 767px) {
          .cert-grid {
            grid-template-columns: 1fr !important;
          }

          .featured-cert {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }

          .skills-title, .cert-title {
            font-size: ${typography.fontSize['4xl']} !important;
          }
        }

        @media (max-width: 480px) {
          .skills-title, .cert-title {
            font-size: ${typography.fontSize['3xl']} !important;
          }
        }
      `}</style>
    </section>
  );
}
