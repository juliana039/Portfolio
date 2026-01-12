import { notFound } from 'next/navigation';
import { projects, categoryColors } from '@/types/projects';
import Link from 'next/link';
import { spacing, colors, typography, borderRadius, container } from '@/design-system';
import { MediaCarousel } from '@/components/MediaCarousel';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="project-page" style={{ minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ 
        paddingTop: '120px',
        paddingBottom: spacing['2xl'],
        paddingLeft: container.padding.mobile,
        paddingRight: container.padding.mobile
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Back Button */}
          <Link 
            href="/#projetos"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: spacing.xs,
              color: colors.neutral.text.tertiary,
              marginBottom: spacing.xl,
              transition: 'color 0.3s',
              fontSize: typography.fontSize.base,
              textDecoration: 'none'
            }}
            className="back-link"
          >
            <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para projetos
          </Link>

          {/* Title & Category */}
          <div style={{ marginBottom: spacing.xl }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: spacing.md, marginBottom: spacing.lg }}>
              {/* Ícone do App */}
              {project.image && (
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: borderRadius.xl,
                  background: `url(${project.image}) center/cover`,
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                  flexShrink: 0
                }} />
              )}
              
              <h1 style={{ 
                fontSize: typography.fontSize['5xl'],
                fontWeight: typography.fontWeight.bold,
                lineHeight: 1.1,
                margin: 0
              }}
              className="project-title"
              >
                {project.title}
              </h1>
            </div>
            
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              alignItems: 'center', 
              gap: spacing.sm,
              marginBottom: spacing.lg
            }}>
              <span 
                className={`inline-block bg-gradient-to-r ${categoryColors[project.category]} text-white`}
                style={{
                  fontSize: typography.fontSize.sm,
                  padding: `${spacing.xs} ${spacing.md}`,
                  borderRadius: borderRadius.full,
                  fontWeight: typography.fontWeight.semibold
                }}
              >
                {project.category}
              </span>
              
              {project.published && (
                <span className="glass-card" style={{
                  padding: `${spacing.xs} ${spacing.md}`,
                  fontSize: typography.fontSize.sm,
                  color: colors.primary.yellow,
                  fontWeight: typography.fontWeight.semibold,
                  borderRadius: borderRadius.md
                }}>
                  📱 App Store
                </span>
              )}
              
              <span style={{ 
                color: colors.neutral.text.tertiary,
                fontSize: typography.fontSize.base
              }}>
                {project.year}
              </span>

              {project.duration && (
                <span style={{ 
                  color: colors.neutral.text.tertiary,
                  fontSize: typography.fontSize.base
                }}>
                  • {project.duration}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <p style={{ 
            fontSize: typography.fontSize.xl,
            color: colors.neutral.text.secondary,
            lineHeight: 1.7,
            marginBottom: spacing['2xl']
          }}>
            {project.description}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: spacing.md, flexWrap: 'wrap' }}>
            {project.published && (
              <a 
                href={project.appStoreLink || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: spacing.sm,
                  textDecoration: 'none'
                }}
              >
                <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Ver na App Store
              </a>
            )}

            {project.caseStudy && (
              <a 
                href={project.caseStudy}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card case-study-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: spacing.sm,
                  padding: `${spacing.sm} ${spacing.lg}`,
                  borderRadius: borderRadius.full,
                  fontWeight: typography.fontWeight.semibold,
                  textDecoration: 'none',
                  transition: 'transform 0.3s'
                }}
              >
                <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Ver Case Study (PDF)
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Full Description / Sobre o Projeto */}
      {project.fullDescription && (
        <section style={{ 
          padding: `${spacing['2xl']} ${container.padding.mobile}`,
          background: 'rgba(26, 26, 26, 0.3)',
          borderTop: `1px solid ${colors.neutral.border}`
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: typography.fontSize['3xl'],
              fontWeight: typography.fontWeight.bold,
              marginBottom: spacing.xl,
              color: colors.neutral.text.primary
            }}>
              Sobre o Projeto
            </h2>
            <div style={{ 
              fontSize: typography.fontSize.base,
              color: colors.neutral.text.secondary,
              lineHeight: 1.8,
              whiteSpace: 'pre-line'
            }}>
              {project.fullDescription}
            </div>
          </div>
        </section>
      )}

      {/* Media Carousel */}
      {project.media && project.media.length > 0 && (
        <section style={{ 
          padding: `${spacing['2xl']} ${container.padding.mobile}`,
          background: 'rgba(26, 26, 26, 0.3)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <MediaCarousel media={project.media} />
          </div>
        </section>
      )}

      {/* Logo Placeholder (se não tiver mídia) */}
      {(!project.media || project.media.length === 0) && (
        <section style={{ 
          padding: `${spacing['2xl']} ${container.padding.mobile}`,
          background: 'rgba(26, 26, 26, 0.3)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div 
              className="glass-card"
              style={{
                aspectRatio: '16/9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: borderRadius.xl,
                overflow: 'hidden',
                background: project.image 
                  ? `url(${project.image}) center/cover` 
                  : `linear-gradient(135deg, ${colors.primary.blue}15, ${colors.primary.purple}15)`
              }}
            >
              {!project.image && (
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '120px',
                    height: '120px',
                    margin: '0 auto',
                    borderRadius: borderRadius.xl,
                    background: `linear-gradient(135deg, ${colors.primary.blue}, ${colors.primary.purple})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '60px',
                    marginBottom: spacing.md,
                    boxShadow: '0 20px 40px rgba(60, 68, 255, 0.4)'
                  }}>
                    📱
                  </div>
                  <p style={{ 
                    color: colors.neutral.text.tertiary,
                    fontSize: typography.fontSize.base
                  }}>
                    Logo/Imagem em breve
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Team Section */}
      {project.team && project.team.length > 0 && project.id !== 'devtitans' && (
        <section style={{ 
          padding: `${spacing['2xl']} ${container.padding.mobile}`,
          borderTop: `1px solid ${colors.neutral.border}`
        }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: typography.fontSize['3xl'],
              fontWeight: typography.fontWeight.bold,
              marginBottom: spacing.xl,
              textAlign: 'center'
            }}>
              Equipe
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: spacing.lg
            }}>
              {project.team.map((member, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    margin: '0 auto',
                    marginBottom: spacing.sm,
                    borderRadius: borderRadius.full,
                    background: member.photo 
                      ? `url(${member.photo}) center/cover` 
                      : `linear-gradient(135deg, ${colors.primary.blue}, ${colors.primary.purple})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
                  }}>
                    {!member.photo && '👤'}
                  </div>
                  <p style={{
                    fontSize: typography.fontSize.sm,
                    fontWeight: typography.fontWeight.semibold,
                    marginBottom: spacing.xs,
                    color: colors.neutral.text.primary
                  }}>
                    {member.name}
                  </p>
                  {member.role && (
                    <p style={{
                      fontSize: typography.fontSize.xs,
                      color: colors.neutral.text.tertiary
                    }}>
                      {member.role}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* My Contribution */}
      {project.myContribution && project.myContribution.length > 0 && (
        <section style={{ 
          padding: `${spacing['2xl']} ${container.padding.mobile}`,
          background: 'rgba(26, 26, 26, 0.3)'
        }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: typography.fontSize['3xl'],
              fontWeight: typography.fontWeight.bold,
              marginBottom: spacing.lg
            }}>
              Minha Contribuição
            </h2>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: spacing.md
            }}>
              {project.myContribution.map((item, index) => (
                <li key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: spacing.sm
                }}>
                  <span style={{ 
                    color: colors.primary.yellow,
                    fontSize: typography.fontSize.xl,
                    marginTop: '2px',
                    flexShrink: 0
                  }}>
                    ✓
                  </span>
                  <span style={{ 
                    color: colors.neutral.text.secondary,
                    lineHeight: 1.6,
                    fontSize: typography.fontSize.base
                  }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Details */}
      <section style={{ 
        padding: `${spacing['4xl']} ${container.padding.mobile}` 
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: spacing['2xl']
          }}>
            {/* Technologies */}
            <div>
              <h2 style={{ 
                fontSize: typography.fontSize['3xl'],
                fontWeight: typography.fontWeight.bold,
                marginBottom: spacing.lg
              }}>
                Tecnologias
              </h2>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: spacing.sm
              }}>
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="glass-card project-tag"
                    style={{
                      padding: `${spacing.sm} ${spacing.md}`,
                      fontSize: typography.fontSize.sm,
                      fontWeight: typography.fontWeight.medium,
                      cursor: 'default',
                      borderRadius: borderRadius.md
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h2 style={{ 
                  fontSize: typography.fontSize['3xl'],
                  fontWeight: typography.fontWeight.bold,
                  marginBottom: spacing.lg
                }}>
                  Destaques
                </h2>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: spacing.md
                }}>
                  {project.highlights.map((highlight, index) => (
                    <li key={index} style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: spacing.sm
                    }}>
                      <span style={{ 
                        color: colors.primary.blue,
                        fontSize: typography.fontSize.xl,
                        marginTop: '2px',
                        flexShrink: 0
                      }}>
                        ✓
                      </span>
                      <span style={{ 
                        color: colors.neutral.text.secondary,
                        lineHeight: 1.6,
                        fontSize: typography.fontSize.base
                      }}>
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section style={{ 
        padding: `${spacing['2xl']} ${container.padding.mobile}`,
        borderTop: `1px solid ${colors.neutral.border}`
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="project-nav" style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            gap: spacing.md
          }}>
            <Link 
              href="/#projetos"
              className="glass-card nav-btn"
              style={{
                padding: `${spacing.sm} ${spacing.xl}`,
                borderRadius: borderRadius.full,
                fontWeight: typography.fontWeight.semibold,
                textDecoration: 'none',
                fontSize: typography.fontSize.base
              }}
            >
              ← Todos os projetos
            </Link>
            <Link 
              href="/#contato"
              className="btn-primary"
              style={{ textDecoration: 'none' }}
            >
              Entre em contato
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
