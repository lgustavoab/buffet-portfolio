// ============================================================
// DADOS MOCKADOS — edite aqui para personalizar o site
// ============================================================

export const WHATSAPP_NUMBER = "99999999999"; // substitua pelo número real
export const INSTAGRAM_HANDLE = "buffet.aparecida"; // substitua pelo @ real
export const COMPANY_NAME = "Buffet Aparecida";
export const COMPANY_TAGLINE = "Estrutura completa, atendimento organizado e tranquilidade para você aproveitar seu evento";
export const COMPANY_ADDRESS = "Endereço"; // coloque o endereço aqui
export const COMPANY_PHONE = "9999999999"; // coloque o telefone aqui

export const whatsappLink = (message?: string) => {
  const text = encodeURIComponent(
    message ?? "Olá! Gostaria de solicitar um orçamento para meu evento."
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
};

// ----- SERVIÇOS -----
export const services = [
  {
    id: "buffet",
    title: "Buffet para Eventos",
    description:
      "Cardápios personalizados para qualquer tipo de evento. Do café da manhã ao jantar completo, preparamos tudo com ingredientes frescos e muito carinho.",
    items: [
      "Cardápio personalizado",
      "Pratos quentes e frios",
      "Mesa de frios e aperitivos",
      "Doces e sobremesas",
      "Bebidas e drinks",
      "Equipe de garçons",
    ],
    whatsappMessage:
      "Olá! Tenho interesse no serviço de Buffet para eventos. Pode me enviar mais informações?",
    icon: "UtensilsCrossed",
  },
  {
    id: "locacao",
    title: "Locação de Materiais",
    description:
      "Tudo que você precisa para montar um evento bonito e bem organizado. Nossos materiais são bem conservados, higienizados e entregues no prazo.",
    items: [
      "Mesas e cadeiras",
      "Toalhas e sousplats",
      "Talheres e cutelaria",
      "Taças e copos",
      "Louças e travessas",
      "Itens decorativos",
    ],
    whatsappMessage:
      "Olá! Tenho interesse na Locação de Materiais para eventos. Pode me enviar mais informações?",
    icon: "Package",
  },
];

// ----- MATERIAIS -----
export const materialCategories = [
  {
    id: "mesas-cadeiras",
    title: "Mesas & Cadeiras",
    description: "Mesas redondas, retangulares e cadeiras elegantes para todos os estilos",
    icon: "ArmchairIcon",
  },
  {
    id: "toalhas",
    title: "Toalhas & Sousplats",
    description: "Toalhas em diversas cores e tecidos, sousplats para composição sofisticada",
    icon: "Layers",
  },
  {
    id: "talheres",
    title: "Talheres & Cutelaria",
    description: "Talheres em aço inox de alta qualidade, facas, colheres e garfos",
    icon: "Utensils",
  },
  {
    id: "tacas",
    title: "Taças & Copos",
    description: "Taças para vinho, champagne, copos de água, long drinks e muito mais",
    icon: "GlassWater",
  },
  {
    id: "loucas",
    title: "Louças & Travessas",
    description: "Pratos, tigelas, travessas e bowls para composição de mesas elegantes",
    icon: "Circle",
  },
  {
    id: "decoracao",
    title: "Itens Decorativos",
    description: "Vasos, castiçais, arranjos, porta-guardanapos e detalhes que fazem a diferença",
    icon: "Flower2",
  },
];

// ----- DIFERENCIAIS -----
export const differentials = [
  {
    icon: "Heart",
    title: "Atendimento próximo do início ao fim",
    description:
      "Você conta com uma equipe que acompanha cada detalhe do seu evento com atenção, clareza e mais tranquilidade em cada etapa.",
  },
  {
    icon: "Shield",
    title: "Materiais higienizados e prontos para uso",
    description:
      "Todos os itens passam por limpeza e inspeção antes de cada entrega, garantindo mais segurança e cuidado na locação.",
  },
  {
    icon: "Clock",
    title: "Montagem e entrega no horário combinado",
    description:
      "Organização precisa para que tudo esteja pronto no momento certo, sem atrasos e sem comprometer o planejamento do evento.",
  },
  {
    icon: "ClipboardList",
    title: "Processo claro e sem complicação",
    description:
      "Do orçamento à execução, você sabe exatamente o que esperar, com mais transparência, praticidade e menos improvisos.",
  },
  {
    icon: "Star",
    title: "Padrão de qualidade em cada detalhe",
    description:
      "Do buffet aos materiais locados, tudo é selecionado para valorizar o ambiente, a apresentação e a experiência dos convidados.",
  },
  {
    icon: "CheckCircle",
    title: "Buffet e locação no mesmo lugar",
    description:
      "Menos fornecedores, mais praticidade e mais controle para você organizar seu evento com eficiência e melhor custo-benefício.",
  },
];

// ----- PROCESSO -----
export const steps = [
  {
    number: "01",
    title: "Entre em Contato",
    description: "Fale conosco pelo WhatsApp ou formulário. Resposta rápida, sem enrolação.",
  },
  {
    number: "02",
    title: "Orientação e Planejamento",
    description: "Nossa equipe entende suas necessidades e orienta sobre as melhores opções.",
  },
  {
    number: "03",
    title: "Escolha os Serviços",
    description: "Monte seu pacote ideal: buffet, locação de materiais ou os dois juntos.",
  },
  {
    number: "04",
    title: "Receba o Orçamento",
    description: "Orçamento claro, detalhado e sem surpresas. Você decide com tranquilidade.",
  },
  {
    number: "05",
    title: "Evento Realizado",
    description: "Cuidamos de tudo para que você aproveite cada momento com quem ama.",
  },
];

// ----- DEPOIMENTOS -----
export const testimonials = [
  {
    id: 1,
    name: "Mariana Oliveira",
    event: "Casamento",
    text: "O buffet superou todas as expectativas! Os convidados elogiaram muito a comida e o atendimento foi impecável do começo ao fim.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ricardo Santos",
    event: "Festa de 15 Anos",
    text: "Alugamos mesas, cadeiras e toda a louça. Tudo chegou no horário e em perfeito estado. Facilitou muito nossa vida!",
    rating: 5,
  },
  {
    id: 3,
    name: "Fernanda Costa",
    event: "Confraternização Corporativa",
    text: "Empresa séria e organizada. O cardápio foi excelente e os materiais de locação deixaram o evento ainda mais bonito.",
    rating: 5,
  },
  {
    id: 4,
    name: "Lucas e Amanda",
    event: "Chá de Bebê",
    text: "Contratamos buffet e locação juntos. Foi muito prático trabalhar com um único fornecedor. Recomendamos muito!",
    rating: 5,
  },
];

// ----- GALERIA -----
// Substitua os src pelas URLs reais das suas fotos
export const galleryImages = [
  { id: 1, src: "/evento-1.jpg", alt: "Mesa posta para casamento elegante" },
  { id: 2, src: "/evento-2.jpg", alt: "Decoração de festa sofisticada" },
  { id: 3, src: "/evento-3.jpg", alt: "Buffet de pratos variados" },
  { id: 4, src: "/evento-4.jpg", alt: "Salão decorado para evento" },
  { id: 5, src: "/evento-5.jpg", alt: "Taças e mesa posta em evento premium" },
  { id: 6, src: "/evento-6.jpg", alt: "Confraternização corporativa" },
];

// ----- LINKS PAGE -----
export const linksPage = {
  profileImage: "/logo-BA2.png",
  profileAlt: "Logo do Buffet Aparecida",
  handle: "@buffet.aparecida",
  subtitle: "Buffet para eventos e locação de materiais em Penápolis e região",
  headline: "Conheça nossos canais oficiais",

  socialLinks: [
    {
      id: "instagram-icon",
      platform: "Instagram",
      href: `https://www.instagram.com/${INSTAGRAM_HANDLE}`,
      icon: "Instagram",
    },
    {
      id: "facebook-icon",
      platform: "Facebook",
      href: "https://www.facebook.com/p/Buffet-Aparecida-100063945496062", //coloque o endereço aqui
      icon: "Facebook",
    },
    {
      id: "site-icon",
      platform: "Site",
      href: "https://buffet-aparecida.vercel.app",
      icon: "Globe",
    },
    {
      id: "whatsapp-icon",
      platform: "WhatsApp",
      href: whatsappLink(),
      icon: "MessageCircle",
    },
    {
      id: "location-icon",
      platform: "Localização",
      href: "#", //coloque o endereço do google maps aqui
      icon: "MapPin",
    },
  ],

  featuredMedia: [
    {
      id: "image-1",
      type: "image",
      src: "/carrossel-1.jpeg",
      alt: "Evento completo montado pelo Buffet Aparecida",
    },
    {
      id: "image-2",
      type: "image",
      src: "/carrossel-2.jpeg",
      alt: "Mesa de frios e Hamburgueres",
    },
    {
      id: "image-3",
      type: "image",
      src: "/carrossel-3.jpg",
      alt: "Mesa de comida",
    },
  ],

  buttons: [
    {
      id: "whatsapp",
      title: "WhatsApp",
      description: "Atendimento rápido para orçamento e informações.",
      href: whatsappLink(),
      icon: "MessageCircle",
      highlight: true,
    },
    {
      id: "site",
      title: "Site oficial",
      description: "Conheça nossos serviços, galeria e estrutura.",
      href: "https://buffet-aparecida.vercel.app",
      icon: "Globe",
    },
    {
      id: "instagram",
      title: "Instagram",
      description: "Acompanhe eventos, bastidores e novidades.",
      href: `https://www.instagram.com/${INSTAGRAM_HANDLE}`,
      icon: "Instagram",
    },
    {
      id: "facebook",
      title: "Facebook",
      description: "Veja publicações e atualizações da nossa página.",
      href: "https://www.facebook.com/p/Buffet-Aparecida-100063945496062",
      icon: "Facebook",
    },
    {
      id: "location",
      title: "Localização",
      description: COMPANY_ADDRESS,
      href: "#", //coloque o endereço do google maps aqui
      icon: "MapPin",
    },
  ],
};
