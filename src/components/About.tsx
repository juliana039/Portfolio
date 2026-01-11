'use client';

export default function About() {
  return (
    <section id="sobre" style={{ position: 'relative', padding: '8rem 0', background: '#0A0A0A', overflow: 'hidden' }}>
      {/* Background decorativo */}
      <div style={{ 
        position: 'absolute', 
        top: '20%', 
        right: '-10%', 
        width: '400px', 
        height: '400px', 
        background: 'radial-gradient(circle, rgba(255,240,105,0.1) 0%, transparent 70%)'
      }}></div>

      <div style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', padding: '0 2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'center' }}>
          
          {/* LADO ESQUERDO - Foto */}
          <div style={{ position: 'relative' }}>
            {/* Blob decorativo atrás */}
            <div style={{ 
              position: 'absolute', 
              top: '-20px', 
              left: '-20px', 
              width: '420px', 
              height: '500px', 
              background: 'linear-gradient(135deg, #FFF069 0%, #3C44FF 100%)',
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
              opacity: 0.15,
              zIndex: 0
            }}></div>

            {/* Foto */}
            <div style={{ 
              position: 'relative', 
              width: '400px', 
              height: '480px', 
              borderRadius: '20px',
              overflow: 'hidden',
              border: '4px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              zIndex: 1
            }}>
              <img 
                src="/foto-juliana.jpeg" 
                alt="Juliana Magalhães" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Badge flutuante */}
            <div style={{ 
              position: 'absolute', 
              bottom: '30px', 
              right: '-30px', 
              padding: '16px 28px', 
              background: 'linear-gradient(135deg, #3C44FF 0%, #D575FF 100%)',
              borderRadius: '50px',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '16px',
              boxShadow: '0 10px 30px rgba(60, 68, 255, 0.4)',
              zIndex: 2
            }}>
              🚀 5 Apps na App Store
            </div>
          </div>

          {/* LADO DIREITO - Conteúdo */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Header */}
            <div>
              <div style={{ display: 'inline-block', padding: '8px 20px', backgroundColor: 'rgba(255, 240, 105, 0.1)', borderRadius: '50px', marginBottom: '16px' }}>
                <span style={{ fontSize: '14px', color: '#FFF069', fontWeight: '600' }}>👋 Quem sou eu</span>
              </div>
              <h2 style={{ fontSize: '48px', fontWeight: 'bold', lineHeight: '1.2', marginBottom: '16px' }}>
                Sobre <span style={{ color: '#FFF069' }}>mim</span>
              </h2>
            </div>

            {/* Descrição */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p style={{ fontSize: '18px', color: '#d1d5db', lineHeight: '1.7' }}>
                Desenvolvedora iOS com <strong style={{ color: 'white' }}>experiência completa no ciclo de desenvolvimento</strong>, 
                combinando qualidade técnica com foco em UX/UI e acessibilidade.
              </p>
              
              <p style={{ fontSize: '18px', color: '#d1d5db', lineHeight: '1.7' }}>
                Formada em <strong style={{ color: 'white' }}>Ciência da Computação pela UFAM</strong> e com passagem pela 
                Apple Developer Academy, onde desenvolvi 5 apps publicados na App Store.
              </p>
              
              <p style={{ fontSize: '18px', color: '#d1d5db', lineHeight: '1.7' }}>
                Gosto de criar experiências que <strong style={{ color: '#FFF069' }}>fazem diferença</strong>, 
                com atenção aos detalhes e sempre pensando no usuário final.
              </p>
            </div>

            {/* Highlights */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1rem' }}>
              <div style={{ 
                padding: '20px', 
                background: 'rgba(60, 68, 255, 0.1)', 
                borderRadius: '16px',
                border: '1px solid rgba(60, 68, 255, 0.2)'
              }}>
                <div style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '8px' }}>Especialidade</div>
                <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#3C44FF' }}>SwiftUI & UIKit</div>
              </div>
              
              <div style={{ 
                padding: '20px', 
                background: 'rgba(213, 117, 255, 0.1)', 
                borderRadius: '16px',
                border: '1px solid rgba(213, 117, 255, 0.2)'
              }}>
                <div style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '8px' }}>Foco</div>
                <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#D575FF' }}>Acessibilidade</div>
              </div>
              
              <div style={{ 
                padding: '20px', 
                background: 'rgba(255, 240, 105, 0.1)', 
                borderRadius: '16px',
                border: '1px solid rgba(255, 240, 105, 0.2)'
              }}>
                <div style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '8px' }}>Conquista</div>
                <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#FFF069' }}>SBGames 2025</div>
              </div>
              
              <div style={{ 
                padding: '20px', 
                background: 'rgba(0, 128, 142, 0.1)', 
                borderRadius: '16px',
                border: '1px solid rgba(0, 128, 142, 0.2)'
              }}>
                <div style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '8px' }}>Arquitetura</div>
                <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#00808E' }}>MVVM</div>
              </div>
            </div>

            {/* CTA */}
            <div style={{ marginTop: '1rem' }}>
              <a 
                href="/juliana_magalhaes_devIOS.pdf" 
                download
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px 32px',
                  background: 'linear-gradient(135deg, #3C44FF 0%, #D575FF 100%)',
                  color: 'white',
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  fontSize: '16px',
                  boxShadow: '0 10px 30px rgba(60, 68, 255, 0.3)',
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
    </section>
  );
}
