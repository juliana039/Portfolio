import { notFound } from 'next/navigation';
import { projects } from '@/types/projects';
import Link from 'next/link';

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

  const categoryColors = {
    'Apple Developer Academy': 'from-primary-blue to-primary-purple',
    'Devtitans': 'from-primary-teal to-primary-blue',
    'Instituto Eldorado': 'from-primary-purple to-primary-darkPurple'
  };

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/#projetos"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para projetos
          </Link>

          {/* Title & Category */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className={`inline-block text-sm px-4 py-2 rounded-full bg-gradient-to-r ${categoryColors[project.category]} text-white font-semibold`}>
                {project.category}
              </span>
              {project.published && (
                <span className="glass-card px-4 py-2 text-sm text-primary-yellow font-semibold">
                  App Store
                </span>
              )}
              <span className="text-gray-400">{project.year}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            {project.description}
          </p>

          {/* CTA */}
          {project.published && (
            <a 
              href={project.appStoreLink || '#'}
              target="_blank"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Ver na App Store
            </a>
          )}
        </div>
      </section>

      {/* Image Placeholder */}
      <section className="py-20 bg-surface/20">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card aspect-video flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📱</div>
              <p className="text-gray-400">Imagem do projeto em breve</p>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Technologies */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Tecnologias</h2>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="glass-card px-4 py-2.5 text-sm font-medium hover:scale-105 transition-transform"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-8">Destaques</h2>
                <ul className="space-y-4">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary-blue mt-1 text-xl">✓</span>
                      <span className="text-gray-300 leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link 
              href="/#projetos"
              className="glass-card px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              ← Todos os projetos
            </Link>
            <Link 
              href="/#contato"
              className="btn-primary"
            >
              Entre em contato
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
