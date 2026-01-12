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
  
  // Descrição completa (texto longo)
  fullDescription?: string;
  
  // Galeria de mídia
  media?: {
    type: 'image' | 'video';
    url: string;
    caption?: string;
  }[];
  
  // Informações de equipe
  team?: {
    name: string;
    photo?: string;
    role?: string;
  }[];
  
  // Duração do projeto
  duration?: string;
  
  // Arquivo de case (PDF, apresentação, etc)
  caseStudy?: string;
  
  // Contribuição pessoal (para projetos em equipe)
  myContribution?: string[];
}

export const categoryColors = {
  'Apple Developer Academy': 'from-primary-blue to-primary-purple',
  'Devtitans': 'from-primary-teal to-primary-blue',
  'Instituto Eldorado': 'from-primary-purple to-primary-darkPurple'
};

export const projects: Project[] = [
  {
    id: 'story-stage',
    title: 'Story Stage',
    description: 'Jogo multiplayer de improvisação para desenvolver habilidades de comunicação',
    category: 'Apple Developer Academy',
    tags: ['Game Center', 'Multiplayer', 'SwiftUI', 'Internacionalização'],
    published: true,
    year: '2024',
    image: '/story-stage/story-stage.png',
    appStoreLink: 'https://apps.apple.com/br/app/story-stage/id6751246359',
    duration: '4 meses',
    fullDescription: `Story Stage é um jogo multiplayer para iPhone criado para ajudar pessoas a praticar suas habilidades de comunicação de forma leve e divertida. O projeto foi escolhido para representar a Apple Developer Academy Manaus na cerimônia de graduação 2025.

Você já travou ao precisar falar em público? Ou saiu de uma reunião pensando "eu poderia ter me expressado melhor"? Você não está sozinho. Esse sentimento tem nome: glossofobia, o medo patológico de falar em público. Um estudo da UFMG revelou que quase 60% dos estudantes universitários entrevistados experimentam esse medo ao se comunicar.

Isso é preocupante, considerando que o mercado de trabalho valoriza cada vez mais essa habilidade. Segundo o LinkedIn, comunicação foi uma das competências mais procuradas em 2024. Durante nossas entrevistas, descobrimos algo importante: o medo não está em falar, mas em errar ou não conseguir organizar os pensamentos na frente das pessoas.

Foi então que descobrimos o poder da improvisação. Quando você aprende a improvisar, começa a encontrar novas formas de contar a mesma história, adaptar seu discurso ao público e, acima de tudo, continuar com confiança mesmo quando algo não sai como planejado. E foi exatamente por isso que criamos o Story Stage.

O jogo funciona assim: de 3 a 8 jogadores conectam-se via iPhone. A cada rodada, um apresentador é escolhido aleatoriamente. O apresentador recebe três emojis secretos e tem 30 segundos para improvisar uma história. Os outros jogadores devem adivinhar quais emojis foram usados votando. Com essa dinâmica, todos praticam improvisação, escuta ativa e autoconfiança de forma divertida.

Como é um jogo, errar não é problema - faz parte da experiência. Aqui, cada erro vira oportunidade de aprendizado, e cada tentativa é uma nova chance de se expressar criativamente. Criamos um ambiente seguro e divertido onde jovens podem explorar e melhorar suas habilidades de comunicação, improvisação e escuta ativa - e também falhar com segurança.`,
    highlights: [
      'Escolhido para representar Academy Manaus na graduação 2025',
      'Sincronização multiplayer com Game Center para até 8 jogadores',
      'Sistema de comunicação em tempo real',
      'Interface totalmente internacionalizada (PT/EN)',
      'Foco em desenvolvimento de soft skills através do jogo'
    ],
    team: [
      { name: 'Maria Tereza Perez', role: 'iOS Developer' },
      { name: 'Juliana Magalhães', role: 'iOS Developer' },
      { name: 'Kássia Siqueira', role: 'Designer' },
      { name: 'Luana Gerber', role: 'iOS Developer' }
    ],
    myContribution: [
      'Desenvolvimento front-end completo em SwiftUI',
      'Implementação do sistema multiplayer com Game Center',
      'Design e implementação da experiência do usuário',
      'Internacionalização completa do app (PT/EN)'
    ],
    media: [
      { type: 'image', url: '/story-stage/story-stage-1.jpeg', caption: 'Seleção de emojis' },
      { type: 'image', url: '/story-stage/story-stage-2.png', caption: 'Tela de votação' },
      { type: 'image', url: '/story-stage/story-stage-3.png', caption: 'Gameplay multiplayer' },
      { type: 'image', url: '/story-stage/story-stage-4.png', caption: 'Interface do apresentador' }
    ]
  },
  {
    id: 'timeti',
    title: 'Timeti',
    description: 'Jogo de cartas educacional baseado em planos projetivos finitos',
    category: 'Apple Developer Academy',
    tags: ['SwiftUI', 'Matemática', 'Educação STEAM', 'SBGames 2025'],
    published: true,
    year: '2024',
    appStoreLink: 'https://apps.apple.com/br/app/timeti/id6752839068',
    duration: '6 meses',
    fullDescription: `Timeti é um jogo de cartas digital com o objetivo de encontrar símbolos iguais entre as cartas, desenvolvido como projeto de Trabalho de Conclusão de Curso (TCC) de Ciência da Computação na UFAM. O projeto foi reconhecido com o Best Paper na trilha de educação do SBGames 2025.

O diferencial do Timeti está na sua base matemática: o jogo é baseado nos planos projetivos finitos, estruturas matemáticas que garantem que qualquer par de cartas tenha exatamente uma figura em comum. Essa propriedade matemática cria um jogo justo e desafiador, onde a vitória depende puramente de atenção e agilidade.

O desenvolvimento envolveu a criação de um algoritmo em Python que gera as combinações de cartas usando a teoria dos planos projetivos finitos. Esse algoritmo foi então integrado ao app iOS através de arquivos JSON, permitindo que o jogo tenha diferentes níveis de dificuldade matematicamente equilibrados.

O jogo une educação STEAM (Science, Technology, Engineering, Arts, Mathematics) com a cultura brasileira, utilizando elementos visuais inspirados na fauna e flora amazônica. Cada carta apresenta símbolos coloridos que representam elementos da biodiversidade regional, tornando o aprendizado matemático mais envolvente e culturalmente relevante.

Desenvolvido inteiramente em SwiftUI, o Timeti oferece uma experiência fluida e responsiva, com animações suaves e feedback visual imediato. O projeto demonstra como conceitos matemáticos avançados podem ser transformados em experiências de aprendizado lúdicas e acessíveis.`,
    highlights: [
      'Best Paper na trilha de educação - SBGames 2025',
      'Algoritmo baseado em planos projetivos finitos',
      'Integração Python-Swift via JSON',
      'Educação STEAM com cultura brasileira',
      'Projeto de TCC - Ciência da Computação UFAM'
    ]
  },
  {
    id: 'carebeep',
    title: 'CareBeep',
    description: 'Solução de comunicação assistiva para autonomia e segurança',
    category: 'Apple Developer Academy',
    tags: ['Acessibilidade', 'VoiceOver', 'Push Notifications', 'SwiftUI'],
    published: true,
    year: '2024',
    appStoreLink: 'https://apps.apple.com/br/app/carebeep/id6737746972',
    duration: '3 meses',
    fullDescription: `CareBeep é uma solução de comunicação assistiva que ajuda pessoas de qualquer idade ou condição a viver com mais autonomia e segurança. Com uma interface simples e intuitiva, você pode solicitar ajuda a qualquer momento usando pictogramas, indicando onde você está e o que precisa - e seus cuidadores serão notificados imediatamente.

O app foi desenvolvido pensando em pessoas com dificuldades de comunicação, idosos, pessoas com deficiência, ou qualquer pessoa que necessite de suporte em situações do dia a dia. Com apenas 3 toques na tela, é possível convocar ajuda de forma rápida e clara.

O diferencial do CareBeep está na sua acessibilidade completa: o app foi desenvolvido desde o início com total suporte ao VoiceOver, permitindo que pessoas com deficiência visual também possam usá-lo com autonomia. Implementei toda a camada de acessibilidade, garantindo que cada elemento da interface seja navegável e compreensível através de leitores de tela.

O sistema de notificações push garante que os cuidadores sejam alertados instantaneamente quando uma solicitação de ajuda é feita, incluindo informações sobre a localização e o tipo de assistência necessária. Isso permite que os cuidadores possam retomar suas atividades com maior tranquilidade, sabendo que estarão sempre conectados.

CareBeep é mais do que um app - é uma ferramenta que promove independência, reduz ansiedade e fortalece os laços de cuidado entre pessoas. Permita-se explorar novas possibilidades e desafios, sabendo que o CareBeep está sempre ao seu lado.`,
    highlights: [
      'Sistema de comunicação por pictogramas',
      'Notificações push instantâneas para cuidadores',
      'Acessibilidade completa com VoiceOver',
      'Interface intuitiva com apenas 3 toques',
      'Internacionalização (PT/EN)'
    ],
    team: [
      { name: 'Maria Tereza Perez', role: 'iOS Developer' },
      { name: 'Juliana Magalhães', role: 'iOS Developer' },
      { name: 'Letícia Lima', role: 'Designer' },
      { name: 'Luana Gerber', role: 'iOS Developer' }
    ],
    myContribution: [
      'Desenvolvimento front-end completo',
      'Implementação total de acessibilidade (VoiceOver)',
      'Sistema de notificações push',
      'Internacionalização do app'
    ]
  },
  {
    id: 'beezzy',
    title: 'Beezzy',
    description: 'App multiplataforma para mães compartilharem cuidados com sua rede de apoio',
    category: 'Apple Developer Academy',
    tags: ['watchOS', 'CloudKit', 'MVVM', 'Watch Connectivity'],
    published: true,
    year: '2024',
    appStoreLink: 'https://apps.apple.com/br/app/beezzy/id6746419810',
    duration: '4 meses',
    fullDescription: `Ser mãe muda tudo, inclusive a forma como o tempo passa. Entre mamadas, fraldas e noites sem dormir, é fácil esquecer de si mesma. Beezzy está aqui para lembrar: você não precisa dar conta de tudo sozinha! Aqui, o cuidado é compartilhado.

Com o Beezzy, você pode conectar-se com sua rede de apoio - aqueles que cuidam de você, também podem cuidar com você. O app permite criar tarefas específicas para que sua rede de apoio saiba exatamente do que você precisa, delegar responsabilidades de forma clara e fácil, e compartilhar o cuidado sem culpa.

A arquitetura do app utiliza o padrão MVVM (Model-View-ViewModel) para separação clara de responsabilidades e facilitar manutenção. A sincronização entre iPhone e Apple Watch é feita através do CloudKit, permitindo que os dados estejam sempre atualizados em todos os dispositivos.

Implementei o Watch Connectivity para comunicação em tempo real entre iPhone e Apple Watch, permitindo que a mãe possa rapidamente adicionar tarefas ou verificar o status das atividades diretamente do pulso, sem precisar pegar o telefone - especialmente útil durante mamadas ou quando está com o bebê no colo.

Beezzy é mais que um app, é um lugar para respirar. É para você que ama, cuida, e ainda estuda, trabalha e sonha. O app cria uma "colmeia de cuidado" onde cada membro da rede de apoio sabe como pode ajudar de forma prática e organizada.`,
    highlights: [
      'Sincronização CloudKit entre iPhone e Apple Watch',
      'Arquitetura MVVM escalável',
      'Watch Connectivity para comunicação em tempo real',
      'Sistema de delegação de tarefas',
      'Interface otimizada para watchOS'
    ],
    team: [
      { name: 'Eduardo Camara', role: 'iOS Developer' },
      { name: 'Juliana Magalhães', role: 'iOS Developer' },
      { name: 'Letícia Lima', role: 'Designer' },
      { name: 'Taynara Santos', role: 'Designer' },
      { name: 'Sérgio César', role: 'iOS Developer' },
      { name: 'Jaide Zardin', role: 'iOS Developer' },
      { name: 'Amanda Rabelo', role: 'iOS Developer' }
    ],
    myContribution: [
      'Implementação da arquitetura MVVM',
      'Sincronização com CloudKit',
      'Watch Connectivity entre iPhone e Apple Watch',
      'Interface e lógica do app watchOS'
    ]
  },
  {
    id: 'through-the-flames',
    title: 'Through the Flames',
    description: 'Jogo endless runner sobre o desmatamento da Amazônia',
    category: 'Apple Developer Academy',
    tags: ['SpriteKit', 'SwiftUI', 'Game Design', 'iPad'],
    published: false,
    year: '2025',
    duration: '3 semanas',
    fullDescription: `Through the Flames é um jogo desenvolvido para submissão ao WWDC Student Challenge 2025, que conta a história de uma onça-pintada que perdeu seu filhote e precisa atravessar quatro etapas de desafios para reencontrá-lo. Cada etapa representa um estágio diferente do desmatamento da Floresta Amazônica.

O jogo utiliza a mecânica de endless runner em 2D com vista lateral, onde o personagem permanece fixo na tela enquanto o cenário se move. O jogador deve desviar dos obstáculos alternando entre três pistas (superior, meio e inferior), representando os perigos causados pelo desmatamento: troncos caídos, áreas queimadas, máquinas de desmatamento e perda de habitat.

Desenvolvido exclusivamente para iPad usando SpriteKit para a engine de física e animações do jogo, e SwiftUI para as interfaces de menu e narrativa. O SpriteKit permite criar movimentos fluidos e colisões precisas, essenciais para a jogabilidade de um endless runner, enquanto o SwiftUI proporciona transições suaves entre as fases e a narrativa.

O projeto aborda um tema ambiental crítico de forma interativa, buscando conscientizar jogadores sobre o impacto do desmatamento na biodiversidade amazônica. Cada uma das quatro etapas apresenta um visual progressivamente mais degradado, mostrando a transformação da floresta desde seu estado natural até áreas completamente devastadas.

A narrativa emocional da onça procurando seu filhote cria conexão empática com o jogador, tornando a mensagem sobre conservação ambiental mais impactante e memorável.`,
    highlights: [
      'Desenvolvido para WWDC Student Challenge 2025',
      'Mecânica endless runner com 3 pistas',
      'Narrativa sobre desmatamento da Amazônia',
      'Engine de física e animações com SpriteKit',
      'Interfaces em SwiftUI otimizadas para iPad',
      '4 etapas progressivas representando degradação ambiental'
    ]
  },
  {
    id: 'cultural-storm',
    title: 'Cultural Storm',
    description: 'Experiência interativa para estudantes de intercâmbio na Apple TV',
    category: 'Apple Developer Academy',
    tags: ['tvOS', 'SwiftUI', 'Educação', 'Cultura', 'Internacionalização'],
    published: true,
    year: '2024',
    appStoreLink: 'https://apps.apple.com/br/app/cultural-storm/id6743093618',
    duration: '1 mes',
    fullDescription: `Ajude Travis a superar o choque cultural conectando-se com outros estudantes de intercâmbio nesta experiência divertida e envolvente criada especialmente para Apple TV. Cultural Storm foi desenvolvido para estudantes universitários em intercâmbio e entusiastas de cultura!

Cultural Storm transforma o desafio da adaptação cultural em uma oportunidade de crescimento e amizade. Diferente de outros fóruns, vídeos e redes sociais, nosso app cria um espaço interativo onde estudantes de intercâmbio se encontram pessoalmente e constroem conexões genuínas enquanto exploram diferentes culturas de forma leve e divertida.

Esta ferramenta essencial para estudantes internacionais ajuda a minimizar o impacto do choque cultural durante a jornada acadêmica no exterior. O mascote amigável Travis guia os jogadores através de perguntas culturais aleatórias que provocam discussões autênticas e conexões reais.

A experiência foi otimizada para Apple TV, aproveitando a tela grande para reunir grupos de estudantes na sala e criar momentos de interação face a face. O app utiliza SwiftUI para interfaces fluidas e responsivas no tvOS, com navegação por controle remoto intuitiva.

Como funciona: reúna amigos estudantes de intercâmbio em frente à Apple TV, selecione o número de participantes, responda perguntas culturais quando for sua vez, compartilhe suas histórias e tradições, e construa laços que transcendem fronteiras culturais. Descubra novas culturas e compartilhe experiências! Torne sua experiência de intercâmbio inesquecível!`,
    highlights: [
      'Experiência otimizada para Apple TV',
      'Perguntas culturais aleatórias para discussão',
      'Interface guiada pelo mascote Travis',
      'Suporte para múltiplos participantes',
      'Foco em conexões presenciais e autênticas',
      'Ferramenta para minimizar choque cultural'
    ],
    team: [
      { name: 'Eduardo Camara', role: 'Developer' },
      { name: 'Juliana Magalhães', role: 'Developer' },
      { name: 'Letícia Lima', role: 'Designer' },
      { name: 'Luana Gerber', role: 'Developer' }
    ],
    myContribution: [
      'Desenvolvimento da interface para tvOS',
      'Implementação do sistema de navegação com controle remoto',
      'Lógica de perguntas e progressão',
      'Otimização para tela grande'
    ]
  },
  {
    id: 'quem-matou-meus-cachos',
    title: 'Quem Matou Meus Cachos',
    description: 'App de identificação e cuidados para cabelos cacheados e crespos',
    category: 'Apple Developer Academy',
    tags: ['SwiftUI', 'CoreML', 'UIKit', 'Visão Computacional'],
    published: true,
    year: '2024',
    highlights: [
      'Identificação de tipo de cabelo com CoreML',
      'Rotinas personalizadas de cuidados',
      'Interface adaptativa SwiftUI + UIKit'
    ]
  },
  {
    id: 'vr-experience',
    title: 'ARcheology - Experiência em Realidade Aumentada',
    description: 'Aplicação imersiva em AR para exploração de artefatos arqueológicos',
    category: 'Apple Developer Academy',
    tags: ['ARKit', 'Unity', 'C#', '3D', 'Realidade Aumentada'],
    published: false,
    year: '2025',
    duration: '1 mês',
    fullDescription: `ARcheology é uma experiência em Realidade Aumentada desenvolvida individualmente usando Unity 3D e C#, criada durante curso de especialização em Realidade Estendida (XR). O projeto permite que usuários escaneiem o ambiente ao redor e interajam com objetos arqueológicos virtuais em 3D.

O desenvolvimento seguiu uma progressão estruturada através de 5 módulos: Visão Geral de Realidade Estendida (conceitos de AR, VR e XR), Montagem da Base Técnica (instalação e configuração da Unity), Interação e Manipulação de Objetos (escaneamento de ambiente, adição e interação com objetos 3D), Animações e Comportamentos (implementação de animações e comportamentos interativos), e UI e Contexto Imersivo (interfaces em AR e refinamento das interações).

A aplicação utiliza ARKit para reconhecimento de superfícies e tracking de ambiente, permitindo que usuários "coloquem" artefatos arqueológicos virtuais em suas mesas ou chão. Os objetos podem ser segurados, rotacionados e examinados de perto, com um sistema de scanner que revela informações históricas sobre cada peça.

Implementei animações para criar uma experiência mais imersiva, como um armário virtual que se abre revelando os artefatos, e um scanner com efeitos visuais que "detecta" objetos no ambiente. A interface foi projetada para ser intuitiva mesmo em AR, com elementos UI que se adaptam à orientação do dispositivo e à posição do usuário.

O projeto demonstra o potencial da Realidade Aumentada na educação e preservação cultural, permitindo que pessoas explorem artefatos históricos de forma interativa sem precisar visitar museus físicos.`,
    highlights: [
      'Desenvolvimento individual em Unity 3D e C#',
      'Escaneamento de ambiente com ARKit',
      'Interação natural com objetos 3D',
      'Animações e comportamentos imersivos',
      'Interface adaptativa para AR',
      'Sistema de scanner com revelação de informações'
    ],
    media: [
      { type: 'video', url: '/projects/vr/demo.mp4', caption: 'Demonstração completa da experiência AR' }
    ]
  },
  {
    id: 'wwdc-2024',
    title: 'Projeto WWDC',
    description: 'Projeto desenvolvido para submissão WWDC Student Challenge',
    category: 'Apple Developer Academy',
    tags: ['Swift', 'SwiftUI', 'WWDC', 'Swift Playgrounds'],
    published: false,
    year: '2024',
    highlights: [
      'Projeto interativo educacional',
      'Desenvolvido em Swift Playgrounds',
      'Foco em aprendizado criativo'
    ]
  },
  {
    id: 'devtitans',
    title: 'Smartlamp Access Control',
    description: 'Implementação nativa de nova forma de desbloqueio por luminosidade no Android',
    category: 'Devtitans',
    tags: ['Android', 'IoT', 'AOSP', 'C/C++', 'Java', 'Sistemas Embarcados'],
    published: false,
    year: '2023',
    duration: '1 mês',
    caseStudy: '/projects/devtitans/Grupo_3_-_DevTITANS.pdf',
    fullDescription: `O projeto SMARTLAMP Access Control foi desenvolvido durante o programa DevTITANS, uma capacitação em desenvolvimento Android para sistemas embarcados realizada em parceria com a Motorola, Flextronics e Instituto Eldorado.

O objetivo principal era criar uma forma nativa de desbloqueio de tela no Android que utilizasse o sensor de luminosidade do dispositivo. O sistema permite que o usuário configure um limite de luminosidade, e quando o ambiente atinge esse valor, o dispositivo pode ser desbloqueado automaticamente.

O maior desafio foi trabalhar diretamente com o Android Open Source Project (AOSP), modificando componentes fundamentais do sistema operacional. Foi necessário rastrear e duplicar código do sistema de autenticação existente (PIN), adaptar para nossa nova lógica, e modificar o Keyguard - o componente responsável pela tela de bloqueio do Android.

Implementamos uma interface de configuração com SeekBar para ajuste fino da luminosidade, substituindo o campo de texto tradicional. A lógica de desbloqueio verifica continuamente o sensor de luz ambiente e compara com o threshold configurado, fazendo tentativas de desbloqueio a cada 150ms quando o limite é atingido.

Este projeto me proporcionou experiência prática em desenvolvimento de baixo nível para Android, trabalho com código nativo C/C++ e Java, compreensão profunda da arquitetura do AOSP, e colaboração em equipe multidisciplinar para desenvolvimento de sistemas embarcados.`,
    highlights: [
      'Implementação nativa no Android Open Source Project (AOSP)',
      'Sensor de luminosidade para desbloqueio de tela',
      'Modificação do Keyguard (tela de bloqueio)',
      'Interface de configuração com SeekBar'
    ],
    team: [
      { name: 'Juliana Pereira de Magalhães' },
      { name: 'Felipe Rocha Spitale' },
      { name: 'Igor De Souza Lima' },
      { name: 'Nasthya Barauna Peixoto' },
      { name: 'Thiago Abreu Dos Santos' },
      { name: 'Francisco Sales Carvalho Junior' },
      { name: 'Yago Lopes Martins' }
    ],
    myContribution: [
      'Implementação da interface de configuração do Smartlamp',
      'Desenvolvimento da lógica de desbloqueio baseada em luminosidade',
      'Modificação do Keyguard para integração com sensor de luz',
      'Rastreamento e duplicação de código do sistema Android'
    ],
    media: [
      { type: 'image', url: '/projects/devtitans/config-screen.png', caption: 'Tela de Configurações' },
      { type: 'image', url: '/projects/devtitans/unlock-screen.png', caption: 'Tela de Desbloqueio' },
      { type: 'image', url: '/projects/devtitans/result.png', caption: 'Resultado Final' }
    ]
  },
  {
    id: 'residencia-eldorado',
    title: 'Jogo 3D Educacional',
    description: 'Desenvolvimento de jogo 3D educacional em Unity com equipe multidisciplinar',
    category: 'Instituto Eldorado',
    tags: ['Unity', 'C#', 'Game Development', '3D', 'Modelagem'],
    published: false,
    year: '2025',
    highlights: [
      'Jogo educacional em ambiente 3D',
      'Colaboração com designers e modeladores 3D',
      'Mecânicas de gameplay educativas',
      'Pipeline completo de desenvolvimento'
    ]
  }
];
