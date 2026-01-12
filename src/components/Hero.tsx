'use client';

import { spacing, colors, typography, borderRadius, shadows, container } from '@/design-system';

export default function Hero() {
  if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes rotateGlow {
      0% { transform: rotate(0deg) scale(1); opacity: 0.5; }
      50% { transform: rotate(180deg) scale(1.3); opacity: 0.8; }
      100% { transform: rotate(360deg) scale(1); opacity: 0.5; }
    }
    @keyframes floatHero {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.append(style);
}
  return (
    <section style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      // padding: `${spacing['3xl']} ${container.padding.mobile} ${spacing['xl']}`,
      paddingTop: '20px',
    }}>
      <div style={{ 
        width: '100%', 
        maxWidth: container.maxWidth, 
        margin: '0 auto',
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr',
          gap: spacing.xl,
          alignItems: 'center',
        }}
        className="hero-grid">
          
          {/* LADO ESQUERDO - Texto */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.md }}>
            {/* Nome */}
            <div>
              <h2 style={{ 
                fontSize: typography.fontSize.lg, 
                color: colors.neutral.text.tertiary, 
                marginBottom: spacing.xs 
              }}>
                Olá! Eu sou
              </h2>
              <h1 style={{ 
                fontSize: typography.fontSize['4xl'], 
                fontWeight: typography.fontWeight.bold, 
                lineHeight: typography.lineHeight.tight 
              }}>
                Juliana <span style={{ color: colors.primary.yellow }}>Magalhães</span>
              </h1>
            </div>

            {/* Profissão */}
            <div style={{ 
              fontSize: typography.fontSize['5xl'], 
              fontWeight: typography.fontWeight.bold, 
              color: colors.neutral.text.primary, 
              lineHeight: typography.lineHeight.tight 
            }}
            className="hero-title">
              Desenvolvedora<br/>de <span style={{ color: colors.primary.blue }}>Software</span>
            </div>

            {/* Descrição */}
            <p style={{ 
              fontSize: typography.fontSize.base, 
              color: colors.neutral.text.secondary, 
              lineHeight: typography.lineHeight.relaxed, 
              maxWidth: '500px', 
              paddingTop: spacing.sm 
            }}>
              5 apps publicados na App Store, incluindo projetos que representaram a 
              Apple Developer Academy e artigo premiado no SBGames 2025.
            </p>

            {/* Botões */}
            <div style={{ 
              display: 'flex', 
              gap: spacing.sm, 
              paddingTop: spacing.sm,
              flexWrap: 'wrap'
            }}>
              <a 
                href="#projetos"
                style={{ 
                  padding: `${spacing.sm} ${spacing.lg}`, 
                  backgroundColor: colors.primary.yellow, 
                  color: 'black', 
                  borderRadius: borderRadius.full, 
                  fontWeight: typography.fontWeight.bold, 
                  textDecoration: 'none',
                  fontSize: typography.fontSize.base,
                  boxShadow: shadows.sm,
                  transition: 'transform 0.2s',
                  whiteSpace: 'nowrap'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Ver Projetos
              </a>
              <a 
                href="#contato"
                style={{ 
                  padding: `${spacing.sm} ${spacing.lg}`, 
                  backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                  color: colors.neutral.text.primary, 
                  borderRadius: borderRadius.full, 
                  fontWeight: typography.fontWeight.semibold,
                  textDecoration: 'none',
                  fontSize: typography.fontSize.base,
                  border: `1px solid ${colors.neutral.border}`,
                  backdropFilter: 'blur(10px)',
                  transition: 'background-color 0.2s',
                  whiteSpace: 'nowrap'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}
              >
                Me contrate
              </a>
            </div>

            {/* Stats */}
            <div style={{ 
              display: 'flex', 
              gap: spacing.lg, 
              paddingTop: spacing.lg,
              paddingBottom: spacing.md,
              flexWrap: 'wrap'
            }}>
              <div>
                <div style={{ 
                  fontSize: typography.fontSize['3xl'], 
                  fontWeight: typography.fontWeight.bold, 
                  color: colors.primary.yellow 
                }}>5</div>
                <div style={{ 
                  fontSize: typography.fontSize.sm, 
                  color: colors.neutral.text.tertiary 
                }}>Apps Publicados</div>
              </div>
              <div>
                <div style={{ 
                  fontSize: typography.fontSize['3xl'], 
                  fontWeight: typography.fontWeight.bold, 
                  color: colors.primary.blue 
                }}>8</div>
                <div style={{ 
                  fontSize: typography.fontSize.sm, 
                  color: colors.neutral.text.tertiary 
                }}>Projetos Totais</div>
              </div>
              <div>
                <div style={{ 
                  fontSize: typography.fontSize['3xl'], 
                  fontWeight: typography.fontWeight.bold, 
                  color: colors.primary.purple 
                }}>2+</div>
                <div style={{ 
                  fontSize: typography.fontSize.sm, 
                  color: colors.neutral.text.tertiary 
                }}>Anos de Experiência</div>
              </div>
            </div>
          </div>

          {/* LADO DIREITO - Foto */}
          <div style={{ 
            position: 'relative', 
            display: 'flex', 
            justifyContent: 'center',
            padding: spacing.xl
          }}
          className="hero-image">
            {/* Background decorativo */}
            <div style={{ 
              position: 'absolute', 
              inset: 0, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <div style={{ 
                width: '320px', 
                height: '320px', 
                background: 'linear-gradient(to bottom right, rgba(255, 240, 105, 0.2), rgba(60, 68, 255, 0.2), rgba(213, 117, 255, 0.2))', 
                borderRadius: '50%', 
                filter: 'blur(60px)' 
              }}></div>
            </div>
            
            {/* Foto */}
            <div style={{ position: 'relative', zIndex: 10 }}>
              <div style={{ 
                width: '100%',
                maxWidth: '450px',
                aspectRatio: '1/1',
                borderRadius: '50%', 
                overflow: 'hidden', 
                border: `8px solid ${colors.neutral.border}`, 
                boxShadow: shadows.lg
              }}>
                <img 
                  src="/foto-juliana.jpeg" 
                  alt="Juliana Magalhães" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              
              {/* Badges flutuantes */}
              <div style={{ 
                position: 'absolute', 
                top: spacing.xl, 
                right: `-${spacing.md}`, 
                padding: `${spacing.xs} ${spacing.md}`, 
                backgroundColor: colors.primary.blue, 
                borderRadius: borderRadius.full, 
                color: colors.neutral.text.primary, 
                fontWeight: typography.fontWeight.bold, 
                boxShadow: shadows.md,
                fontSize: typography.fontSize.sm,
                whiteSpace: 'nowrap'
              }}
              className="hero-badge">
                iOS Developer
              </div>
              <div style={{ 
                position: 'absolute', 
                bottom: spacing.xl, 
                left: `-${spacing.md}`, 
                padding: `${spacing.xs} ${spacing.md}`, 
                backgroundColor: colors.primary.yellow, 
                color: 'black', 
                borderRadius: borderRadius.full, 
                fontWeight: typography.fontWeight.bold, 
                boxShadow: shadows.md,
                fontSize: typography.fontSize.sm,
                whiteSpace: 'nowrap'
              }}
              className="hero-badge">
                SwiftUI
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (max-width: 767px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }

          .hero-grid > div:first-child {
            align-items: center;
          }

          .hero-title {
            font-size: ${typography.fontSize['4xl']} !important;
          }

          .hero-image {
            order: -1;
            padding: ${spacing.md} !important;
          }

          .hero-badge {
            display: none;
          }

          section {
            padding-top: 100px !important;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: ${typography.fontSize['3xl']} !important;
          }

          section {
            padding-top: 90px !important;
          }
        }
      `}</style>
    </section>
  );
}
