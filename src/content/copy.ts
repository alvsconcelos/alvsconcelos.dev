export const site = {
  name: 'Alvaro Vasconcelos',
  email: 'contact@alvsconcelos.dev',
  url: 'https://alvsconcelos.dev',
  linkedin: 'https://www.linkedin.com/in/alvsconcelos/',
  github: 'https://github.com/alvsconcelos',
  image: '/profile-alvaro.jpeg',
} as const;

export type Locale = 'en' | 'pt';

export type Role = {
  title: string;
  dates: string;
  bullets: string[];
};

export type Company = {
  name: string;
  location: string;
  roles: Role[];
};

export type Project = {
  name: string;
  role: string;
  dates: string;
  description: string;
  stats: string;
  site: { href: string; label: string };
  code: { href: string; label: string };
};

export type Copy = {
  htmlLang: string;
  ogLocale: string;
  ogLocaleAlternate: string;
  localePath: string;
  alternatePath: string;
  switchToLabel: string;
  switchToLang: string;
  title: string;
  description: string;
  skip: string;
  nav: { about: string; experience: string; openSource: string; ai: string; resume: string; contact: string };
  hero: {
    role: string;
    lede: string;
    location: string;
    contactCta: string;
    resumeCta: string;
    photoAlt: string;
  };
  about: { heading: string; paragraphs: string[] };
  experience: { heading: string; companies: Company[] };
  openSource: { heading: string; intro: string; projects: Project[] };
  ai: { heading: string; paragraphs: string[] };
  resume: {
    heading: string;
    intro: string;
    enLabel: string;
    enMeta: string;
    ptLabel: string;
    ptMeta: string;
  };
  contact: {
    heading: string;
    intro: string;
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
  };
  footer: string;
};

