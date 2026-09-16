// -----------------------------------------------------------------------------
// CONFIGURACIÓN CENTRAL DEL SITIO — TRENDING ADS
// -----------------------------------------------------------------------------
// Este archivo concentra todos los datos que probablemente quieras editar:
// número de WhatsApp, redes sociales, dominio, IDs de analítica, servicios,
// testimonios, equipo y preguntas frecuentes.
//
// No necesitas tocar ningún componente (.tsx) para actualizar el contenido:
// edita los valores de aquí y el sitio se actualiza solo.
// -----------------------------------------------------------------------------

export const siteConfig = {
  name: "Trending ADS",
  legalName: "Trending ADS",
  tagline: "Hacemos que tu marca sea tendencia",
  description:
    "Agencia de marketing digital especializada en producción audiovisual, edición de video, gestión de redes sociales y diseño gráfico. Trabajamos de forma presencial en Isla de Margarita, Venezuela, y 100% remoto con clientes en cualquier país.",

  // TODO: reemplaza por el dominio real una vez lo compres y verifiques
  // disponibilidad en un registrador (Namecheap, GoDaddy, etc.)
  url: "https://trendingads.agency",

  // Número en formato internacional sin espacios ni símbolos, para el enlace wa.me
  whatsapp: {
    display: "+58 412-0594639",
    international: "584120594639",
    defaultMessage:
      "¡Hola Trending ADS! Vi su página web y quiero información sobre sus servicios.",
  },

  // TODO: agrega un correo si quieres mostrarlo en el footer (opcional, ya que
  // la estrategia de conversión es 100% vía WhatsApp)
  email: undefined as string | undefined,

  location: {
    city: "Isla de Margarita",
    region: "Nueva Esparta",
    country: "Venezuela",
    countryCode: "VE",
    servesRemote: true,
  },

  social: {
    instagram: "https://www.instagram.com/trendingads.agency",
    tiktok: "https://www.tiktok.com/@trendingads.agency",
  },

  // --- Analítica (gratis) ---------------------------------------------------
  // Déjalos vacíos ("") para desactivar. Reemplaza con tus IDs reales cuando
  // los tengas. Ambos servicios son gratuitos en su capa estándar.
  analytics: {
    // Formato: "G-XXXXXXXXXX" — Google Analytics 4 (analytics.google.com)
    googleAnalyticsId: "",
    // Formato: "1234567890123456" — Meta Pixel (business.facebook.com/events_manager)
    metaPixelId: "",
  },
};

export type Service = {
  title: string;
  description: string;
  icon: "camera" | "chat" | "scissors" | "brush" | "code" | "chart";
};

