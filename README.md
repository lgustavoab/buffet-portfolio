<div align="center">
  <h1>🍽️ Buffet Aparecida</h1>

  <p>
    <strong>Site institucional moderno, responsivo e orientado à conversão para buffet e locação de materiais para eventos.</strong>
  </p>

  [![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
  [![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)
</div>

<br />

## 🌐 Deploy

A aplicação está disponível publicamente na Vercel:

👉 **[buffet-aparecida.vercel.app](https://buffet-aparecida.vercel.app/)**

---

## 🧠 Sobre o Projeto

O **Buffet Aparecida** é o site institucional do Buffet Nossa Senhora Aparecida, empresa com mais de 30 anos de atuação em eventos na região de Penápolis-SP.

O projeto foi desenvolvido não apenas como uma vitrine digital, mas como uma aplicação orientada à **experiência do usuário, credibilidade e conversão**.

A navegação apresenta de forma clara os principais serviços da empresa — **buffet para eventos e locação de materiais** — enquanto os principais pontos de contato direcionam o visitante para o WhatsApp, permitindo transformar a visita ao site em uma oportunidade comercial mensurável.

Além da interface, o projeto também contempla aspectos de:

- performance;
- responsividade;
- acessibilidade;
- SEO técnico;
- dados estruturados;
- analytics;
- privacidade;
- rastreamento de conversões;
- experiência Light/Dark;
- deploy contínuo.

---

## ✨ Principais Funcionalidades

### 🎨 Interface e identidade visual

- Identidade visual baseada em **preto/carvão, dourado e marfim**.
- Tipografia combinando **Playfair Display** e **Inter**.
- Layout responsivo para Desktop, Tablet e Mobile.
- Microinterações e animações utilizando **Framer Motion**.
- Componentes com efeitos de hover, scale, glow, glass e transições.
- Navegação responsiva com menu mobile.
- Hero otimizado para apresentação da marca e conversão.

### 🌙 Light Mode e Dark Mode

A página inicial possui dois temas visuais:

- **Light Mode** como padrão;
- **Dark Mode** opcional.

A preferência escolhida pelo usuário é armazenada localmente e mantida entre acessos.

A implementação foi isolada à Home para evitar interferência visual em páginas específicas que possuem identidade própria.

### 🍽️ Serviços

O site apresenta as duas principais frentes do Buffet Aparecida:

- Buffet completo para eventos;
- Locação de materiais.

A estrutura foi pensada para explicar os serviços sem sobrecarregar a navegação ou misturar propostas comerciais diferentes.

### 🖼️ Galeria de Eventos

A Gallery combina imagens reais de eventos realizados pelo Buffet Aparecida com conteúdo em vídeo.

Entre os recursos implementados estão:

- grid responsivo;
- imagens reais;
- efeitos de hover;
- visualização ampliada em modal;
- navegação entre mídias;
- suporte a imagens e vídeos;
- vídeo vertical integrado ao YouTube;
- carregamento do player somente após interação;
- utilização de `youtube-nocookie.com`;
- reprodução responsiva sem recorte do vídeo original.

### ⭐ Avaliações do Google

A Home apresenta avaliações reais provenientes do perfil da empresa no Google, fortalecendo a prova social sem utilizar depoimentos fictícios.

Também há acesso direto ao perfil da empresa e à área de avaliações.

### 📱 Conversão via WhatsApp

Os principais CTAs levam diretamente ao WhatsApp do Buffet Aparecida.

Os links são estruturados por intenção, permitindo identificar de qual contexto o usuário iniciou o contato.

Exemplos:

- solicitação de orçamento;
- buffet;
- locação de materiais;
- contato geral.

### 🧭 Fluxo "Como Funciona"

A seção apresenta de forma simples as etapas entre o primeiro contato e a realização do evento, reduzindo dúvidas durante a decisão de contratação.

### ♿ Acessibilidade

Diversos componentes foram revisados com foco em navegação acessível, incluindo:

- navegação por teclado;
- estados de foco;
- atributos ARIA;
- modais acessíveis;
- fechamento por `Escape`;
- focus trap;
- retorno de foco ao elemento de origem;
- controle de scroll em modais;
- suporte a preferência por redução de movimento.

---

## 📊 Analytics e Tracking

O projeto possui uma estrutura voltada à mensuração das principais ações comerciais do site.

### Tecnologias

- **Google Tag Manager — GTM**
- **Google Analytics 4 — GA4**

### Conversão principal

O principal evento acompanhado é:

```text
whatsapp_click
```

Ele permite mensurar interações com os CTAs de WhatsApp distribuídos pela aplicação.

A implementação também permite diferenciar a intenção/contexto do clique, facilitando análises futuras sobre quais seções geram mais contatos comerciais.

### Privacidade

O carregamento das ferramentas de analytics respeita o consentimento do usuário.

O site possui:

- banner de cookies;
- gerenciamento de consentimento;
- carregamento condicionado do GTM;
- página de Política de Privacidade.

Isso evita que ferramentas de analytics sejam inicializadas antes da decisão do visitante.

---

## 🔎 SEO Técnico

O projeto possui uma estrutura de SEO implementada diretamente no Next.js.

Entre os recursos estão:

- metadata por rota;
- títulos e descrições;
- canonical URLs;
- Open Graph;
- imagem de compartilhamento;
- `robots.txt`;
- `sitemap.xml`;
- controle de indexação por página;
- dados estruturados em JSON-LD;
- informações comerciais centralizadas;
- nome principal e nome alternativo da empresa;
- área de atendimento;
- serviços oferecidos;
- informações de contato e localização.

A estratégia busca melhorar a compreensão da empresa tanto por mecanismos tradicionais de busca quanto por sistemas modernos de descoberta de conteúdo.

---

## 🏗️ Stack Tecnológico

| Tecnologia | Utilização |
|---|---|
| **Next.js 16** | Framework e App Router |
| **React 19** | Interface e componentes |
| **TypeScript** | Tipagem estática |
| **Tailwind CSS v4** | Estilização |
| **Framer Motion** | Animações e microinterações |
| **Lucide React** | Iconografia |
| **Google Tag Manager** | Gerenciamento de tracking |
| **Google Analytics 4** | Analytics e conversões |
| **Vercel** | Build, hospedagem e deploy |

---

## 🗂️ Estrutura da Home

A página principal segue atualmente o fluxo:

1. **Hero**
2. **Sobre**
3. **Serviços**
4. **Materiais**
5. **Diferenciais**
6. **Como Funciona**
7. **Galeria**
8. **Avaliações do Google**
9. **FAQ**
10. **Contato**
11. **Footer**

Elementos persistentes complementam a navegação, incluindo CTA flutuante para WhatsApp e controle de retorno ao topo.

---

## 📄 Outras Rotas

Além da Home, o projeto possui páginas com funções específicas:

### `/links`

Página compacta para centralização dos principais canais e contatos do Buffet Aparecida.

### `/cardapios`

Área legada destinada à apresentação de conteúdos específicos relacionados a eventos e cardápios.

### `/politica-de-privacidade`

Documento público com informações relacionadas à privacidade, cookies e tratamento de dados durante a navegação.

---

## ⚙️ Executando Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/lgustavoab/buffet-aparecida.git
```

### 2. Entre no diretório

```bash
cd buffet-aparecida
```

### 3. Instale as dependências

Para garantir uma instalação reproduzível utilizando o lockfile:

```bash
npm ci
```

### 4. Inicie o ambiente de desenvolvimento

```bash
npm run dev
```

### 5. Abra a aplicação

Acesse:

```text
http://localhost:3000
```

---

## 🧪 Qualidade e Validação

O projeto possui comandos específicos para validação antes de builds e deploys.

```bash
# Ambiente de desenvolvimento
npm run dev

# Validação do TypeScript
npm run typecheck

# Análise estática
npm run lint

# Validações do projeto
npm run check

# Build otimizado de produção
npm run build
```

Uma validação completa pode ser executada com:

```bash
npm run typecheck
npm run lint
npm run check
npm run build
```

---

## 🚀 Deploy

O projeto utiliza a **Vercel** como plataforma de hospedagem e entrega.

O fluxo principal é:

```text
GitHub
   ↓
Vercel
   ↓
Build Next.js
   ↓
Deploy de produção
```

Alterações enviadas para a branch principal podem ser automaticamente construídas e publicadas pela plataforma.

---

## 📁 Organização de Conteúdo

Informações reutilizadas pela aplicação são centralizadas sempre que possível para reduzir duplicações e facilitar manutenção.

O conteúdo da Gallery e de outras áreas do site é mantido de forma estruturada, permitindo atualizar mídias e informações sem reconstruir os componentes visuais.

Essa abordagem também facilita futuras integrações com:

- CMS;
- API;
- banco de dados;
- painel administrativo.

---

## 📈 Objetivos do Projeto

O projeto busca atender quatro objetivos principais:

**1. Presença digital**

Apresentar o Buffet Aparecida de forma profissional e coerente com a experiência oferecida nos eventos.

**2. Conversão**

Reduzir a distância entre descoberta e contato utilizando CTAs estratégicos para WhatsApp.

**3. Confiança**

Utilizar informações comerciais reais, imagens de eventos e avaliações públicas para aumentar a credibilidade.

**4. Mensuração**

Criar uma base técnica que permita avaliar comportamento, conversões e resultados de futuras campanhas de marketing.

---

## 🗺️ Roadmap

### Próximos passos

- [ ] Configuração e apontamento de domínio personalizado.
- [ ] Refinamento contínuo de copywriting com base em dados reais de navegação.
- [ ] Monitoramento de Core Web Vitals após aumento de tráfego.
- [ ] Evolução da estratégia de SEO local.
- [ ] Otimização contínua das imagens e mídias.

### Evoluções futuras

- [ ] Landing Pages específicas para diferentes tipos de evento.
- [ ] Landing Page dedicada à locação de materiais.
- [ ] Campanhas de Google Ads com acompanhamento de conversões.
- [ ] Dashboard de métricas e conversões.
- [ ] Integração com CRM ou automação de leads.
- [ ] Testes A/B para otimização de conversão (CRO).
- [ ] Análise comportamental com ferramentas como Microsoft Clarity.
- [ ] Possível gerenciamento dinâmico de conteúdo através de CMS/API.

---

## 🎯 Status

> 🟢 **Em produção**

A aplicação encontra-se funcional, responsiva e publicada, com as principais etapas de redesign, SEO, acessibilidade, analytics, privacidade e otimização técnica implementadas.

O desenvolvimento segue de forma incremental, priorizando estabilidade, experiência do usuário e evolução baseada em dados.

---

<div align="center">
  <br />

  <p>
    Desenvolvido com 💻 por <strong>Gustavo Almeida</strong>
  </p>

  <p>
    <strong>Next.js • TypeScript • React • Tailwind CSS • Analytics • SEO</strong>
  </p>
</div>
