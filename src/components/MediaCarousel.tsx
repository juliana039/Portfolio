'use client';

import { useState } from 'react';
import { spacing, colors, borderRadius } from '@/design-system';

interface Media {
  type: 'image' | 'video';
  url: string;
  caption?: string;
}

interface MediaCarouselProps {
  media: Media[];
}

export function MediaCarousel({ media }: MediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const currentMedia = media[currentIndex];

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      {/* Container principal */}
      <div 
        className="media-carousel-container"
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '400px',
          maxHeight: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0, 0, 0, 0.2)',
          borderRadius: borderRadius.xl,
          overflow: 'hidden'
        }}
      >
        {/* Botão anterior */}
        {media.length > 1 && (
          <button
            onClick={goToPrevious}
            style={{
              position: 'absolute',
              left: spacing.md,
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: borderRadius.full,
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${colors.neutral.border}`,
              color: colors.neutral.text.primary,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              transition: 'all 0.3s'
            }}
            className="carousel-button"
          >
            <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Conteúdo */}
        {currentMedia.type === 'image' ? (
          <img
            src={currentMedia.url}
            alt={currentMedia.caption || 'Screenshot do projeto'}
            style={{
              maxWidth: '100%',
              maxHeight: '600px',
              height: 'auto',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        ) : (
          <video
            src={currentMedia.url}
            controls
            style={{
              maxWidth: '100%',
              maxHeight: '500px',
              height: 'auto',
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
              borderRadius: borderRadius.md
            }}
          />
        )}

        {/* Botão próximo */}
        {media.length > 1 && (
          <button
            onClick={goToNext}
            style={{
              position: 'absolute',
              right: spacing.md,
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: borderRadius.full,
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${colors.neutral.border}`,
              color: colors.neutral.text.primary,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              transition: 'all 0.3s'
            }}
            className="carousel-button"
          >
            <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Indicadores */}
      {media.length > 1 && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: spacing.xs,
          marginTop: spacing.lg
        }}>
          {media.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: borderRadius.full,
                background: index === currentIndex ? colors.primary.blue : colors.neutral.border,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                padding: 0
              }}
              aria-label={`Ir para mídia ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Caption */}
      {currentMedia.caption && (
        <p style={{
          textAlign: 'center',
          marginTop: spacing.md,
          color: colors.neutral.text.tertiary,
          fontSize: '14px'
        }}>
          {currentMedia.caption}
        </p>
      )}
    </div>
  );
}