export const services: Service[] = [
  {
    title: "Producción Audiovisual",
    description:
      "Grabación y producción profesional de videos, reels y stories con calidad cinematográfica para todas tus plataformas.",
    icon: "camera",
  },
  {
    title: "Gestión de Redes Sociales",
    description:
      "Calendarios editoriales, manejo de comunidad y estrategia de contenido para hacer crecer tu presencia digital.",
    icon: "chat",
  },
  {
    title: "Edición de Video",
    description:
      "Motion graphics, cortes dinámicos y subtítulos que capturan la atención en los primeros segundos.",
    icon: "scissors",
  },
  {
    title: "Diseño Gráfico",
    description:
      "Identidad visual, piezas para redes sociales, flyers y banners que hacen que tu marca destaque de verdad.",
    icon: "brush",
  },
  {
    title: "Programación & Desarrollo",
    description:
      "Landing pages, sitios web y tiendas en línea a medida, con SEO básico y pasarela de pago.",
    icon: "code",
  },
  {
    title: "Asesorías de Marketing",
    description:
      "Sesiones estratégicas y auditorías de cuenta para negocios que quieren crecer sin delegar la gestión completa.",
    icon: "chart",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  // Deja "photo" vacío mientras no tengas la foto: se muestran las iniciales.
  photo?: string;
};

// TODO: reemplaza con nombre y apellido + cargo reales de cada persona.
// Cuando tengas las fotos, colócalas en /public/team/ y agrega la ruta en "photo".
export const team: TeamMember[] = [
  { name: "Nombre Apellido", role: "Directora Creativa" },
  { name: "Nombre Apellido", role: "Community Manager" },
  { name: "Nombre Apellido", role: "Diseñador Gráfico" },
  { name: "Nombre Apellido", role: "Editor de Video" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// ⚠️ BORRADOR — el usuario indicó que tiene testimonios reales y los
// colocará él mismo. Estos son de prueba únicamente para maquetar la sección;
// reemplázalos antes de publicar el sitio.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Hola Francerys ✨️Valoro la creatividad y la calidad técnica de los videos que estás produciendo, los cuales están alineados con la visión de la marca. Gracias por mantener este estándar de trabajo; sigamos avanzando ✨.",
    name: "Nombre Apellido",
    role: "Dueña, Limpiezas MAG",
  },
  {
    quote:
      "Mi experiencia ha sido muy grata con la empresa, ya que me costaba mucho hacer vídeos en las redes. Para mi expresarme era sumamente complicado y con ellos he sentido tranquila y confianza, no solamente es grabar ellos nos apoyan en la logística y los guiones. Lo mejor de todo es que tienen toda la paciencia del mundo para que tu vida en las redes sea un éxito 🙌. Los recomiendo ✨️👏🤗.",
    name: "Daniela Martínez",
    role: "CEO, [Negocio de ejemplo]",
  },
  {
    quote:
      "Estamos muy satisfechos y complacidos por toda la labor que ha realizado la Agencia Trending.ads y su CEO Ing. Francerys Marcano. Ya tenemos 1 año trabajando juntos y nuestras Redes Sociales han crecido exponencialmente. Agradecidos por tan impecable trabajo de Social Media. Recomendados 💯.",
    name: "Nombre Apellido",
    role: "Marketing, [Negocio de ejemplo]",
  },
];

export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    question: "¿Cómo funciona el proceso de pago?",
    answer:
      "Trabajamos con 50% de anticipo para iniciar el proyecto y 50% al momento de la entrega. Los planes mensuales se pagan al inicio de cada mes.",
  },
  {
    question: "¿Trabajan de forma remota o solo presencial en Margarita?",
    answer:
      "Ambas modalidades. Para clientes fuera de la Isla de Margarita, la comunicación es por WhatsApp, Zoom o Meet, y la entrega se hace por Google Drive",
  },
  {
    question: "¿Cuántas revisiones incluye cada plan?",
    answer:
      "Depende del plan contratado: cada paquete especifica el número de revisiones incluidas, desde 2 revisiones en los planes básicos hasta revisiones ilimitadas en los planes premium.",
  },
  {
    question: "¿Quién es dueño del contenido una vez finalizado?",
    answer:
      "Una vez cancelado el 100% del proyecto, el cliente recibe todos los archivos y derechos sobre el material entregado.",
  },
  {
    question: "¿En cuánto tiempo responden una cotización?",
    answer:
      "Respondemos cada solicitud en menos de 24 horas con una propuesta personalizada según las necesidades de tu marca.",
  },
  {
    question: "¿Cuánto tiempo toma la edición de un video?",
    answer:
      "El tiempo de entrega estándar para contenido de redes sociales es de 3 a 5 días hábiles. Para producciones más complejas, el cronograma se define durante la planificación inicial.",
  },
  {
    question: "¿Puedo cancelar o pausar un plan mensual?",
    answer:
      "Sí. Solo pedimos que nos avises con al menos 7 días de anticipación al próximo ciclo de pago para poder organizar la entrega de los últimos contenidos pendientes.",
  },
];

// Marcas / clientes para el "ticker" de confianza. Edítalo con nombres reales
// de clientes (con su autorización) cuando los tengas.
export type BrandLogo = {
  name: string;
  logo: string;
};

export const trustedByBrands: BrandLogo[] = [
  { name: "Rondon & Partners", logo: "/brands/rondon-&-partners.png" },
  { name: "Rent-A-House", logo: "/brands/rent-a-house.png" },
  { name: "Limpieza MAG", logo: "/brands/limpieza-mag.png" },
];

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsapp.defaultMessage);
  return `https://wa.me/${siteConfig.whatsapp.international}?text=${text}`;
}
