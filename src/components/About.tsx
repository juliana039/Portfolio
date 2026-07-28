'use client';

import { spacing, colors, typography, borderRadius, shadows, container } from '@/design-system';

export default function About() {
  return (
    <section id="sobre" style={{ 
      position: 'relative', 
      padding: `${spacing['lg']} ${container.padding.mobile}`, 
      background: colors.neutral.bg, 
      overflow: 'hidden' 
    }}>
      {/* Background decorativo */}
      <div style={{ 
        position: 'absolute', 
        top: '20%', 
        right: '-10%', 
        width: '400px', 
        height: '400px', 
        background: 'radial-gradient(circle, rgba(255,240,105,0.1) 0%, transparent 70%)',
        pointerEvents: 'none'
      }}></div>

      <div style={{ 
        width: '100%', 
        maxWidth: container.maxWidth, 
        margin: '0 auto'
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr',
          gap: spacing['3xl'], 
          alignItems: 'center' 
        }}
        className="about-grid">
          
          {/* LADO ESQUERDO - Foto */}
          <div style={{ position: 'relative' }} className="about-photo">
            {/* Blob decorativo atrás */}
            <div style={{ 
              position: 'absolute', 
              top: '-20px', 
              left: '-20px', 
              width: '100%',
              maxWidth: '420px',
              height: '500px', 
              background: 'linear-gradient(135deg, #FFF069 0%, #3C44FF 100%)',
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
              opacity: 0.15,
              zIndex: 0
            }}></div>

            {/* Foto */}
            <div style={{ 
              position: 'relative', 
              width: '100%',
              maxWidth: '400px',
              height: '480px', 
              borderRadius: borderRadius.xl,
              overflow: 'hidden',
              border: `4px solid ${colors.neutral.border}`,
              boxShadow: shadows.xl,
              zIndex: 1,
              margin: '0 auto'
            }}>
              <img 
                src="/foto-juliana-2.jpg" 
                alt="Juliana Magalhães" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Badge flutuante */}
            <div style={{ 
              position: 'absolute', 
              bottom: spacing.lg, 
              right: spacing.md, 
              padding: `${spacing.sm} ${spacing.lg}`, 
              background: 'linear-gradient(135deg, #3C44FF 0%, #D575FF 100%)',
              borderRadius: borderRadius.full,
              color: colors.neutral.text.primary,
              fontWeight: typography.fontWeight.bold,
              fontSize: typography.fontSize.base,
              boxShadow: shadows.glow(colors.primary.blue),
              zIndex: 2,
              whiteSpace: 'nowrap'
            }}
            className="about-badge">
              5 Apps na App Store
            </div>
          </div>

          {/* LADO DIREITO - Conteúdo */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.lg }}>
            {/* Header */}
            <div>
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
                  Quem sou eu
                </span>
              </div>
              <h2 style={{ 
                fontSize: typography.fontSize['5xl'], 
                fontWeight: typography.fontWeight.bold, 
                lineHeight: typography.lineHeight.tight, 
                marginBottom: spacing.sm 
              }}
              className="about-title">
                Sobre <span style={{ color: colors.primary.yellow }}>mim</span>
              </h2>
            </div>

            {/* Descrição */}
<div style={{ display: 'flex', flexDirection: 'column', gap: spacing.md }}>
  <p
    style={{
      fontSize: typography.fontSize.lg,
      color: colors.neutral.text.secondary,
      lineHeight: typography.lineHeight.relaxed,
    }}
  >
    Desenvolvedora de <strong style={{ color: colors.neutral.text.primary }}>software com atuação em web, mobile e jogos</strong>,
    com experiência ao longo de todo o <strong style={{ color: colors.neutral.text.primary }}>ciclo de desenvolvimento</strong>,
    da ideia e prototipação à implementação, testes e entrega.
  </p>

  <p
    style={{
      fontSize: typography.fontSize.lg,
      color: colors.neutral.text.secondary,
      lineHeight: typography.lineHeight.relaxed,
    }}
  >
    Formada em <strong style={{ color: colors.neutral.text.primary }}>Ciência da Computação pela UFAM</strong> e alumni da 
    <strong style={{ color: colors.neutral.text.primary }}> Apple Developer Academy</strong>, 
    onde desenvolvi aplicativos iOS publicados na App Store. Na <strong style={{ color: colors.neutral.text.primary }}>Web Academy da UFAM</strong>,
    participo de uma capacitação de 348 horas em desenvolvimento web, abrangendo front-end, back-end, APIs, banco de dados, testes e deploy.
  </p>

  <p
    style={{
      fontSize: typography.fontSize.lg,
      color: colors.neutral.text.secondary,
      lineHeight: typography.lineHeight.relaxed,
    }}
  >
    Trabalho com <strong style={{ color: colors.neutral.text.primary }}>JavaScript, TypeScript, React, Next.js, Python, Swift e C#</strong>,
    conectando diferentes tecnologias para criar produtos acessíveis e soluções que geram impacto real para o usuário final.
  </p>
