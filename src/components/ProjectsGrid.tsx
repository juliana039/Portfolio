'use client';

import { projects, Project } from '@/types/projects';
import Link from 'next/link';

function ProjectCard({ project }: { project: Project }) {
  const categoryColors = {
    'Apple Developer Academy': 'from-primary-blue to-primary-purple',
    'Devtitans': 'from-primary-teal to-primary-blue',
    'Instituto Eldorado': 'from-primary-purple to-primary-darkPurple'
  };

  return (
    <Link href={`/projetos/${project.id}`}>
      <div className="glass-card p-6 h-full cursor-pointer group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2 group-hover:gradient-text transition-all">
              {project.title}
            </h3>

            <span
              className={`inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-gradient-to-r ${categoryColors[project.category]} text-white`}
            >
              {project.category}
            </span>
          </div>

          {project.published && (
            <span className="glass-card px-3 py-1 text-xs text-primary-yellow font-semibold">
              📱 App Store
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-400 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-surface/50 text-gray-300 border border-white/10"
            >
              {tag}
            </span>
          ))}

          {project.tags.length > 3 && (
            <span className="text-xs px-2 py-1 text-gray-500">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between text-sm text-gray-500">
          <span>📅 {project.year}</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">
            → Ver detalhes
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ProjectsGrid() {
  const publishedProjects = projects.filter(p => p.published);
  const otherProjects = projects.filter(p => !p.published);

  return (
    <section id="projetos" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-block mb-4 px-5 py-2 rounded-full bg-primary-blue/10 border border-primary-blue/30">
            <span className="text-sm font-semibold text-primary-blue">
              🚀 Portfólio
            </span>
          </div>

          <h2 className="text-5xl font-bold mb-4">
            Projetos
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Aplicações publicadas, experiências acadêmicas e projetos em desenvolvimento
          </p>
        </div>

        {/* Published Apps */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold mb-10 gradient-text flex items-center gap-2">
            📱 Na App Store
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publishedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-3xl font-bold mb-10 gradient-text flex items-center gap-2">
            🛠️ Outros Projetos
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
