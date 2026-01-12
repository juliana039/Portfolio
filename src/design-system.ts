// Design System - Tokens centralizados

export const spacing = {
  xs: '0.5rem',    // 8px - Usado em: gaps pequenos, padding de badges
  sm: '1rem',      // 16px - Usado em: padding de botões, gaps entre elementos próximos
  md: '1.5rem',    // 24px - Usado em: Stats paddingBottom (evita corte), padding de cards
  lg: '2rem',      // 32px - Usado em: Stats paddingTop, gaps entre seções próximas
  xl: '3rem',      // 48px - Usado em: gaps entre seções do Hero, margens maiores
  '2xl': '4rem',   // 64px - Usado em: Hero padding inferior, espaçamento entre seções
  '3xl': '6rem',   // 96px - Usado em: Hero padding geral (topo/laterais)
  '4xl': '8rem',   // 128px - Usado em: padding vertical de seções (About, Skills, etc)
} as const;

export const colors = {
  primary: {
    blue: '#3C44FF',      // Azul principal - botões, links hover, gradientes
    yellow: '#FFF069',    // Amarelo - destaques, badges "iOS Developer", logo "JM"
    purple: '#D575FF',    // Roxo - gradientes, cards de skills
    darkPurple: '#3D008E', // Roxo escuro - categoria "Instituto Eldorado"
    teal: '#00808E',      // Verde-azulado - cards de skills, gradientes
  },
  neutral: {
    bg: '#0A0A0A',        // Background principal da página
    surface: '#1A1A1A',   // Background de cards, navbar
    border: 'rgba(255, 255, 255, 0.1)', // Bordas dos cards e elementos
    text: {
      primary: '#ffffff',   // Texto principal (títulos, texto importante)
      secondary: '#d1d5db', // Texto secundário (descrições, parágrafos)
      tertiary: '#9ca3af',  // Texto terciário (labels, metadados)
    }
  }
} as const;

export const typography = {
  fontSize: {
    xs: '0.75rem',   // 12px - Labels pequenos, badges
    sm: '0.875rem',  // 14px - Links do navbar, texto de metadados
    base: '1rem',    // 16px - Texto padrão, parágrafos
    lg: '1.125rem',  // 18px - "Olá! Eu sou", subtítulos
    xl: '1.25rem',   // 20px - Logo "JM", subtítulos maiores
    '2xl': '1.5rem', // 24px - Títulos de cards (H3)
    '3xl': '1.875rem', // 30px - Stats números (mobile pequeno)
    '4xl': '2.25rem',  // 36px - "Juliana Magalhães", títulos mobile
    '5xl': '3rem',     // 48px - Títulos de seção (H2: "Sobre mim", "Skills")
    '6xl': '3.75rem',  // 60px - Não usado atualmente
    '7xl': '5rem',     // 80px - "Desenvolvedora de Software" (desktop)
  },
  fontWeight: {
    normal: '400',   // Peso normal - texto comum
    medium: '500',   // Peso médio - links, labels
    semibold: '600', // Semi-negrito - subtítulos, destaques
    bold: '700',     // Negrito - títulos, botões
  },
  lineHeight: {
    tight: '1.1',    // Usado em: títulos grandes (pouco espaço entre linhas)
    normal: '1.5',   // Usado em: texto padrão
    relaxed: '1.7',  // Usado em: parágrafos longos (mais legibilidade)
  }
} as const;

export const borderRadius = {
  sm: '8px',    // Bordas pequenas - inputs, tags
  md: '12px',   // Bordas médias - botões, badges
  lg: '16px',   // Bordas grandes - cards
  xl: '20px',   // Bordas extra grandes - cards destacados, seção About foto
  full: '9999px', // Bordas totalmente arredondadas - botões pill, navbar, badges circulares
} as const;

export const breakpoints = {
  sm: '640px',  // Mobile grande / Tablet pequeno
  md: '768px',  // Tablet - onde grid muda de 1 para 2 colunas
  lg: '1024px', // Laptop / Desktop pequeno
  xl: '1280px', // Desktop grande
} as const;

export const container = {
  maxWidth: '1100px',      // Largura máxima do conteúdo - centraliza em telas grandes
  padding: {
    mobile: '1.5rem',      // 24px - Padding lateral em mobile (< 768px)
    desktop: '2.5rem',     // 40px - Padding lateral em desktop (> 768px)
  }
} as const;

export const gradients = {
  primary: 'linear-gradient(135deg, #3C44FF 0%, #D575FF 100%)',   // Azul → Roxo - botões principais, badges
  secondary: 'linear-gradient(135deg, #FFF069 0%, #3C44FF 100%)', // Amarelo → Azul - destaques alternativos
  accent: 'linear-gradient(135deg, #00808E 0%, #D575FF 100%)',    // Verde-azulado → Roxo - cards especiais
} as const;

export const shadows = {
  sm: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',      // Sombra pequena - botões, elementos pequenos
  md: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',      // Sombra média - cards no hover
  lg: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',    // Sombra grande - foto do Hero
  xl: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',     // Sombra extra grande - foto do About
  glow: (color: string) => `0 10px 30px ${color}40`, // Brilho colorido - botões com gradiente, badges
} as const;
