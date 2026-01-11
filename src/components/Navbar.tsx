'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Experiência', href: '#experiencia' },
  ];

  return (
    <nav style={{ position: 'fixed', top: '24px', left: 0, right: 0, zIndex: 1000, display: 'flex', justifyContent: 'center', padding: '0 20px' }}>
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between', // Distribui os 3 blocos (Logo, Links, Botão)
          width: '100%',
          maxWidth: '1100px',
          height: '75px',
          padding: '0 35px',
          borderRadius: '999px',
          border: '1px solid rgba(255,255,255,0.1)',
          backgroundColor: scrolled ? 'rgba(26, 26, 26, 0.95)' : '#1A1A1A',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.4s ease'
        }}
      >
        {/* BLOCO 1: LOGO (Alinhado à esquerda) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '0 1 auto' }}>
          <div style={{ width: '40px', height: '40px', backgroundColor: '#FFF069', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black', fontWeight: 'bold', fontSize: '20px' }}>
            JM
          </div>
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '20px', letterSpacing: '-0.5px' }}>
            Juliana<span style={{ color: '#FFF069' }}>.</span>
          </span>
        </div>

        {/* BLOCO 2: LINKS (No centro da barra) */}
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              style={{ 
                color: '#9ca3af', 
                fontSize: '14px', 
                fontWeight: '500', 
                textDecoration: 'none', 
                whiteSpace: 'nowrap',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'white')}
              onMouseOut={(e) => (e.currentTarget.style.color = '#9ca3af')}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* BLOCO 3: BOTÃO (Alinhado à direita) */}
        <div style={{ flex: '0 1 auto' }}>
          <a 
            href="#contato"
            style={{
              padding: '12px 28px',
              backgroundColor: 'white',
              color: 'black',
              borderRadius: '999px',
              fontWeight: 'bold',
              fontSize: '14px',
              textDecoration: 'none',
              transition: '0.3s'
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#FFF069')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'white')}
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
}