'use client';

export default function Hero() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '8rem', paddingBottom: '5rem' }}>
      <div style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', padding: '0 2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          
          {/* LADO ESQUERDO - Texto */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Nome */}
            <div>
              <h2 style={{ fontSize: '18px', color: '#9ca3af', marginBottom: '12px' }}>Olá! Eu sou</h2>
              <h1 style={{ fontSize: '36px', fontWeight: 'bold', lineHeight: '1.2' }}>
                Juliana <span style={{ color: '#FFF069' }}>Magalhães</span>
              </h1>
            </div>

            {/* Profissão - BEM GRANDE */}
            <div style={{ fontSize: '80px', fontWeight: 'bold', color: 'white', lineHeight: '1.1' }}>
              Desenvolvedora<br/>de <span style={{ color: '#3C44FF' }}>Software</span>
            </div>

            {/* Descrição */}
            <p style={{ fontSize: '16px', color: '#d1d5db', lineHeight: '1.6', maxWidth: '500px', paddingTop: '0.5rem' }}>
              5 apps publicados na App Store, incluindo projetos que representaram a 
              Apple Developer Academy e artigo premiado no SBGames 2025.
            </p>

            {/* Botões */}
            <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem' }}>
              <a 
                href="#projetos"
                style={{ 
                  padding: '16px 32px', 
                  backgroundColor: '#FFF069', 
                  color: 'black', 
                  borderRadius: '999px', 
                  fontWeight: 'bold', 
                  textDecoration: 'none',
                  fontSize: '16px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Ver Projetos
              </a>
              <a 
                href="#contato"
                style={{ 
                  padding: '16px 32px', 
                  backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                  color: 'white', 
                  borderRadius: '999px', 
                  fontWeight: '600',
                  textDecoration: 'none',
                  fontSize: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}
              >
                Hire Me
              </a>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '2rem', paddingTop: '1.5rem' }}>
              <div>
                <div style={{ fontSize: '30px', fontWeight: 'bold', color: '#FFF069' }}>5</div>
                <div style={{ fontSize: '14px', color: '#9ca3af' }}>Apps Publicados</div>
              </div>
              <div>
                <div style={{ fontSize: '30px', fontWeight: 'bold', color: '#3C44FF' }}>8</div>
                <div style={{ fontSize: '14px', color: '#9ca3af' }}>Projetos Totais</div>
              </div>
              <div>
                <div style={{ fontSize: '30px', fontWeight: 'bold', color: '#D575FF' }}>2+</div>
                <div style={{ fontSize: '14px', color: '#9ca3af' }}>Anos de Experiência</div>
              </div>
            </div>
          </div>

          {/* LADO DIREITO - Foto */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Background decorativo */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '320px', height: '320px', background: 'linear-gradient(to bottom right, rgba(255, 240, 105, 0.2), rgba(60, 68, 255, 0.2), rgba(213, 117, 255, 0.2))', borderRadius: '50%', filter: 'blur(60px)' }}></div>
            </div>
            
            {/* Foto */}
            <div style={{ position: 'relative', zIndex: 10 }}>
              <div style={{ width: '450px', height: '450px', borderRadius: '50%', overflow: 'hidden', border: '8px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                <img 
                  src="/foto-juliana.jpeg" 
                  alt="Juliana Magalhães" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              
              {/* Badges flutuantes */}
              <div style={{ position: 'absolute', top: '40px', right: '-24px', padding: '12px 24px', backgroundColor: '#3C44FF', borderRadius: '999px', color: 'white', fontWeight: 'bold', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
                iOS Developer
              </div>
              <div style={{ position: 'absolute', bottom: '40px', left: '-24px', padding: '12px 24px', backgroundColor: '#FFF069', color: 'black', borderRadius: '999px', fontWeight: 'bold', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
                SwiftUI
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
