export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Apple Developer Academy' | 'Devtitans' | 'Instituto Eldorado';
  tags: string[];
  published: boolean;
  appStoreLink?: string;
  image?: string;
  year: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: 'story-stage',
    title: 'Story Stage',
    description: 'Jogo multiplayer de improvisação para até 8 jogadores',
    category: 'Apple Developer Academy',
    tags: ['Game Center', 'Multiplayer', 'SwiftUI', 'Internacionalização'],
    published: true,
    year: '2024',
    highlights: [
      'Sincronização com Game Center',
      'Sistema de comunicação entre participantes',
      'Responsividade para diferentes dispositivos'
    ]
  },
  {
    id: 'timeti',
    title: 'Timeti',
    description: 'Jogo educacional com algoritmo matemático',
    category: 'Apple Developer Academy',
    tags: ['SwiftUI', 'Python', 'Educação', 'SBGames 2025'],
    published: true,
    year: '2024',
    highlights: [
      'Algoritmo de plano projetivo finito',
      'Integração Python-Swift via JSON',
      '3º lugar Best Paper - SBGames 2025'
    ]
  },
  {
    id: 'carebeep',
    title: 'CareBeep',
    description: 'Solução de comunicação assistiva',
    category: 'Apple Developer Academy',
    tags: ['Acessibilidade', 'VoiceOver', 'Push Notifications', 'SwiftUI'],
    published: true,
    year: '2024',
    highlights: [
      'Desenvolvimento front-end completo',
      'Implementação de acessibilidade (VoiceOver)',
      'Internacionalização'
    ]
  },
  {
    id: 'beezzy',
    title: 'Beezzy',
    description: 'App multiplataforma para watchOS e iOS',
    category: 'Apple Developer Academy',
    tags: ['watchOS', 'CloudKit', 'MVVM', 'Watch Connectivity'],
    published: true,
    year: '2024',
    highlights: [
      'Arquitetura MVVM',
      'Sincronização CloudKit',
      'Watch Connectivity para sincronização entre dispositivos'
    ]
  },
  {
    id: 'through-the-flames',
    title: 'Through the Flames',
    description: 'Jogo de aventura e superação',
    category: 'Apple Developer Academy',
    tags: ['SwiftUI', 'SpriteKit', 'Game Design'],
    published: true,
    year: '2024',
    highlights: [
      'Mecânicas de gameplay inovadoras',
      'Narrativa envolvente',
      'Visual artístico único'
    ]
  },
  {
    id: 'cultural-storm',
    title: 'Cultural Storm',
    description: 'Exploração cultural e aprendizado',
    category: 'Apple Developer Academy',
    tags: ['SwiftUI', 'Educação', 'Cultura', 'Internacionalização'],
    published: true,
    year: '2024',
    highlights: [
      'Conteúdo cultural diversificado',
      'Interface intuitiva',
      'Sistema de aprendizado interativo'
    ]
  },
  {
    id: 'quem-matou-meus-cachos',
    title: 'Quem Matou Meus Cachos',
    description: 'App para cuidados capilares',
    category: 'Apple Developer Academy',
    tags: ['SwiftUI', 'CoreML', 'UIKit'],
    published: false,
    year: '2024'
  },
  {
    id: 'wwdc-2024',
    title: 'Projeto WWDC',
    description: 'Projeto desenvolvido para submissão WWDC',
    category: 'Apple Developer Academy',
    tags: ['Swift', 'SwiftUI', 'WWDC'],
    published: false,
    year: '2024'
  },
  {
    id: 'devtitans',
    title: 'Devtitans',
    description: 'Capacitação em Android embarcado e IoT',
    category: 'Devtitans',
    tags: ['Android', 'IoT', 'Linux', 'C/C++'],
    published: false,
    year: '2023'
  },
  {
    id: 'residencia-eldorado',
    title: 'Residência Eldorado',
    description: 'Desenvolvimento de jogo 3D educacional',
    category: 'Instituto Eldorado',
    tags: ['Unity', 'C#', 'Game Development', '3D'],
    published: false,
    year: '2025'
  }
];