export const copy: Record<Locale, Copy> = {
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    ogLocaleAlternate: 'pt_BR',
    localePath: '/',
    alternatePath: '/pt/',
    switchToLabel: 'Português',
    switchToLang: 'PT',
    title: 'Alvaro Vasconcelos — Engineering Manager at Housecall Pro',
    description:
      'Engineering Manager at Housecall Pro. 12+ years building web platforms and AI-native engineering teams. Based in Brazil, working with US teams.',
    skip: 'Skip to content',
    nav: {
      about: 'About',
      experience: 'Experience',
      openSource: 'Open source',
      ai: 'AI',
      resume: 'Resume',
      contact: 'Contact',
    },
    hero: {
      role: 'Engineering Manager at Housecall Pro',
      lede: 'I build web platforms and the AI‑native engineering teams that ship them.',
      location: 'Ex-Staff Engineer. Based in Brazil, working with US teams. Fluent in English.',
      contactCta: 'Get in touch',
      resumeCta: 'Download resume',
      photoAlt: 'Portrait of Alvaro Vasconcelos',
    },
    about: {
      heading: 'About',
      paragraphs: [
        "I've spent 12+ years building for the web, first as a developer, then as a tech lead, and now as an Engineering Manager. Since 2024 I've worked fully remote for Housecall Pro, a US company, on the platform behind housecallpro.com. I joined as a Senior Engineer, was promoted to Staff and then to Engineering Manager, and today I lead a team of 6 engineers.",
        "I like building the things other people build on. At Housecall Pro I created the site's experimentation platform from scratch: the A/B testing logic that didn't exist before, and that now lets marketing run single and multi-page experiments without waiting on engineering. I was the technical lead for a go-to-market partnership with a Fortune 500 company, and I rebuilt our delivery pipeline so deploys run 3x faster, backed by a test suite we built from the ground up.",
        'As a manager I stay close to the code. I set technical direction, write the specs, design how work is split and review a lot of code. Before Housecall Pro, I was Technical Lead at Genera, where I relaunched an e-commerce platform across four Latin American countries, delivering +30% sales and zero downtime on Black Friday.',
        'Open source is where I learned the craft, and I still ship it. Before Genera, I was the #1 ranked IT freelancer on Workana Brazil, with 250+ projects delivered.',
      ],
    },
    experience: {
      heading: 'Experience',
      companies: [
        {
          name: 'Housecall Pro',
          location: 'Remote, US',
          roles: [
            {
              title: 'Engineering Manager',
              dates: 'Mar 2026–Present',
              bullets: [
                "Lead a team of 6 engineers responsible for housecallpro.com's web platform. I own technical direction, planning, work design and code review, and stay hands-on in architecture.",
                'Redesigned how the team builds with AI: created the shared rules, reusable agent skills and AI-assisted merge-request and review workflows used day to day with Claude Code and Cursor.',
                'Lead the initiative to standardize components so AI agents can safely generate and review marketing pages, plus making the site readable and usable by AI agents.',
                'Created a self-serve landing page platform with isolated preview environments, so marketing can launch campaign pages without engineering in the loop.',
                'Architected the pricing experience revamp and split the work across 5 engineers.',
                'Own the production resilience initiative started after a critical incident.',
              ],
            },
            {
              title: 'Staff WordPress Developer',
              dates: 'Jun 2025–Mar 2026',
              bullets: [
                'Technical lead for a go-to-market partnership with a Fortune 500 company. I designed the partner attribution system from scratch and delivered the referral flows, dynamic pricing and bilingual partner experience.',
                'Introduced AI-assisted development to the codebase and set the conventions the team built on.',
                'Designed core platform architecture adopted across the codebase: an async content-loading framework and a new settings data model.',
                'Led site-wide performance and technical SEO work, including a 30%+ smaller global CSS footprint.',
                "Built the team's automated testing foundation (1,000+ tests) and made it a CI quality gate.",
              ],
            },
            {
              title: 'Senior WordPress Developer',
              dates: 'Sep 2024–Jun 2025',
              bullets: [
                "Created the site's A/B testing system from scratch, enabling page-level and multi-page experiments that weren't possible before.",
                'Rebuilt the deployment pipeline end to end, making deploys 3x faster.',
                'Led engineering for the homepage, navigation, industry and pricing page relaunches.',
              ],
            },
          ],
        },
        {
          name: 'Genera',
          location: '',
          roles: [
            {
              title: 'Technical Lead',
              dates: 'Mar 2022–Sep 2024',
              bullets: [
                'Led engineering for an internationalized e-commerce platform serving 4 Latin American countries.',
                'Architected and shipped a new version of the platform: +30% sales and zero downtime on Black Friday.',
                "Architected and built in-house payment infrastructure for Brazil, Argentina, Uruguay and Chile, with direct integrations to Pagar.me, PayU and PayPal. I replaced unreliable third-party connectors with a solution that still processes the company's payments today.",
                'Designed real-time sales analytics dashboards that gave leadership live visibility into revenue across all markets.',
              ],
            },
            {
              title: 'Software Engineer',
              dates: 'Sep 2020–Mar 2022',
              bullets: [
                'Built a promotions engine (virtual coupons, progressive discounts) and event-driven microservices (REST + SQS).',
              ],
            },
          ],
        },
      ],
    },
    openSource: {
      heading: 'Open source',
      intro:
        'I maintain two WooCommerce plugins on WordPress.org, and I contribute Brazilian Portuguese translations to WordPress.',
      projects: [
        {
          name: 'Cálculo do frete somente com o CEP – WC Brasil',
          role: 'Creator and maintainer',
          dates: 'Aug 2020–Present',
          description:
            'An open-source WooCommerce plugin that removes a common checkout friction point in Brazil: shoppers calculate shipping by typing only their postal code (CEP). It auto-detects the state across all 27 Brazilian states and hides the country, state and city fields.',
          stats: 'Peaked at 2,000+ active installs, with nearly 20,000 downloads.',
          site: {
            href: 'https://wordpress.org/plugins/calculo-do-frete-somente-com-o-cep-wc-brasil/',
            label: 'WordPress.org',
          },
          code: {
            href: 'https://github.com/alvsconcelos/calculo-do-frete-somente-com-o-cep-wc-brasil',
            label: 'GitHub',
          },
        },
        {
          name: 'Add Multiple Products to Cart via URL for WooCommerce',
          role: 'Creator and maintainer',
          dates: 'Dec 2024–Present',
          description:
            "Extends WooCommerce's native add-to-cart URL so a single link can add several products with quantities. Useful for campaigns, bundles and quote‑to‑cart flows, and it works with zero configuration.",
          stats: '200+ active installs, 5-star rating.',
          site: {
            href: 'https://wordpress.org/plugins/add-multiple-products-to-cart-via-url-for-woocommerce/',
            label: 'WordPress.org',
          },
          code: {
            href: 'https://github.com/alvsconcelos/add-multiple-product-wc-cart',
            label: 'GitHub',
          },
        },
      ],
    },
    ai: {
      heading: 'How the team works with AI',
      paragraphs: [
        'I redesigned how my team at Housecall Pro builds with AI. I created the shared rules, reusable agent skills and AI-assisted merge-request and review workflows we use every day with Cursor, Claude Code and Gemini.',
        "I'm leading the move toward components and pages that AI agents can build and review safely, including standardizing the building blocks of our marketing pages and making the site readable and usable by agents. For me, AI is a way to spend more time on judgment and less on boilerplate — not a replacement for either.",
      ],
    },
    resume: {
      heading: 'Resume',
      intro: 'A two-page résumé, available in English and Portuguese.',
      enLabel: 'Resume, English',
      enMeta: 'PDF',
      ptLabel: 'Currículo, português',
      ptMeta: 'PDF',
    },
    contact: {
      heading: 'Contact',
      intro: "I'm based in Brazil and work with US teams. The best way to reach me is by email.",
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
    },
    footer: 'Alvaro Vasconcelos',
  },
  pt: {
    htmlLang: 'pt-BR',
    ogLocale: 'pt_BR',
    ogLocaleAlternate: 'en_US',
    localePath: '/pt/',
    alternatePath: '/',
    switchToLabel: 'English',
    switchToLang: 'EN',
    title: 'Alvaro Vasconcelos — Engineering Manager na Housecall Pro',
    description:
      'Engineering Manager na Housecall Pro. Mais de 12 anos construindo plataformas web e times de engenharia com IA. Moro no Brasil e trabalho com times dos EUA.',
    skip: 'Ir para o conteúdo',
    nav: {
      about: 'Sobre',
      experience: 'Experiência',
      openSource: 'Open source',
      ai: 'IA',
      resume: 'Currículo',
      contact: 'Contato',
    },
    hero: {
      role: 'Engineering Manager na Housecall Pro',
      lede: 'Construo plataformas web e os times de engenharia com IA que as entregam.',
      location: 'Ex-Staff Engineer. Moro no Brasil, trabalho com times dos EUA e tenho inglês fluente.',
      contactCta: 'Entre em contato',
      resumeCta: 'Baixar currículo',
      photoAlt: 'Retrato de Alvaro Vasconcelos',
    },
    about: {
      heading: 'Sobre',
      paragraphs: [
        'São mais de 12 anos construindo para a web: comecei como desenvolvedor, virei tech lead e hoje sou Engineering Manager. Desde 2024 trabalho 100% remoto para a Housecall Pro, empresa americana, na plataforma por trás do housecallpro.com. Entrei como Senior Engineer, fui promovido a Staff e depois a Engineering Manager, e hoje lidero um time de 6 engenheiros.',
        'Gosto de construir a base sobre a qual os outros constroem. Na Housecall Pro, criei do zero a plataforma de experimentação do site: a lógica de testes A/B que não existia e que hoje permite ao marketing rodar experimentos em uma ou várias páginas sem depender da engenharia. Fui o líder técnico de uma parceria comercial com uma empresa da Fortune 500 e reconstruí nosso pipeline de entrega, que ficou 3x mais rápido, apoiado numa suíte de testes que montamos do zero.',
        'Como gestor, continuo perto do código. Defino a direção técnica, escrevo as especificações, desenho como o trabalho é dividido e reviso muito código. Antes da Housecall Pro, fui Technical Lead na Genera, onde relancei uma plataforma de e-commerce que operava em quatro países da América Latina. O resultado foi +30% em vendas e zero downtime na Black Friday.',
        'Foi no open source que aprendi o ofício, e sigo publicando. Antes da Genera, fui o freelancer nº 1 de TI na Workana Brasil, com mais de 250 projetos entregues.',
      ],
    },
    experience: {
      heading: 'Experiência',
      companies: [
        {
          name: 'Housecall Pro',
          location: 'Remoto, EUA',
          roles: [
            {
              title: 'Engineering Manager',
              dates: 'Mar 2026–o momento',
              bullets: [
                'Lidero um time de 6 engenheiros responsável pela plataforma web do housecallpro.com. Cuido da direção técnica, do planejamento, do desenho do trabalho e do code review, e sigo participando da arquitetura.',
                'Redesenhei a forma como o time trabalha com IA: criei as regras compartilhadas, skills reutilizáveis de agentes e fluxos de merge request e revisão assistidos por IA, usados no dia a dia com Claude Code e Cursor.',
                'Lidero a iniciativa de padronizar componentes para que agentes de IA gerem e revisem páginas de marketing com segurança, e para tornar o site legível e utilizável por agentes de IA.',
                'Criei uma plataforma self-service de landing pages com ambientes de preview isolados, para o marketing lançar páginas de campanha sem depender da engenharia.',
                'Arquitetei a reformulação da experiência de preços e dividi a entrega entre 5 engenheiros.',
                'Sou responsável pela iniciativa de resiliência de produção, criada após um incidente crítico.',
              ],
            },
            {
              title: 'Staff WordPress Developer',
              dates: 'Jun 2025–Mar 2026',
              bullets: [
                'Líder técnico de uma parceria comercial com uma empresa da Fortune 500. Desenhei do zero o sistema de atribuição de parceiros e entreguei os fluxos de indicação, a precificação dinâmica e a experiência bilíngue para o parceiro.',
                'Introduzi o desenvolvimento assistido por IA na base de código e defini as convenções que o time passou a seguir.',
                'Desenhei peças centrais da arquitetura da plataforma, adotadas em toda a base de código: um framework de carregamento assíncrono de conteúdo e um novo modelo de dados de configurações.',
                'Liderei as melhorias de performance e de SEO técnico do site, incluindo um CSS global mais de 30% menor.',
                'Montei a base de testes automatizados do time (mais de 1.000 testes) e a transformei em etapa obrigatória do CI.',
              ],
            },
            {
              title: 'Senior WordPress Developer',
              dates: 'Set 2024–Jun 2025',
              bullets: [
                'Criei do zero o sistema de testes A/B do site, permitindo experimentos em uma ou várias páginas, algo que não existia antes.',
                'Reconstruí o pipeline de deploy de ponta a ponta, deixando os deploys 3x mais rápidos.',
                'Liderei a engenharia dos relançamentos da home, da navegação e das páginas de segmentos e de preços.',
              ],
            },
          ],
        },
        {
          name: 'Genera',
          location: '',
          roles: [
            {
              title: 'Technical Lead',
              dates: 'Mar 2022–Set 2024',
              bullets: [
                'Liderei a engenharia de uma plataforma de e-commerce internacionalizada, presente em 4 países da América Latina.',
                'Arquitetei e lancei uma nova versão da plataforma: +30% em vendas e zero downtime na Black Friday.',
                'Arquitetei e desenvolvi a infraestrutura própria de pagamentos para Brasil, Argentina, Uruguai e Chile, com integrações diretas com Pagar.me, PayU e PayPal. Substituí conectores de terceiros instáveis por uma solução que até hoje processa os pagamentos da empresa.',
                'Criei dashboards de vendas em tempo real que deram à liderança visibilidade imediata da receita em todos os mercados.',
              ],
            },
            {
              title: 'Software Engineer',
              dates: 'Set 2020–Mar 2022',
              bullets: [
                'Criei um motor de promoções (cupons virtuais, descontos progressivos) e microsserviços orientados a eventos (REST + SQS).',
              ],
            },
          ],
        },
      ],
    },
    openSource: {
      heading: 'Open source',
      intro:
        'Mantenho dois plugins de WooCommerce no WordPress.org e contribuo com traduções do WordPress para o português.',
      projects: [
        {
          name: 'Cálculo do frete somente com o CEP – WC Brasil',
          role: 'Criador e mantenedor',
          dates: 'Ago 2020–o momento',
          description:
            'Plugin open source para WooCommerce que elimina um atrito comum no checkout brasileiro: o cliente calcula o frete digitando só o CEP. O plugin identifica automaticamente o estado (todas as 27 UFs) e esconde os campos de país, estado e cidade.',
          stats: 'Chegou a mais de 2.000 instalações ativas, com quase 20 mil downloads.',
          site: {
            href: 'https://wordpress.org/plugins/calculo-do-frete-somente-com-o-cep-wc-brasil/',
            label: 'WordPress.org',
          },
          code: {
            href: 'https://github.com/alvsconcelos/calculo-do-frete-somente-com-o-cep-wc-brasil',
            label: 'GitHub',
          },
        },
        {
          name: 'Add Multiple Products to Cart via URL for WooCommerce',
          role: 'Criador e mantenedor',
          dates: 'Dez 2024–o momento',
          description:
            'Amplia a URL nativa de adicionar ao carrinho do WooCommerce para que um único link adicione vários produtos com suas quantidades. É útil para campanhas, kits e orçamentos que viram carrinho, e funciona sem configuração.',
          stats: 'Mais de 200 instalações ativas e nota 5 estrelas.',
          site: {
            href: 'https://wordpress.org/plugins/add-multiple-products-to-cart-via-url-for-woocommerce/',
            label: 'WordPress.org',
          },
          code: {
            href: 'https://github.com/alvsconcelos/add-multiple-product-wc-cart',
            label: 'GitHub',
          },
        },
      ],
    },
    ai: {
      heading: 'Como o time trabalha com IA',
      paragraphs: [
        'Redesenhei a forma como meu time na Housecall Pro trabalha com IA. Criei as regras compartilhadas, as skills reutilizáveis de agentes e os fluxos de merge request e revisão assistidos por IA que usamos no dia a dia com Cursor, Claude Code e Gemini.',
        'Lidero a evolução para componentes e páginas que agentes de IA conseguem construir e revisar com segurança, incluindo a padronização dos blocos das páginas de marketing e um site legível e utilizável por agentes. Para mim, IA serve para gastar mais tempo com decisões e menos com código repetitivo — não para substituir o julgamento técnico.',
      ],
    },
    resume: {
      heading: 'Currículo',
      intro: 'Um currículo de duas páginas, disponível em inglês e em português.',
      enLabel: 'Resume, English',
      enMeta: 'PDF',
      ptLabel: 'Currículo, português',
      ptMeta: 'PDF',
    },
    contact: {
      heading: 'Contato',
      intro: 'Moro no Brasil e trabalho com times dos EUA. O melhor caminho é o e-mail.',
      emailLabel: 'E-mail',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
    },
    footer: 'Alvaro Vasconcelos',
  },
};
