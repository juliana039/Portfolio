'use client';

import { useState } from 'react';
import { spacing, colors, typography, borderRadius } from '@/design-system';

interface MediaItem {
  type: 'image' | 'video';
  url: string;
  caption?: string;
}

export function MediaCarousel({ media }: { media: MediaItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  if (!media || media.length === 0) return null;

  const currentMedia = media[currentIndex];

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Mídia */}
      <div 
        className="media-carousel-container"
        style={{
          minHeight: '400px',
          maxHeight: '600px',
          borderRadius: borderRadius.xl,
          overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(60, 68, 255, 0.05), rgba(147, 51, 234, 0.05))',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: spacing.lg
        }}
      >
        {currentMedia.type === 'image' ? (
          <img
            src={currentMedia.url}
            alt={currentMedia.caption || ''}
            style={{
              maxWidth: '100%',
              maxHeight: '550px',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: borderRadius.md
            }}
          />
        ) : (
          <video
            src={currentMedia.url}
            controls
            style={{
              width: '100%',
              height: '100%'
            }}
          />
        )}
      </div>

      {/* Caption */}
      {currentMedia.caption && (
        <p style={{
          textAlign: 'center',
          marginTop: spacing.sm,
          color: colors.neutral.text.tertiary,
          fontSize: typography.fontSize.sm
        }}>
          {currentMedia.caption}
        </p>
      )}

      {/* Navegação */}
      {media.length > 1 && (
        <>
          {/* Botão Anterior */}
          <button
            onClick={goToPrevious}
            style={{
              position: 'absolute',
              left: spacing.md,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0, 0, 0, 0.7)',
              border: 'none',
              borderRadius: borderRadius.full,
              width: '48px',
              height: '48px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)'}
            aria-label="Anterior"
          >
            <svg width="24" height="24" fill="none" stroke="white" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Botão Próximo */}
          <button
            onClick={goToNext}
            style={{
              position: 'absolute',
              right: spacing.md,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0, 0, 0, 0.7)',
              border: 'none',
              borderRadius: borderRadius.full,
              width: '48px',
              height: '48px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)'}
            aria-label="Próximo"
          >
            <svg width="24" height="24" fill="none" stroke="white" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicadores */}
          <div style={{
            position: 'absolute',
            bottom: spacing.md,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: spacing.xs
          }}>
            {media.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: index === currentIndex ? '32px' : '12px',
                  height: '12px',
                  borderRadius: borderRadius.full,
                  background: index === currentIndex ? colors.primary.blue : 'rgba(255, 255, 255, 0.5)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  padding: 0
                }}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
