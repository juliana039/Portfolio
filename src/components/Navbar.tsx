'use client';
import { useState, useEffect } from 'react';
import { spacing, colors, typography, borderRadius } from '@/design-system';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <nav style={{
      position: 'fixed',
      top: spacing.md,
      left: 0,
      right: 0,
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      padding: `0 ${spacing.md}`
    }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: container.maxWidth,
          height: '75px',
          padding: `0 ${spacing.xl}`,
          borderRadius: borderRadius.full,
          border: `1px solid ${colors.neutral.border}`,
          backgroundColor: scrolled ? 'rgba(26, 26, 26, 0.95)' : colors.neutral.surface,
          backdropFilter: 'blur(10px)',
          transition: 'all 0.4s ease'
        }}
        className="navbar"
      >
        {/* Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.xs,
          flex: '0 1 auto'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: colors.primary.yellow,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000',
            fontWeight: typography.fontWeight.bold,
            fontSize: typography.fontSize.xl
          }}>
            JM
          </div>
          <span style={{
            color: colors.neutral.text.primary,
            fontWeight: typography.fontWeight.bold,
            fontSize: typography.fontSize.xl,
            letterSpacing: '-0.5px'
          }}>
            Juliana<span style={{ color: colors.primary.yellow }}>.</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="desktop-menu" style={{
          display: 'flex',
          gap: spacing.lg,
          alignItems: 'center'
        }}>
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              style={{
                color: colors.neutral.text.tertiary,
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.medium,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = colors.neutral.text.primary)}
              onMouseOut={(e) => (e.currentTarget.style.color = colors.neutral.text.tertiary)}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="desktop-cta" style={{ flex: '0 1 auto' }}>
          <a
            href="#contato"
            style={{
              padding: `${spacing.xs} ${spacing.lg}`,
              backgroundColor: colors.neutral.text.primary,
              color: '#000',
              borderRadius: borderRadius.full,
              fontWeight: typography.fontWeight.bold,
              fontSize: typography.fontSize.sm,
              textDecoration: 'none',
              transition: '0.3s'
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = colors.primary.yellow)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = colors.neutral.text.primary)}
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: colors.neutral.text.primary,
            cursor: 'pointer',
            padding: spacing.xs
          }}
        >
          <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: 'absolute',
            top: 'calc(75px + 1rem)',
            left: spacing.md,
            right: spacing.md,
            backgroundColor: 'rgba(26, 26, 26, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: borderRadius.xl,
            border: `1px solid ${colors.neutral.border}`,
            padding: spacing.md,
            display: 'none',
            flexDirection: 'column',
            gap: spacing.xs
          }}
        >
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: spacing.sm,
                color: colors.neutral.text.tertiary,
                fontSize: typography.fontSize.base,
                fontWeight: typography.fontWeight.medium,
                textDecoration: 'none',
                borderRadius: borderRadius.md,
                transition: 'background 0.2s, color 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.color = colors.neutral.text.primary;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = colors.neutral.text.tertiary;
              }}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              padding: spacing.sm,
              backgroundColor: colors.primary.yellow,
              color: '#000',
              borderRadius: borderRadius.md,
              fontWeight: typography.fontWeight.bold,
              fontSize: typography.fontSize.base,
              textDecoration: 'none',
              textAlign: 'center',
              marginTop: spacing.xs
            }}
          >
            Contact Me
          </a>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-menu,
          .desktop-cta {
            display: none !important;
          }

          .mobile-menu-btn {
            display: block !important;
          }

          .mobile-menu {
            display: flex !important;
          }

          .navbar {
            padding: 0 ${spacing.md} !important;
          }
        }

        @media (max-width: 480px) {
          .navbar {
            height: 60px !important;
          }
        }
      `}</style>
    </nav>
  );
}

const container = {
  maxWidth: '1100px'
};
