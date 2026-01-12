# 🎨 Guia Rápido de Variáveis - Design System

## 📏 SPACING - Onde cada tamanho é usado

### Para ajustar ESPAÇO SUPERIOR da página Hero:
```tsx
// Arquivo: Hero.tsx - linha 13
paddingTop: '120px'  // ← ALTERE ESTE VALOR DIRETAMENTE

// Mobile (linha 276):
padding-top: 100px !important;  // ← Desktop para Mobile

// Mobile pequeno (linha 486):
padding-top: 90px !important;   // ← Mobile para telas bem pequenas
```

### Para ajustar STATS (evitar corte):
```tsx
// Arquivo: Hero.tsx - linhas 123-124
paddingTop: spacing.lg,      // 32px - espaço acima dos stats
paddingBottom: spacing.md,   // 24px - espaço abaixo (evita corte)
```

### Uso de cada spacing:
| Variável | Valor | Principais Usos |
|----------|-------|-----------------|
| `xs` | 8px | Gaps pequenos entre badges, padding interno |
| `sm` | 16px | Padding de botões, gaps próximos |
| `md` | 24px | **Stats paddingBottom**, padding de cards |
| `lg` | 32px | **Stats paddingTop**, gaps entre seções |
| `xl` | 48px | Gaps do Hero, margens maiores |
| `2xl` | 64px | **Hero padding inferior** |
| `3xl` | 96px | **Hero padding geral** (não usado no topo agora) |
| `4xl` | 128px | Padding vertical de About, Skills, Projects |

---

## 🎯 VALORES FIXOS (não usam variáveis)

### Hero.tsx - Espaçamento Superior
```tsx
Linha 13:  paddingTop: '120px'        // Desktop principal
Linha 276: padding-top: 100px         // Mobile (≤767px)
Linha 286: padding-top: 90px          // Mobile pequeno (≤480px)
```

**Para ajustar o espaço do topo:**
1. Abra `src/components/Hero.tsx`
2. Vá na **linha 13**
3. Altere `'120px'` para o valor desejado (ex: `'100px'`, `'140px'`)

---

## 🎨 CORES - Onde são usadas

| Cor | Código | Onde usar |
|-----|--------|-----------|
| **blue** | #3C44FF | Botões, links hover, "Software" |
| **yellow** | #FFF069 | Destaques, logo JM, "Magalhães" |
| **purple** | #D575FF | Gradientes, skills cards |
| **teal** | #00808E | Skills cards, badges |

### Cores de texto:
- `text.primary` - Títulos, texto importante
- `text.secondary` - Descrições, parágrafos
- `text.tertiary` - Labels, metadados pequenos

---

## 📐 TIPOGRAFIA - Tamanhos de fonte

| Size | Pixels | Onde usar |
|------|--------|-----------|
| `xs` | 12px | Labels pequenos, badges |
| `sm` | 14px | Links do navbar, metadados |
| `base` | 16px | Texto padrão, parágrafos |
| `lg` | 18px | "Olá! Eu sou" |
| `xl` | 20px | Logo JM |
| `2xl` | 24px | Títulos de cards |
| `3xl` | 30px | Stats (mobile) |
| `4xl` | 36px | "Juliana Magalhães" |
| `5xl` | 48px | Títulos H2 ("Sobre mim") |
| `7xl` | 80px | "Desenvolvedora de Software" |

---

## 🔧 TESTES RÁPIDOS

### Aumentar espaço do topo (Hero):
1. Abra `Hero.tsx`
2. Linha 13: `paddingTop: '120px'` → `paddingTop: '140px'`

### Evitar corte dos Stats:
1. Abra `design-system.ts`
2. Linha 6: `md: '1.5rem'` → `md: '2rem'` (ou `'32px'`)

### Diminuir espaço entre seções:
1. Abra `design-system.ts`
2. Linha 11: `'4xl': '8rem'` → `'4xl': '6rem'`

### Mudar largura máxima do site:
1. Abra `design-system.ts`
2. Linha 77: `maxWidth: '1100px'` → `maxWidth: '1200px'`

---

## 📱 RESPONSIVIDADE

### Breakpoints onde o layout muda:
- **768px** (md): Grid de 1 coluna → 2 colunas
- **480px**: Tamanhos de fonte reduzidos
- **Mobile menu**: Aparece em < 768px

### Padding lateral (container):
- **Mobile**: 24px (`container.padding.mobile`)
- **Desktop**: 40px (`container.padding.desktop`)

---

## 💡 DICA

**Para ver mudanças:**
1. Edite `design-system.ts`
2. Salve (Cmd/Ctrl + S)
3. O navegador recarrega automaticamente

**Para valores específicos do Hero (topo):**
- Edite diretamente em `Hero.tsx` nas linhas indicadas
- Não use variáveis para o paddingTop principal (linha 13)
