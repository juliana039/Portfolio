'use client';

import { useState } from 'react';
import { spacing, colors, typography, borderRadius, shadows, container } from '@/design-system';

export default function Contact() {
  const [formState, setFormState] = useState({
    submitting: false,
    succeeded: false,
    errors: false
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ submitting: true, succeeded: false, errors: false });

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // IMPORTANTE: Substitua 'SEU_FORM_ID' pelo ID do seu formulário Formspree
      const response = await fetch('https://formspree.io/f/xkoonnby', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormState({ submitting: false, succeeded: true, errors: false });
        form.reset();
        
        // Resetar mensagem de sucesso após 5 segundos
        setTimeout(() => {
          setFormState({ submitting: false, succeeded: false, errors: false });
        }, 5000);
      } else {
        setFormState({ submitting: false, succeeded: false, errors: true });
      }
    } catch (error) {
      setFormState({ submitting: false, succeeded: false, errors: true });
    }
  };

  return (
    <section id="contato" style={{ 
      padding: `${spacing['4xl']} ${container.padding.mobile}` 
    }}>
      <div style={{ 
        width: '100%', 
        maxWidth: container.maxWidth, 
        margin: '0 auto' 
      }}>
        
        <div style={{ textAlign: 'center', marginBottom: spacing['3xl'] }}>
          <h2 style={{ 
            fontSize: typography.fontSize['5xl'], 
            fontWeight: typography.fontWeight.bold, 
            marginBottom: spacing.sm 
          }}
          className="contact-title">
            Vamos <span style={{
              background: `linear-gradient(135deg, ${colors.primary.yellow}, ${colors.primary.blue})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>conversar</span>?
          </h2>
          <p style={{ 
            fontSize: typography.fontSize.xl, 
            color: colors.neutral.text.tertiary,
            marginBottom: spacing.md
          }}>
            Disponível para novos projetos e oportunidades
          </p>
          
          {/* Badge de Disponibilidade */}
          <div style={{ 
            display: 'flex', 
            gap: spacing.sm, 
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: spacing.md
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: spacing.xs,
              padding: `${spacing.xs} ${spacing.md}`,
              background: 'rgba(255, 240, 105, 0.15)',
              border: `1px solid ${colors.primary.yellow}`,
              borderRadius: borderRadius.full,
              fontSize: typography.fontSize.sm,
              fontWeight: typography.fontWeight.semibold,
              color: colors.primary.yellow
            }}>
              <span>🌍</span>
              Trabalho Remoto
            </div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: spacing.xs,
              padding: `${spacing.xs} ${spacing.md}`,
              background: 'rgba(60, 68, 255, 0.15)',
              border: `1px solid ${colors.primary.blue}`,
              borderRadius: borderRadius.full,
              fontSize: typography.fontSize.sm,
              fontWeight: typography.fontWeight.semibold,
              color: colors.primary.blue
            }}>
              <span>✈️</span>
              Disponível para Mudança
            </div>
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: spacing['2xl'] 
        }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.lg }}>
            <div>
              <h3 style={{ 
                fontSize: typography.fontSize['2xl'], 
                fontWeight: typography.fontWeight.bold, 
                marginBottom: spacing.md 
              }}>
                Entre em contato
              </h3>
              <p style={{ 
                color: colors.neutral.text.secondary, 
                marginBottom: spacing.lg, 
                lineHeight: typography.lineHeight.relaxed,
                fontSize: typography.fontSize.base
              }}>
                Estou sempre aberta a discutir novos projetos, ideias criativas ou 
                oportunidades para fazer parte da sua equipe.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.sm }}>
              <a 
                href="mailto:julianapm.dev@gmail.com"
                className="glass-card"
                style={{
                  padding: spacing.sm,
                  display: 'flex',
                  alignItems: 'center',
                  gap: spacing.sm,
                  textDecoration: 'none',
                  borderRadius: borderRadius.lg,
                  transition: 'transform 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${colors.primary.blue}, ${colors.primary.purple})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: typography.fontSize.sm, color: colors.neutral.text.tertiary }}>Email</div>
                  <div style={{ 
                    fontWeight: typography.fontWeight.semibold, 
                    color: colors.neutral.text.primary,
                    fontSize: typography.fontSize.base,
                    wordBreak: 'break-all'
                  }}>julianapm.dev@gmail.com</div>
                </div>
              </a>

              <a 
                href="tel:+5592996131480"
                className="glass-card"
                style={{
                  padding: spacing.sm,
                  display: 'flex',
                  alignItems: 'center',
                  gap: spacing.sm,
                  textDecoration: 'none',
                  borderRadius: borderRadius.lg,
                  transition: 'transform 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${colors.primary.purple}, ${colors.primary.teal})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: typography.fontSize.sm, color: colors.neutral.text.tertiary }}>Telefone</div>
                  <div style={{ 
                    fontWeight: typography.fontWeight.semibold, 
                    color: colors.neutral.text.primary,
                    fontSize: typography.fontSize.base
                  }}>(092) 99613-1480</div>
                </div>
              </a>

              <div className="glass-card" style={{
                padding: spacing.sm,
                display: 'flex',
                alignItems: 'center',
                gap: spacing.sm,
                borderRadius: borderRadius.lg
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${colors.primary.teal}, ${colors.primary.yellow})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: typography.fontSize.sm, color: colors.neutral.text.tertiary }}>Localização</div>
                  <div style={{ 
                    fontWeight: typography.fontWeight.semibold, 
                    color: colors.neutral.text.primary,
                    fontSize: typography.fontSize.base
                  }}>Manaus, Amazonas, Brasil</div>
                </div>
              </div>
            </div>

            <div style={{ paddingTop: spacing.sm }}>
              <h4 style={{ 
                fontWeight: typography.fontWeight.semibold, 
                marginBottom: spacing.sm,
                fontSize: typography.fontSize.base
              }}>Redes Sociais</h4>
              <div style={{ display: 'flex', gap: spacing.sm }}>
                <a 
                  href="https://github.com/juliana039" 
                  target="_blank"
                  className="glass-card"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: colors.neutral.text.tertiary,
                    transition: 'color 0.3s, transform 0.3s',
                    textDecoration: 'none'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = colors.primary.blue;
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = colors.neutral.text.tertiary;
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <svg style={{ width: '24px', height: '24px' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/julianapmag/" 
                  target="_blank"
                  className="glass-card"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: colors.neutral.text.tertiary,
                    transition: 'color 0.3s, transform 0.3s',
                    textDecoration: 'none'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = colors.primary.blue;
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = colors.neutral.text.tertiary;
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <svg style={{ width: '24px', height: '24px' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card" style={{ 
            padding: spacing.lg,
            borderRadius: borderRadius.lg
          }}>
            <h3 style={{ 
              fontSize: typography.fontSize['2xl'], 
              fontWeight: typography.fontWeight.bold, 
              marginBottom: spacing.md 
            }}>
              Envie uma mensagem
            </h3>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: spacing.sm }}>
              <div>
                <label style={{ 
                  display: 'block', 
                  fontSize: typography.fontSize.sm, 
                  fontWeight: typography.fontWeight.semibold, 
                  marginBottom: spacing.xs 
                }}>Nome</label>
                <input 
                  type="text"
                  name="name"
                  required
                  disabled={formState.submitting}
                  style={{
                    width: '100%',
                    background: 'rgba(26, 26, 26, 0.5)',
                    border: `1px solid ${colors.neutral.border}`,
                    borderRadius: borderRadius.md,
                    padding: spacing.sm,
                    color: colors.neutral.text.primary,
                    fontSize: typography.fontSize.base,
                    outline: 'none',
                    transition: 'border 0.2s',
                    opacity: formState.submitting ? 0.6 : 1
                  }}
                  placeholder="Seu nome"
                  onFocus={(e) => e.currentTarget.style.borderColor = colors.primary.blue}
                  onBlur={(e) => e.currentTarget.style.borderColor = colors.neutral.border}
                />
              </div>
              <div>
                <label style={{ 
                  display: 'block', 
                  fontSize: typography.fontSize.sm, 
                  fontWeight: typography.fontWeight.semibold, 
                  marginBottom: spacing.xs 
                }}>Email</label>
                <input 
                  type="email"
                  name="email"
                  required
                  disabled={formState.submitting}
                  style={{
                    width: '100%',
                    background: 'rgba(26, 26, 26, 0.5)',
                    border: `1px solid ${colors.neutral.border}`,
                    borderRadius: borderRadius.md,
                    padding: spacing.sm,
                    color: colors.neutral.text.primary,
                    fontSize: typography.fontSize.base,
                    outline: 'none',
                    transition: 'border 0.2s',
                    opacity: formState.submitting ? 0.6 : 1
                  }}
                  placeholder="seu@email.com"
                  onFocus={(e) => e.currentTarget.style.borderColor = colors.primary.blue}
                  onBlur={(e) => e.currentTarget.style.borderColor = colors.neutral.border}
                />
              </div>
              <div>
                <label style={{ 
                  display: 'block', 
                  fontSize: typography.fontSize.sm, 
                  fontWeight: typography.fontWeight.semibold, 
                  marginBottom: spacing.xs 
                }}>Mensagem</label>
                <textarea 
                  name="message"
                  required
                  disabled={formState.submitting}
                  rows={5}
                  style={{
                    width: '100%',
                    background: 'rgba(26, 26, 26, 0.5)',
                    border: `1px solid ${colors.neutral.border}`,
                    borderRadius: borderRadius.md,
                    padding: spacing.sm,
                    color: colors.neutral.text.primary,
                    fontSize: typography.fontSize.base,
                    outline: 'none',
                    transition: 'border 0.2s',
                    resize: 'none',
                    fontFamily: 'inherit',
                    opacity: formState.submitting ? 0.6 : 1
                  }}
                  placeholder="Sua mensagem..."
                  onFocus={(e) => e.currentTarget.style.borderColor = colors.primary.blue}
                  onBlur={(e) => e.currentTarget.style.borderColor = colors.neutral.border}
                />
              </div>
              
              {/* Mensagem de sucesso */}
              {formState.succeeded && (
                <div style={{
                  padding: spacing.sm,
                  background: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  borderRadius: borderRadius.md,
                  color: '#22c55e',
                  fontSize: typography.fontSize.sm,
                  textAlign: 'center'
                }}>
                  ✅ Mensagem enviada com sucesso! Respondo em breve.
                </div>
              )}
              
              {/* Mensagem de erro */}
              {formState.errors && (
                <div style={{
                  padding: spacing.sm,
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: borderRadius.md,
                  color: '#ef4444',
                  fontSize: typography.fontSize.sm,
                  textAlign: 'center'
                }}>
                  ❌ Erro ao enviar. Tente novamente ou entre em contato por email.
                </div>
              )}
              
              <button 
                type="submit"
                disabled={formState.submitting}
                style={{
                  width: '100%',
                  padding: spacing.sm,
                  background: formState.submitting 
                    ? 'rgba(60, 68, 255, 0.5)' 
                    : `linear-gradient(135deg, ${colors.primary.blue}, ${colors.primary.purple})`,
                  color: colors.neutral.text.primary,
                  borderRadius: borderRadius.md,
                  fontWeight: typography.fontWeight.bold,
                  fontSize: typography.fontSize.base,
                  border: 'none',
                  cursor: formState.submitting ? 'not-allowed' : 'pointer',
                  boxShadow: shadows.glow(colors.primary.blue),
                  transition: 'transform 0.2s',
                  opacity: formState.submitting ? 0.7 : 1
                }}
                onMouseOver={(e) => !formState.submitting && (e.currentTarget.style.transform = 'scale(1.02)')}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {formState.submitting ? 'Enviando...' : 'Enviar mensagem'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .contact-title {
            font-size: ${typography.fontSize['4xl']} !important;
          }
        }

        @media (max-width: 480px) {
          .contact-title {
            font-size: ${typography.fontSize['3xl']} !important;
          }
        }
      `}</style>
    </section>
  );
}
