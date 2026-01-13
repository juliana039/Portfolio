'use client';

import React from 'react';
import { projects, Project, categoryColors } from '@/types/projects';
import Link from 'next/link';
import { spacing, colors, typography, borderRadius, container, shadows } from '@/design-system';

// Função helper para ícones dos projetos
function getProjectIcon(projectId: string): string {
  const icons: { [key: string]: string } = {
    'vr-experience': '🔍',
    'devtitans': '💡',
    'residencia-eldorado': '🎮',
    'wwdc-2024': '🍎',
    'default': '📱'
  };
  return icons[projectId] || icons['default'];
}

function ProjectCard({ project }: { project: Project }) {
  const [currentMediaIndex, setCurrentMediaIndex] = React.useState(0);
  const hasMedia = project.media && project.media.length > 0;

  const nextMedia = () => {
    if (project.media) {
      setCurrentMediaIndex((prev) => (prev + 1) % project.media.length);
    }
  };

  const prevMedia = () => {
    if (project.media) {
      setCurrentMediaIndex((prev) => (prev - 1 + project.media.length) % project.media.length);
    }
  };

  return (
    <Link href={`/projetos/${project.id}`} style={{ textDecoration: 'none' }}>
      <div className="glass-card project-card" style={{
        padding: spacing.lg,
        cursor: 'pointer',
        transition: 'transform 0.3s, box-shadow 0.3s',
        borderRadius: borderRadius.xl,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        gap: spacing.lg,
        alignItems: 'center'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 20px 40px -15px rgba(0, 0, 0, 0.6)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}>
        
        {/* COLUNA ESQUERDA: ÍCONE */}
        <div style={{
          minWidth: '120px',
          width: '120px',
          height: '120px',
          borderRadius: borderRadius.lg,
          background: project.image 
            ? `url(${project.image}) center/contain no-repeat, linear-gradient(135deg, ${colors.primary.blue}15, ${colors.primary.purple}15)` 
            : `linear-gradient(135deg, ${colors.primary.blue}, ${colors.primary.purple})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '56px',
          boxShadow: '0 10px 30px rgba(60, 68, 255, 0.3)',
          flexShrink: 0
        }}>
          {!project.image && getProjectIcon(project.id)}
        </div>

        {/* COLUNA CENTRAL: CONTEÚDO */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: spacing.sm, minWidth: 0 }}>
          {/* TÍTULO E CATEGORIA */}
          <div>
            <h3 style={{ 
              fontSize: typography.fontSize.xl, 
              fontWeight: typography.fontWeight.bold, 
              marginBottom: spacing.xs,
              lineHeight: typography.lineHeight.tight
            }}
            className="project-title">
              {project.title}
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: spacing.sm }}>
              <span style={{
                display: 'inline-block',
                fontSize: typography.fontSize.xs,
                borderRadius: borderRadius.full,
                padding: `4px ${spacing.sm}`,
                background: `linear-gradient(135deg, ${colors.primary.blue}20, ${colors.primary.purple}20)`,
                color: colors.neutral.text.secondary,
                fontWeight: typography.fontWeight.medium
              }}>
                {project.category}
              </span>
              {project.published && (
                <span style={{
                  fontSize: typography.fontSize.xs,
                  color: colors.primary.yellow,
                  fontWeight: typography.fontWeight.bold
                }}>
                  📱 App Store
                </span>
              )}
            </div>
          </div>

          <p style={{ 
            color: colors.neutral.text.secondary, 
            fontSize: typography.fontSize.sm,
            lineHeight: typography.lineHeight.relaxed,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {project.description}
          </p>

          {/* HIGHLIGHTS */}
          {project.highlights && project.highlights.length > 0 && (
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: spacing.xs,
              fontSize: typography.fontSize.xs,
              color: colors.neutral.text.tertiary
            }}>
              {project.highlights.slice(0, 2).map((highlight, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: spacing.xs }}>
                  <span style={{ color: colors.primary.blue, flexShrink: 0 }}>✓</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          )}

          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: spacing.xs,
            marginTop: 'auto'
          }}>
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: typography.fontSize.xs,
                  padding: `4px ${spacing.sm}`,
                  borderRadius: borderRadius.full,
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: colors.neutral.text.tertiary
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <span style={{ fontSize: typography.fontSize.xs, color: colors.neutral.text.tertiary }}>
            📅 {project.year}
          </span>
        </div>

        {/* COLUNA DIREITA: CARROSSEL + BOTÃO */}
        {hasMedia && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: spacing.md,
            alignItems: 'center'
          }}>
            {/* CARROSSEL - Proporção de tela iPhone */}
            <div style={{
              width: '240px',
              minWidth: '240px',
              height: '480px',
              borderRadius: borderRadius.lg,
              overflow: 'hidden',
              position: 'relative',
              background: colors.neutral.surface,
              flexShrink: 0
            }}
            className="media-carousel">
              {project.media[currentMediaIndex].type === 'image' ? (
                <img 
                  src={project.media[currentMediaIndex].url}
                  alt={project.media[currentMediaIndex].caption || ''}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              ) : (
                <video
                  src={project.media[currentMediaIndex].url}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  muted
                  loop
                  autoPlay
                />
              )}

              {/* Controles do carrossel */}
              {project.media.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      prevMedia();
                    }}
                    style={{
                      position: 'absolute',
                      left: spacing.xs,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(0, 0, 0, 0.6)',
                      border: 'none',
                      borderRadius: borderRadius.full,
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: 'white',
                      transition: 'background 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)'}
                    onMouseOut={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)'}
                  >
                    <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      nextMedia();
                    }}
                    style={{
                      position: 'absolute',
                      right: spacing.xs,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(0, 0, 0, 0.6)',
                      border: 'none',
                      borderRadius: borderRadius.full,
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: 'white',
                      transition: 'background 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)'}
                    onMouseOut={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)'}
                  >
                    <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Indicadores */}
                  <div style={{
                    position: 'absolute',
                    bottom: spacing.xs,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: spacing.xs
                  }}>
                    {project.media.map((_, idx) => (
                      <div
                        key={idx}
                        style={{
                          width: idx === currentMediaIndex ? '20px' : '8px',
                          height: '8px',
                          borderRadius: borderRadius.full,
                          background: idx === currentMediaIndex ? colors.primary.blue : 'rgba(255, 255, 255, 0.5)',
                          transition: 'all 0.3s'
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* BOTÃO EMBAIXO DO CARROSSEL */}
            <div className="cta-button" style={{
              padding: `${spacing.xs} ${spacing.md}`,
              backgroundColor: colors.primary.yellow,
              color: 'black',
              borderRadius: borderRadius.full,
              fontWeight: typography.fontWeight.bold,
              fontSize: typography.fontSize.sm,
              boxShadow: shadows.sm,
              display: 'flex',
              alignItems: 'center',
              gap: spacing.xs,
              transition: 'transform 0.2s',
              textDecoration: 'none'
            }}>
              Ver projeto
              <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .project-card:hover .project-title {
          color: ${colors.primary.yellow};
        }
        .project-card:hover .cta-button {
          transform: scale(1.05);
        }
      `}</style>
    </Link>
  );
}

export default function ProjectsGrid() {
  const publishedProjects = projects.filter(p => p.published);
  const otherProjects = projects.filter(p => !p.published);

  return (
    <section id="projetos" style={{ 
      padding: `${spacing['4xl']} ${container.padding.mobile}` 
    }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '1280px', 
        margin: '0 auto' 
      }}>
        <div style={{ textAlign: 'center', marginBottom: spacing['3xl'] }}>
          <div style={{ 
            display: 'inline-block', 
            marginBottom: spacing.sm, 
            padding: `${spacing.xs} ${spacing.md}`, 
            borderRadius: borderRadius.full, 
            background: 'rgba(60, 68, 255, 0.1)', 
            border: '1px solid rgba(60, 68, 255, 0.3)' 
          }}>
            <span style={{ 
              fontSize: typography.fontSize.sm, 
              fontWeight: typography.fontWeight.semibold, 
              color: colors.primary.blue 
            }}>
              🚀 Portfólio
            </span>
          </div>
          <h2 style={{ 
            fontSize: typography.fontSize['5xl'], 
            fontWeight: typography.fontWeight.bold, 
            marginBottom: spacing.sm 
          }}
          className="projects-title">
            Projetos
          </h2>
          <p style={{ 
            fontSize: typography.fontSize.xl, 
            color: colors.neutral.text.tertiary, 
            maxWidth: '700px', 
            margin: '0 auto' 
          }}>
            Aplicações publicadas, experiências acadêmicas e projetos em desenvolvimento
          </p>
        </div>

        <div style={{ marginBottom: spacing['3xl'] }}>
          <h3 style={{ 
            fontSize: typography.fontSize['3xl'], 
            fontWeight: typography.fontWeight.bold, 
            marginBottom: spacing.xl,
            background: `linear-gradient(135deg, ${colors.primary.blue}, ${colors.primary.purple})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            📱 Na App Store
          </h3>
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: spacing.lg
          }}>
            {publishedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ 
            fontSize: typography.fontSize['3xl'], 
            fontWeight: typography.fontWeight.bold, 
            marginBottom: spacing.xl,
            background: `linear-gradient(135deg, ${colors.primary.purple}, ${colors.primary.teal})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            🛠️ Outros Projetos
          </h3>
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: spacing.lg
          }}>
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .projects-title {
            font-size: ${typography.fontSize['4xl']} !important;
          }
          .project-card {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .media-carousel {
            width: 100% !important;
            min-width: 100% !important;
            height: 400px !important;
          }
        }
        @media (max-width: 480px) {
          .projects-title {
            font-size: ${typography.fontSize['3xl']} !important;
          }
        }
      `}</style>
    </section>
  );
}
