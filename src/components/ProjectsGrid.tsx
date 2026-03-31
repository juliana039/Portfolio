'use client';

import React, { useState, useEffect } from 'react';
import { projects, Project } from '@/types/projects';
import Link from 'next/link';
import { spacing, colors, typography, borderRadius, container } from '@/design-system';

function getProjectIcon(projectId: string): string {
  const icons: { [key: string]: string } = {
    'vr-experience': '🥽',
    'devtitans': '💡',
    'residencia-de-jogos': '🎮',
    'residencia-eldorado': '🎯',
    'story-stage': '🎭',
    'timeti': '🎴',
    'through-the-flames': '🔥',
    'quem-matou-meus-cachos': '💇‍♀️',
    'carebeep': '💙',
    'beezzy': '🐝',
    'cultural-storm': '⚡',
    'psstrack': '📊',
    'default': '📱'
  };
  return icons[projectId] || icons['default'];
}

// Card FEATURED COMPACTO (sem mockup)
function FeaturedCardCompact({ project }: { project: Project }) {
  return (
    <Link href={`/projetos/${project.id}`} style={{ textDecoration: 'none', flex: 1 }}>
      <div className="glass-card" style={{
        padding: spacing.md,
        cursor: 'pointer',
        transition: 'all 0.3s',
        borderRadius: borderRadius.xl,
        display: 'flex',
        flexDirection: 'column',
        gap: spacing.xs,
        border: `1px solid ${colors.primary.yellow}20`,
        height: '220px' // Altura fixa compacta
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = `0 20px 40px -12px ${colors.primary.blue}40`;
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}>
        
        {/* Ícone e Título */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: spacing.sm }}> {/* REDUZIDO gap de md para sm */}
          <div style={{
            minWidth: '64px', // REDUZIDO de 80px para 64px
            width: '64px',
            height: '64px',
            borderRadius: borderRadius.lg,
            background: project.image 
              ? `url(${project.image}) center/cover no-repeat` 
              : `linear-gradient(135deg, ${colors.primary.yellow}, ${colors.primary.purple})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px', // REDUZIDO de 40px para 32px
            flexShrink: 0
          }}>
            {!project.image && getProjectIcon(project.id)}
          </div>

          <div style={{ flex: 1 }}>
            <h3 style={{ 
              fontSize: typography.fontSize.lg, // REDUZIDO de xl para lg
              fontWeight: typography.fontWeight.bold,
              marginBottom: spacing.xs,
              color: colors.primary.yellow,
              lineHeight: typography.lineHeight.tight
            }}>
              {project.title}
            </h3>

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

        {/* Descrição */}
        <p style={{ 
          color: colors.neutral.text.secondary, 
          fontSize: typography.fontSize.sm,
          lineHeight: typography.lineHeight.relaxed
        }}>
          {project.shortDescription || project.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', gap: spacing.xs, flexWrap: 'wrap' }}>
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: typography.fontSize.xs,
                padding: `3px ${spacing.xs}`, // REDUZIDO padding vertical
                borderRadius: borderRadius.full,
                background: 'rgba(255, 255, 255, 0.05)',
                color: colors.neutral.text.tertiary
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

// Card FEATURED com carrossel (ANTIGO - não usado mais)
function FeaturedCard({ project }: { project: Project }) {
  const [currentMediaIndex, setCurrentMediaIndex] = React.useState(0);
  const hasMedia = project.media && project.media.length > 0;

  const nextMedia = () => {
    if (project.media) {
      setCurrentMediaIndex((prev) => (prev + 1) % project.media!.length);
    }
  };

  const prevMedia = () => {
    if (project.media) {
      setCurrentMediaIndex((prev) => (prev - 1 + project.media!.length) % project.media!.length);
    }
  };

  const getCarouselDimensions = () => {
    const tags = project.tags.map(t => t.toLowerCase());
    const projectId = project.id.toLowerCase();
    
    if (tags.includes('tvos')) return { width: '320px', height: '180px' };
    if (tags.includes('ipad')) return { width: '240px', height: '320px' };
    if (projectId.includes('quem-matou-meus-cachos')) return { width: '320px', height: '180px' };
    
    return { width: '200px', height: '400px' };
  };

  const carouselDimensions = getCarouselDimensions();

  return (
    <Link href={`/projetos/${project.id}`} style={{ textDecoration: 'none' }}>
      <div className="glass-card featured-card" style={{
        padding: spacing.xl,
        cursor: 'pointer',
        transition: 'all 0.3s',
        borderRadius: borderRadius.xl,
        display: 'flex',
        gap: spacing.xl,
        alignItems: 'flex-start',
        border: `1px solid ${colors.primary.yellow}20`
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = `0 20px 40px -12px ${colors.primary.blue}40`;
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}>
        
        {/* Coluna Esquerda - Conteúdo */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: spacing.md }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: spacing.md }}>
            {/* Ícone */}
            <div style={{
              minWidth: '100px',
              width: '100px',
              height: '100px',
              borderRadius: borderRadius.lg,
              background: project.image 
                ? `url(${project.image}) center/cover no-repeat` 
                : `linear-gradient(135deg, ${colors.primary.yellow}, ${colors.primary.purple})`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
              flexShrink: 0
            }}>
              {!project.image && getProjectIcon(project.id)}
            </div>

            {/* Título e descrição */}
            <div style={{ flex: 1 }}>
              <h3 style={{ 
                fontSize: typography.fontSize['2xl'], 
                fontWeight: typography.fontWeight.bold,
                marginBottom: spacing.xs,
                color: colors.primary.yellow
              }}>
                {project.title}
              </h3>

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
            fontSize: typography.fontSize.base,
            lineHeight: typography.lineHeight.relaxed
          }}>
            {project.description}
          </p>

          {/* Minha Contribuição */}
          {project.myContribution && project.myContribution.length > 0 && (
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: spacing.xs,
              padding: spacing.md,
              background: 'rgba(255, 240, 105, 0.05)',
              borderRadius: borderRadius.md,
              border: `1px solid ${colors.primary.yellow}20`
            }}>
              <div style={{ 
                fontSize: typography.fontSize.sm, 
                fontWeight: typography.fontWeight.bold,
                color: colors.primary.yellow
              }}>
                Minha Contribuição:
              </div>
              {project.myContribution.slice(0, 3).map((item, idx) => (
                <div key={idx} style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: spacing.xs,
                  fontSize: typography.fontSize.sm,
                  color: colors.neutral.text.secondary
                }}>
                  <span style={{ color: colors.primary.yellow, flexShrink: 0 }}>•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          <div style={{ display: 'flex', gap: spacing.xs, flexWrap: 'wrap' }}>
            {project.tags.slice(0, 5).map((tag) => (
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
        </div>

        {/* Coluna Direita - Preview com Mock iPhone */}
        {hasMedia && (
          <div style={{ flexShrink: 0 }}>
            <div style={{
              position: 'relative',
              width: carouselDimensions.width,
              padding: '6px',
              background: 'linear-gradient(135deg, #1a1a1a, #2a2a2a)',
              borderRadius: '36px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
            }}>
              {/* Notch */}
              {parseInt(carouselDimensions.height) > 300 && (
                <div style={{
                  position: 'absolute',
                  top: '6px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '100px',
                  height: '24px',
                  background: '#000',
                  borderRadius: '0 0 16px 16px',
                  zIndex: 10
                }} />
              )}

              {/* Tela */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: carouselDimensions.height,
                borderRadius: '30px',
                overflow: 'hidden',
                background: '#000'
              }}>
                {project.media![currentMediaIndex].type === 'image' ? (
                  <img
                    src={project.media![currentMediaIndex].url}
                    alt={project.media![currentMediaIndex].caption || 'Screenshot'}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                ) : (
                  <video
                    src={project.media![currentMediaIndex].url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                )}

                {project.media!.length > 1 && (
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
                        width: '28px',
                        height: '28px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: 'white',
                        zIndex: 10
                      }}
                    >
                      <svg style={{ width: '14px', height: '14px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        width: '28px',
                        height: '28px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: 'white',
                        zIndex: 10
                      }}
                    >
                      <svg style={{ width: '14px', height: '14px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Indicadores */}
                    <div style={{
                      position: 'absolute',
                      bottom: spacing.sm,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      gap: spacing.xs,
                      zIndex: 10
                    }}>
                      {project.media!.map((_, idx) => (
                        <div
                          key={idx}
                          style={{
                            width: idx === currentMediaIndex ? '16px' : '6px',
                            height: '6px',
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
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}

// Card NORMAL compacto
function CompactCard({ project }: { project: Project }) {
  const displayDescription = project.shortDescription || project.description;
  const isTimeti = project.id === 'timeti';
  
  return (
    <Link href={`/projetos/${project.id}`} style={{ textDecoration: 'none' }}>
      <div className="glass-card" style={{
        padding: spacing.md,
        cursor: 'pointer',
        transition: 'all 0.3s',
        borderRadius: borderRadius.lg,
        display: 'flex',
        gap: spacing.md,
        position: 'relative',
        border: isTimeti ? `2px solid ${colors.primary.yellow}40` : undefined
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = `0 8px 16px -4px ${colors.primary.blue}30`;
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}>
        
        {isTimeti && (
          <div style={{
            position: 'absolute',
            top: '-8px',
            right: spacing.md,
            padding: `4px ${spacing.sm}`,
            background: `linear-gradient(135deg, ${colors.primary.yellow}, ${colors.primary.purple})`,
            borderRadius: borderRadius.full,
            fontSize: typography.fontSize.xs,
            fontWeight: typography.fontWeight.bold,
            color: '#000',
            boxShadow: '0 4px 12px rgba(255, 240, 105, 0.4)'
          }}>
            🏆 3º Best Paper SBGames
          </div>
        )}
        
        <div style={{
          minWidth: '80px',
          width: '80px',
          height: '80px',
          borderRadius: borderRadius.md,
          background: project.image 
            ? `url(${project.image}) center/cover no-repeat` 
            : `linear-gradient(135deg, ${colors.primary.blue}, ${colors.primary.purple})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '36px',
          flexShrink: 0
        }}>
          {!project.image && getProjectIcon(project.id)}
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: spacing.xs, minWidth: 0 }}>
          <h3 style={{ 
            fontSize: typography.fontSize.base, 
            fontWeight: typography.fontWeight.bold,
            lineHeight: typography.lineHeight.tight,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {project.title}
          </h3>

          <p style={{ 
            color: colors.neutral.text.secondary, 
            fontSize: typography.fontSize.sm,
            lineHeight: typography.lineHeight.relaxed,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {displayDescription}
          </p>

          <div style={{ display: 'flex', gap: spacing.xs, flexWrap: 'wrap', marginTop: 'auto' }}>
            {project.published && (
              <span style={{
                fontSize: typography.fontSize.xs,
                padding: `2px ${spacing.xs}`,
                borderRadius: borderRadius.full,
                background: colors.primary.yellow,
                color: '#000',
                fontWeight: typography.fontWeight.bold
              }}>
                App Store
              </span>
            )}
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: typography.fontSize.xs,
                  padding: `2px ${spacing.xs}`,
                  borderRadius: borderRadius.full,
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: colors.neutral.text.tertiary
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

// CARROSSEL AUTOMÁTICO - POR PROJETO (todas as telas lado a lado)
function AutoScreenshotCarousel() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  
  // IDs de projetos que são apps mobile (precisam mockup iPhone)
  const mobileAppIds = ['carebeep', 'story-stage', 'psstrack', 'beezzy', 'timeti', 'devtitans'];
  
  // Pegar projetos que têm screenshots
  const projectsWithScreenshots = projects
    .filter(p => p.media && p.media.length > 0)
    .map(p => ({
      id: p.id,
      title: p.title,
      screenshots: p.media!.filter(m => m.type === 'image'),
      isMobileApp: mobileAppIds.includes(p.id)
    }))
    .filter(p => p.screenshots.length > 0);

  // Auto-advance a cada 5 segundos (aumentado de 3s)
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('right');
      setCurrentProjectIndex((prev) => (prev + 1) % projectsWithScreenshots.length);
    }, 5000); // 5 segundos

    return () => clearInterval(interval);
  }, [projectsWithScreenshots.length]);

  if (projectsWithScreenshots.length === 0) return null;

  const currentProject = projectsWithScreenshots[currentProjectIndex];
  
  // Limitar a no máximo 4 screenshots
  const displayScreenshots = currentProject.screenshots.slice(0, 4);

  // Componente de Screenshot (com ou sem mockup)
  const ScreenshotItem = ({ screenshot, index }: { screenshot: any; index: number }) => {
    if (currentProject.isMobileApp) {
      // Com mockup iPhone
      return (
        <div
          key={index}
          style={{
            position: 'relative',
            flexShrink: 0,
            width: '220px',
            padding: '6px',
            background: 'linear-gradient(135deg, #1a1a1a, #2a2a2a)',
            borderRadius: '36px',
            boxShadow: `0 20px 40px ${colors.primary.blue}20`,
            transition: 'transform 0.3s'
          }}
          className="screenshot-mockup"
        >
          {/* Notch */}
          <div style={{
            position: 'absolute',
            top: '6px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90px',
            height: '22px',
            background: '#000',
            borderRadius: '0 0 16px 16px',
            zIndex: 10
          }} />

          {/* Tela */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: '440px',
            borderRadius: '30px',
            overflow: 'hidden',
            background: '#000'
          }}>
            <img
              src={screenshot.url}
              alt={screenshot.caption || 'Screenshot'}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />

            {/* Caption Overlay */}
            {screenshot.caption && (
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: spacing.sm,
                background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                color: colors.neutral.text.primary,
                fontSize: typography.fontSize.xs,
                textAlign: 'center'
              }}>
                {screenshot.caption}
              </div>
            )}
          </div>
        </div>
      );
    } else {
      // Sem mockup - imagem simples com border
      return (
        <div
          key={index}
          style={{
            position: 'relative',
            flexShrink: 0,
            width: '320px',
            borderRadius: borderRadius.lg,
            overflow: 'hidden',
            border: `2px solid ${colors.neutral.border}`,
            boxShadow: `0 20px 40px ${colors.primary.blue}20`,
            transition: 'transform 0.3s',
            background: 'rgba(0, 0, 0, 0.5)'
          }}
          className="screenshot-simple"
        >
          <img
            src={screenshot.url}
            alt={screenshot.caption || 'Screenshot'}
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '400px',
              objectFit: 'contain',
              display: 'block'
            }}
          />

          {/* Caption */}
          {screenshot.caption && (
            <div style={{
              padding: spacing.sm,
              background: 'rgba(0, 0, 0, 0.8)',
              color: colors.neutral.text.primary,
              fontSize: typography.fontSize.xs,
              textAlign: 'center'
            }}>
              {screenshot.caption}
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <div style={{
      marginTop: spacing['4xl'],
      padding: spacing.md, // REDUZIDO de xl para md
      background: 'rgba(26, 26, 26, 0.4)',
      borderRadius: borderRadius.xl,
      border: `1px solid ${colors.neutral.border}`,
      overflow: 'hidden'
    }}>
      <h3 style={{
        fontSize: typography.fontSize['2xl'],
        fontWeight: typography.fontWeight.bold,
        marginBottom: spacing.sm,
        textAlign: 'center',
        background: `linear-gradient(135deg, ${colors.primary.blue}, ${colors.primary.purple})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        📱 Galeria de Screenshots
      </h3>

      {/* Nome do Projeto Atual - Clicável */}
      <Link 
        href={`/projetos/${currentProject.id}`}
        style={{ 
          textDecoration: 'none',
          display: 'block',
          textAlign: 'center',
          marginBottom: spacing.lg
        }}
      >
        <div style={{
          fontSize: typography.fontSize.lg,
          fontWeight: typography.fontWeight.bold,
          color: colors.primary.yellow,
          transition: 'all 0.3s',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: spacing.xs
        }}
        className="project-link"
        onMouseOver={(e) => {
          e.currentTarget.style.color = colors.primary.blue;
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.color = colors.primary.yellow;
          e.currentTarget.style.transform = 'scale(1)';
        }}>
          {currentProject.title}
          <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </Link>

      {/* Container com overflow para animação de slide */}
      <div style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden'
      }}>
        {/* Container Principal - Uma linha com no máximo 4 imagens */}
        <div 
          key={currentProjectIndex}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: spacing.md,
            padding: spacing.md,
            animation: direction === 'right' ? 'slideInFromRight 0.6s ease-out' : 'slideInFromLeft 0.6s ease-out'
          }}
          className="carousel-content"
        >
          {displayScreenshots.map((screenshot, idx) => (
            <ScreenshotItem key={idx} screenshot={screenshot} index={idx} />
          ))}
        </div>
      </div>

      {/* Indicadores de Progresso - Por Projeto */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: spacing.xs,
        marginTop: spacing.lg,
        flexWrap: 'wrap'
      }}>
        {projectsWithScreenshots.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentProjectIndex ? 'right' : 'left');
              setCurrentProjectIndex(idx);
            }}
            style={{
              width: idx === currentProjectIndex ? '32px' : '8px',
              height: '8px',
              borderRadius: borderRadius.full,
              background: idx === currentProjectIndex ? colors.primary.blue : colors.neutral.border,
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          />
        ))}
      </div>

      {/* Contador */}
      <div style={{
        textAlign: 'center',
        marginTop: spacing.sm,
        fontSize: typography.fontSize.sm,
        color: colors.neutral.text.tertiary
      }}>
        Projeto {currentProjectIndex + 1} de {projectsWithScreenshots.length} • {currentProject.screenshots.length} {currentProject.screenshots.length === 1 ? 'tela' : 'telas'}
      </div>
    </div>
  );
}

export default function ProjectsGrid() {
  const [activeTab, setActiveTab] = useState<'all' | 'games' | 'ios' | 'unity'>('all');

  const featuredProjects = projects.filter(p => p.featured);
  const gameProjects = projects.filter(p => p.isGame);
  const iosProjects = projects.filter(p => p.published);
  const unityProjects = projects.filter(p => 
    p.tags.some(tag => tag.toLowerCase().includes('unity')) || 
    p.id === 'residencia-eldorado' || 
    p.id === 'vr-experience'
  );
  
  const getFilteredProjects = () => {
    switch(activeTab) {
      case 'games': return gameProjects;
      case 'ios': return iosProjects;
      case 'unity': return unityProjects;
      default: return projects;
    }
  };

  const filteredProjects = getFilteredProjects();

  return (
    <section id="projetos" style={{ 
      padding: `${spacing['4xl']} ${container.padding.mobile}`,
      background: colors.neutral.bg
    }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '1280px', 
        margin: '0 auto' 
      }}>
        
        {/* Header */}
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
            fontSize: typography.fontSize.lg, 
            color: colors.neutral.text.tertiary
          }}>
            Apps publicados, jogos e experiências acadêmicas
          </p>
        </div>

        {/* FEATURED - 3 CARDS LADO A LADO */}
        {featuredProjects.length > 0 && (
          <div style={{ marginBottom: spacing['4xl'] }}>
            <h3 style={{ 
              fontSize: typography.fontSize['3xl'], 
              fontWeight: typography.fontWeight.bold, 
              marginBottom: spacing.xl,
              background: `linear-gradient(135deg, ${colors.primary.yellow}, ${colors.primary.purple})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Projetos em Destaque
            </h3>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: spacing.lg
            }}
            className="featured-grid">
              {featuredProjects.map((project) => (
                <FeaturedCardCompact key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* CARROSSEL AUTOMÁTICO DE SCREENSHOTS - MOVIDO PARA CIMA */}
        <div style={{ marginBottom: spacing['4xl'] }}>
          <AutoScreenshotCarousel />
        </div>

        {/* Tabs */}
        <div style={{ 
          display: 'flex', 
          gap: spacing.sm, 
          marginBottom: spacing.xl,
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {[
            { id: 'all' as const, label: '📱 Todos', count: projects.length },
            { id: 'ios' as const, label: '🍎 App Store', count: iosProjects.length },
            { id: 'games' as const, label: '🎮 Jogos', count: gameProjects.length },
            { id: 'unity' as const, label: '🎯 Unity', count: unityProjects.length }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: `${spacing.sm} ${spacing.lg}`,
                borderRadius: borderRadius.full,
                border: activeTab === tab.id 
                  ? `2px solid ${colors.primary.blue}` 
                  : '2px solid rgba(255, 255, 255, 0.1)',
                background: activeTab === tab.id 
                  ? colors.primary.blue 
                  : 'rgba(255, 255, 255, 0.05)',
                color: colors.neutral.text.primary,
                fontWeight: typography.fontWeight.semibold,
                fontSize: typography.fontSize.sm,
                cursor: 'pointer',
                transition: 'all 0.3s',
                backdropFilter: 'blur(10px)'
              }}
              onMouseOver={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                }
              }}
              onMouseOut={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                }
              }}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: spacing.md
        }}
        className="projects-grid">
          {filteredProjects
            .filter(p => !p.featured || activeTab !== 'all')
            .map((project) => (
              <CompactCard key={project.id} project={project} />
            ))}
        </div>

        {filteredProjects.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: spacing['3xl'],
            color: colors.neutral.text.tertiary
          }}>
            Nenhum projeto encontrado nesta categoria.
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .carousel-content {
          animation-fill-mode: both;
        }

        .screenshots-row {
          scrollbar-width: thin;
        }

        .screenshots-row::-webkit-scrollbar {
          height: 8px;
        }

        .screenshots-row::-webkit-scrollbar-track {
          background: transparent;
        }

        .screenshots-row::-webkit-scrollbar-thumb {
          background: ${colors.primary.blue};
          border-radius: ${borderRadius.full};
        }

        .screenshot-mockup:hover,
        .screenshot-simple:hover {
          transform: scale(1.05);
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .projects-title {
            font-size: ${typography.fontSize['4xl']} !important;
          }

          .featured-grid {
            grid-template-columns: 1fr !important;
          }

          .featured-card {
            flex-direction: column !important;
          }

          .featured-card > div:last-child {
            width: 100% !important;
            display: flex;
            justify-content: center;
          }

          .projects-grid {
            grid-template-columns: 1fr !important;
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
