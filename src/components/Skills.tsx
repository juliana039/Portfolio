'use client';

const skills = [
  {
    category: 'iOS Development',
    items: ['Swift', 'SwiftUI', 'UIKit', 'SpriteKit', 'MVVM'],
    color: '#3C44FF'
  },
  {
    category: 'Apple Frameworks',
    items: ['CloudKit', 'CoreML', 'Game Center', 'Watch Connectivity', 'Push Notifications'],
    color: '#D575FF'
  },
  {
    category: 'Acessibilidade',
    items: ['VoiceOver', 'Dynamic Type', 'Voice Control'],
    color: '#FFF069'
  },
  {
    category: 'Ferramentas',
    items: ['Xcode', 'Git', 'Figma', 'TestFlight', 'App Store Connect'],
    color: '#00808E'
  },
  {
    category: 'Outras Tecnologias',
    items: ['Python', 'C/C++', 'Unity', 'C#'],
    color: '#D575FF'
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
    <section id="skills" style={{ padding: '8rem 0', background: '#0A0A0A' }}>
      <div style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', padding: '0 2.5rem' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'inline-block', padding: '8px 20px', backgroundColor: 'rgba(60, 68, 255, 0.1)', borderRadius: '50px', marginBottom: '16px' }}>
            <span style={{ fontSize: '14px', color: '#3C44FF', fontWeight: '600' }}>🚀 Minhas Habilidades</span>
          </div>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', lineHeight: '1.2', marginBottom: '16px' }}>
            <span style={{ color: '#FFF069' }}>Skills</span> & Tecnologias
          </h2>
          <p style={{ fontSize: '18px', color: '#9ca3af', maxWidth: '600px', margin: '0 auto' }}>
            Ferramentas e frameworks que domino
          </p>
        </div>

        {/* Skills Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '5rem' }}>
          {skills.map((skillGroup, index) => (
            <div 
              key={index}
              style={{ 
                padding: '28px',
                background: 'rgba(26, 26, 26, 0.4)',
                backdropFilter: 'blur(12px)',
                border: `1px solid ${skillGroup.color}33`,
                borderRadius: '20px',
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
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: skillGroup.color }}>
                {skillGroup.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {skillGroup.items.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    style={{ 
                      padding: '8px 16px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '50px',
                      fontSize: '14px',
                      color: '#d1d5db',
                      fontWeight: '500'
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
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-block', padding: '8px 20px', backgroundColor: 'rgba(255, 240, 105, 0.1)', borderRadius: '50px', marginBottom: '16px' }}>
              <span style={{ fontSize: '14px', color: '#FFF069', fontWeight: '600' }}>🏆 Conquistas</span>
            </div>
            <h3 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '12px' }}>
              Certificações
            </h3>
            <p style={{ fontSize: '16px', color: '#9ca3af' }}>
              Formações e especializações
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: 'minmax(200px, auto)', gap: '1.5rem' }}>
            {certifications.map((cert, index) => {
              const colors = ['#3C44FF', '#D575FF', '#FFF069', '#00808E', '#3C44FF'];
              const color = colors[index % colors.length];
              
              // Card destacado para App Development with Swift
              if (cert.featured) {
                return (
                  <div 
                    key={index}
                    style={{ 
                      gridColumn: 'span 2',
                      gridRow: 'span 2', // Ocupa 2 linhas
                      padding: '32px',
                      background: `linear-gradient(135deg, ${color}15 0%, ${color}05 100%)`,
                      backdropFilter: 'blur(12px)',
                      border: `2px solid ${color}`,
                      borderRadius: '20px',
                      textAlign: 'center',
                      position: 'relative',
                      transition: 'transform 0.3s, box-shadow 0.3s'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = `0 25px 50px ${color}40`;
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {/* Badge Destaque */}
                    <div style={{
                      position: 'absolute',
                      top: '-12px',
                      right: '20px',
                      padding: '6px 16px',
                      background: '#FFF069',
                      color: '#000',
                      borderRadius: '50px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      boxShadow: '0 4px 12px rgba(255, 240, 105, 0.4)'
                    }}>
                      ⭐ Destaque
                    </div>

                    {/* Badge Credly */}
                    <div style={{ marginBottom: '16px' }}>
  <img 
    src="/certiport-badge.png"
    alt="Certiport Badge"
    style={{ 
      width: '120px', 
      height: '120px',
      margin: '0 auto',
      borderRadius: '20px', // ← Adiciona bordas arredondadas
      filter: 'drop-shadow(0 10px 20px rgba(60, 68, 255, 0.3))'
    }}
  />
</div>

                    <div style={{ 
                      fontSize: '16px', 
                      color: color, 
                      fontWeight: 'bold', 
                      marginBottom: '16px',
                      padding: '8px 20px',
                      background: `${color}20`,
                      borderRadius: '50px',
                      display: 'inline-block'
                    }}>
                      {cert.year}
                    </div>
                    
                    <div style={{ fontSize: '20px', fontWeight: 'bold', lineHeight: '1.4', color: 'white', marginBottom: '12px' }}>
                      {cert.title}
                    </div>
                    
                    <div style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '8px',
                      padding: '8px 16px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '50px',
                      fontSize: '13px', 
                      color: '#d1d5db',
                      fontWeight: '600',
                      marginBottom: '16px'
                    }}>
                      <span style={{ fontSize: '16px' }}>🎓</span>
                      {cert.org}
                    </div>

                    {/* Botão Verificar */}
                    <div>
                      <a 
                        href="https://www.credly.com/badges/9609cc2a-c987-4b73-8fa3-94aba6e2d0a2/public_url"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '10px 24px',
                          background: color,
                          color: 'white',
                          borderRadius: '50px',
                          fontSize: '14px',
                          fontWeight: 'bold',
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
              
              // Cards normais
              return (
                <div 
                  key={index} 
                  style={{ 
                    padding: '28px',
                    background: 'rgba(26, 26, 26, 0.4)',
                    backdropFilter: 'blur(12px)',
                    border: `1px solid ${color}33`,
                    borderRadius: '20px',
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
                    fontSize: '14px', 
                    color: color, 
                    fontWeight: 'bold', 
                    marginBottom: '16px',
                    padding: '6px 16px',
                    background: `${color}15`,
                    borderRadius: '50px',
                    display: 'inline-block'
                  }}>
                    {cert.year}
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: '600', lineHeight: '1.4', color: 'white', marginBottom: '8px' }}>
                    {cert.title}
                  </div>
                  {cert.org && (
                    <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '8px' }}>
                      {cert.org}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