</div>


            {/* Highlights */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: spacing.md, 
              marginTop: spacing.sm 
            }}>
              <div style={{ 
                padding: spacing.md, 
                background: 'rgba(60, 68, 255, 0.1)', 
                borderRadius: borderRadius.lg,
                border: '1px solid rgba(60, 68, 255, 0.2)'
              }}>
                <div style={{ 
                  fontSize: typography.fontSize.sm, 
                  color: colors.neutral.text.tertiary, 
                  marginBottom: spacing.xs 
                }}>Especialidade</div>
                <div style={{ 
                  fontSize: typography.fontSize.lg, 
                  fontWeight: typography.fontWeight.bold, 
                  color: colors.primary.blue 
                }}>Web & Mobile</div>
              </div>
              
              <div style={{ 
                padding: spacing.md, 
                background: 'rgba(213, 117, 255, 0.1)', 
                borderRadius: borderRadius.lg,
                border: '1px solid rgba(213, 117, 255, 0.2)'
              }}>
                <div style={{ 
                  fontSize: typography.fontSize.sm, 
                  color: colors.neutral.text.tertiary, 
                  marginBottom: spacing.xs 
                }}>Foco</div>
                <div style={{ 
                  fontSize: typography.fontSize.lg, 
                  fontWeight: typography.fontWeight.bold, 
                  color: colors.primary.purple 
                }}>UX & Acessibilidade</div>
              </div>
              
              <div style={{ 
                padding: spacing.md, 
                background: 'rgba(255, 240, 105, 0.1)', 
                borderRadius: borderRadius.lg,
                border: '1px solid rgba(255, 240, 105, 0.2)'
              }}>
                <div style={{ 
                  fontSize: typography.fontSize.sm, 
                  color: colors.neutral.text.tertiary, 
                  marginBottom: spacing.xs 
                }}>Conquista</div>
                <div style={{ 
                  fontSize: typography.fontSize.lg, 
                  fontWeight: typography.fontWeight.bold, 
                  color: colors.primary.yellow 
                }}>SBGames 2025</div>
              </div>
              
              <div style={{ 
                padding: spacing.md, 
                background: 'rgba(0, 128, 142, 0.1)', 
                borderRadius: borderRadius.lg,
                border: '1px solid rgba(0, 128, 142, 0.2)'
              }}>
                <div style={{ 
                  fontSize: typography.fontSize.sm, 
                  color: colors.neutral.text.tertiary, 
                  marginBottom: spacing.xs 
                }}>Arquitetura</div>
                <div style={{ 
                  fontSize: typography.fontSize.lg, 
                  fontWeight: typography.fontWeight.bold, 
                  color: colors.primary.teal 
                }}>APIs & MVVM</div>
              </div>
            </div>

            {/* CTA */}
            <div style={{ marginTop: spacing.sm }}>
              <a 
                href="/dev_soft_cv_juliana_magalhaes.pdf" 
                download
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: spacing.xs,
                  padding: `${spacing.sm} ${spacing.lg}`,
                  background: 'linear-gradient(135deg, #3C44FF 0%, #D575FF 100%)',
                  color: colors.neutral.text.primary,
                  borderRadius: borderRadius.full,
                  fontWeight: typography.fontWeight.bold,
                  textDecoration: 'none',
                  fontSize: typography.fontSize.base,
                  boxShadow: shadows.glow(colors.primary.blue),
                  transition: 'transform 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }

        @media (max-width: 767px) {
          .about-photo {
            order: -1;
            display: flex;
            justify-content: center;
          }

          .about-badge {
            right: 50% !important;
            transform: translateX(50%);
            bottom: ${spacing.md} !important;
          }

          .about-title {
            font-size: ${typography.fontSize['4xl']} !important;
            text-align: center;
          }

          .about-grid > div:last-child > div:first-child {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
