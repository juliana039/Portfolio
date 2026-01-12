'use client';

import { projects, Project, categoryColors } from '@/types/projects';
import Link from 'next/link';
import { spacing, colors, typography, borderRadius, container } from '@/design-system';

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projetos/${project.id}`}>
      <div className="glass-card" style={{
        padding: 0,
        height: '100%',
        cursor: 'pointer',
        transition: 'transform 0.3s, box-shadow 0.3s',
        borderRadius: borderRadius.lg,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.5)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}>
        
        {/* Área da Logo/Imagem */}
        <div style={{
          width: '100%',
          height: '180px',
          background: project.image 
            ? `url(${project.image}) center/cover` 
            : `linear-gradient(135deg, ${colors.primary.blue}20, ${colors.primary.purple}20)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          borderBottom: `1px solid ${colors.neutral.border}`
        }}>
          {!project.image && (
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: borderRadius.lg,
              background: `linear-gradient(135deg, ${colors.primary.blue}, ${colors.primary.purple})`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px',
              boxShadow: '0 10px 30px rgba(60, 68, 255, 0.3)'
            }}>
              📱
            </div>
          )}
        </div>

        {/* Conteúdo do Card */}
        <div style={{ padding: spacing.md, flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            justifyContent: 'space-between', 
            marginBottom: spacing.sm,
            gap: spacing.sm,
            flexWrap: 'wrap'
          }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <h3 style={{ 
                fontSize: typography.fontSize['2xl'], 
                fontWeight: typography.fontWeight.bold, 
                marginBottom: spacing.xs,
                transition: 'background 0.3s'
              }}
              className="project-title">
                {project.title}
              </h3>

              <span
                className={`inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-gradient-to-r ${categoryColors[project.category]} text-white`}
                style={{
                  fontSize: typography.fontSize.xs,
                  borderRadius: borderRadius.full,
                  padding: `${spacing.xs} ${spacing.sm}`
                }}
              >
                {project.category}
              </span>
            </div>

            {project.published && (
              <span className="glass-card" style={{
                padding: `${spacing.xs} ${spacing.sm}`,
                fontSize: typography.fontSize.xs,
                color: colors.primary.yellow,
                fontWeight: typography.fontWeight.semibold,
                borderRadius: borderRadius.md,
                whiteSpace: 'nowrap'
              }}>
                📱 App Store
              </span>
            )}
          </div>

          <p style={{ 
            color: colors.neutral.text.tertiary, 
            marginBottom: spacing.sm,
            fontSize: typography.fontSize.base,
            lineHeight: typography.lineHeight.normal,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {project.description}
          </p>

          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: spacing.xs, 
            marginBottom: spacing.md 
          }}>
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: typography.fontSize.xs,
                  padding: `${spacing.xs} ${spacing.sm}`,
                  borderRadius: borderRadius.full,
                  background: 'rgba(26, 26, 26, 0.5)',
                  color: colors.neutral.text.secondary,
                  border: `1px solid ${colors.neutral.border}`
                }}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span style={{ 
                fontSize: typography.fontSize.xs, 
                padding: `${spacing.xs} ${spacing.sm}`, 
                color: colors.neutral.text.tertiary 
              }}>
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          <div style={{ 
            marginTop: 'auto', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            fontSize: typography.fontSize.sm, 
            color: colors.neutral.text.tertiary 
          }}>
            <span>📅 {project.year}</span>
            <span className="project-arrow" style={{ 
              opacity: 0, 
              transition: 'opacity 0.3s' 
            }}>
              → Ver detalhes
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .project-title:hover {
          background: linear-gradient(135deg, ${colors.primary.yellow}, ${colors.primary.blue});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        div:hover .project-arrow {
          opacity: 1 !important;
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

        {/* Seção: App Store */}
        <div style={{ marginBottom: spacing['3xl'] }}>
          <h3 style={{ 
            fontSize: typography.fontSize['3xl'], 
            fontWeight: typography.fontWeight.bold, 
            marginBottom: spacing.xl,
            background: `linear-gradient(135deg, ${colors.primary.blue}, ${colors.primary.purple})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'inline-flex',
            alignItems: 'center',
            gap: spacing.xs
          }}>
            📱 Na App Store
          </h3>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', 
            gap: spacing['2xl'] 
          }}>
            {publishedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Seção: Outros */}
        <div>
          <h3 style={{ 
            fontSize: typography.fontSize['3xl'], 
            fontWeight: typography.fontWeight.bold, 
            marginBottom: spacing.xl,
            background: `linear-gradient(135deg, ${colors.primary.purple}, ${colors.primary.teal})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'inline-flex',
            alignItems: 'center',
            gap: spacing.xs
          }}>
            🛠️ Outros Projetos
          </h3>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', 
            gap: spacing['2xl'] 
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