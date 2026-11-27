export const site = {
  name: 'Alvaro Vasconcelos',
  email: 'contact@alvsconcelos.dev',
  url: 'https://alvsconcelos.dev',
  linkedin: 'https://www.linkedin.com/in/alvsconcelos/',
  github: 'https://github.com/alvsconcelos',
  image: '/profile-alvaro.jpeg',
} as const;

export type Locale = 'en' | 'pt';

export type Focus = {
  title: string;
  text: string;
};

export type CaseBlock = {
  id: string;
  title: string;
  summary: string;
  problem: string;
  did: string;
  outcome: string;
  links?: { href: string; label: string }[];
};

export type Copy = {
  htmlLang: string;
  ogLocale: string;
  ogLocaleAlternate: string;
  localePath: string;
  alternatePath: string;
  title: string;
  description: string;
  skip: string;
  nav: { work: string; now: string; resume: string; contact: string };
  hero: {
    role: string;
    intro: string;
    contactCta: string;
    resumeCta: string;
    photoAlt: string;
  };
  focus: { heading: string; items: Focus[] };
  work: { heading: string; cases: CaseBlock[] };
  now: { heading: string; text: string };
  resume: {
    heading: string;
    enLabel: string;
    ptLabel: string;
  };
  contact: {
    heading: string;
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
  };
  caseLabels: { problem: string; did: string; outcome: string };
  footer: string;
};

export const copy: Record<Locale, Copy> = {
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    ogLocaleAlternate: 'pt_BR',
    localePath: '/',
    alternatePath: '/pt/',
    title: 'Alvaro Vasconcelos — Engineering Manager at Housecall Pro',
    description:
      'Engineering Manager at Housecall Pro. I lead a remote team from Brazil, building web platforms and AI‑native ways of working with US teams.',
    skip: 'Skip to content',
    nav: {
      work: 'Work',
      now: 'Now',
      resume: 'Resume',
      contact: 'Contact',
    },
    hero: {
      role: 'Engineering Manager at Housecall Pro',
      intro:
        'From Brazil, I lead a remote engineering team for a US company. I stay close to the code, and I care most about the platforms and ways of working that other people depend on.',
      contactCta: 'Get in touch',
      resumeCta: 'Download resume',
      photoAlt: 'Portrait of Alvaro Vasconcelos',
    },
    focus: {
      heading: 'What I do',
      items: [
        {
          title: 'Lead engineering teams',
          text: 'I lead a team of 6 engineers on housecallpro.com, working with US stakeholders. I set technical direction, design the work, and stay in the architecture and the code review.',
        },
        {
          title: 'Build web platforms',
          text: 'I build the foundations other people ship on, from experimentation and self‑serve marketing pages to the delivery pipeline behind them.',
        },
        {
          title: 'Make teams AI‑native',
          text: 'I design the shared rules, agent skills and review workflows my team uses every day, so AI gives us more room for judgment instead of replacing it.',
        },
      ],
    },
    work: {
      heading: 'Selected work',
      cases: [
        {
          id: 'payments',
          title: 'Payments for four Latin American countries',
          summary:
            'I built in-house payment integrations when the off‑the‑shelf connectors could not be trusted in those markets. They still process payments today.',
          problem:
            'At Genera, the ready-made payment connectors available to us did not work well enough for Brazil, Argentina, Uruguay and Chile. It was not a problem a plugin could solve.',
          did: 'I designed and built the payment infrastructure from scratch, with direct integrations to Pagar.me, PayU and PayPal, instead of depending on those third-party connectors.',
          outcome:
            'The solution I put in place still processes the company’s payments today.',
        },
        {
          id: 'plugins',
          title: 'Two WooCommerce plugins, still maintained',
          summary:
            'A shipping calculator that asks only for a Brazilian postal code, and a way to add several products to the cart from a single link.',
          problem:
            'A common point of friction in Brazilian checkout is asking shoppers for country, state and city just to calculate shipping. I also kept running into a native WooCommerce limit: the add‑to‑cart URL could not take more than one product at a time.',
          did: 'I built and still maintain two open-source plugins. One lets the shopper type only their postal code (CEP), auto-detects the state across all 27 Brazilian states, and hides the country, state and city fields. The other extends the native add‑to‑cart URL so a single link can add several products with quantities, which is useful for campaigns, bundles and quote‑to‑cart flows, and needs no configuration. I also contribute Brazilian Portuguese translations to WordPress.',
          outcome:
            'The shipping plugin peaked at 2,000+ active installs on WordPress.org and has nearly 20,000 downloads. The cart plugin has 200+ active installs and a 5-star rating.',
          links: [
            {
              href: 'https://wordpress.org/plugins/calculo-do-frete-somente-com-o-cep-wc-brasil/',
              label: 'Shipping plugin on WordPress.org',
            },
            {
              href: 'https://github.com/alvsconcelos/calculo-do-frete-somente-com-o-cep-wc-brasil',
              label: 'Shipping plugin on GitHub',
            },
            {
              href: 'https://wordpress.org/plugins/add-multiple-products-to-cart-via-url-for-woocommerce/',
              label: 'Cart plugin on WordPress.org',
            },
            {
              href: 'https://github.com/alvsconcelos/add-multiple-product-wc-cart',
              label: 'Cart plugin on GitHub',
            },
          ],
        },
        {
          id: 'ai-team',
          title: 'How the team works with AI',
          summary:
            'I redesigned our day‑to‑day around shared rules, reusable agent skills and AI‑assisted review, not around a one‑off tool rollout.',
          problem:
            'AI is only useful to a team if it becomes a shared practice, with room for judgment, rather than something each person improvises or treats as a replacement for engineering.',
          did: 'I designed the shared rules, reusable agent skills, and AI‑assisted merge-request and review workflows we use every day with Cursor, Claude Code and Gemini. I also brought AI‑assisted development into the codebase and set the conventions the team adopted.',
          outcome:
            'This is how the team works today: the rules, skills and review flow are part of the daily practice, not a side experiment.',
        },
        {
          id: 'ai-platform',
          title: 'A platform agents can build on safely',
          summary:
            'I am leading the work to standardize our marketing building blocks so AI agents can generate and review pages without cutting corners.',
          problem:
            'If agents are going to help ship marketing pages, they need a platform with clear components, and a site they can actually read and review. Without that, the work is hard to trust.',
          did: 'I am leading the effort to standardize those components so agents can generate and review marketing pages safely, and to make the site itself readable and usable by AI agents.',
          outcome:
            'This is ongoing work on the platform behind housecallpro.com, alongside the team I lead.',
        },
      ],
    },
    now: {
      heading: 'Now',
      text: 'On the web platform behind housecallpro.com, I am focused on making the way we work something AI agents can build and review safely, and on the production resilience work we started after a critical incident.',
    },
    resume: {
      heading: 'Resume',
      enLabel: 'Resume, English',
      ptLabel: 'Currículo, português',
    },
    contact: {
      heading: 'Contact',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
    },
    caseLabels: {
      problem: 'The problem',
      did: 'What I did',
      outcome: 'The outcome',
    },
    footer: 'Alvaro Vasconcelos',
  },
  pt: {
    htmlLang: 'pt-BR',
    ogLocale: 'pt_BR',
    ogLocaleAlternate: 'en_US',
    localePath: '/pt/',
    alternatePath: '/',
    title: 'Alvaro Vasconcelos — Engineering Manager na Housecall Pro',
    description:
      'Engineering Manager na Housecall Pro. Lidero um time remoto a partir do Brasil, construindo plataformas web e formas de trabalhar com IA junto a times dos EUA.',
    skip: 'Ir para o conteúdo',
    nav: {
      work: 'Trabalho',
      now: 'Agora',
      resume: 'Currículo',
      contact: 'Contato',
    },
    hero: {
      role: 'Engineering Manager na Housecall Pro',
      intro:
        'Do Brasil, lidero um time de engenharia remoto para uma empresa dos EUA. Continuo perto do código, e o que mais me importa são as plataformas e as formas de trabalhar das quais as outras pessoas dependem.',
      contactCta: 'Entre em contato',
      resumeCta: 'Baixar currículo',
      photoAlt: 'Retrato de Alvaro Vasconcelos',
    },
    focus: {
      heading: 'O que eu faço',
      items: [
        {
          title: 'Lidero times de engenharia',
          text: 'Lidero um time de 6 engenheiros no housecallpro.com, com stakeholders nos EUA. Defino a direção técnica, desenho o trabalho e sigo presente na arquitetura e no code review.',
        },
        {
          title: 'Construo plataformas web',
          text: 'Construo as bases sobre as quais outras pessoas entregam, da experimentação e das landing pages self‑service ao pipeline de entrega por trás delas.',
        },
        {
          title: 'Torno os times AI‑native',
          text: 'Desenho as regras compartilhadas, as skills de agentes e os fluxos de revisão que meu time usa no dia a dia, para que a IA abra mais espaço para o julgamento em vez de substituí-lo.',
        },
      ],
    },
    work: {
      heading: 'Trabalhos selecionados',
      cases: [
        {
          id: 'payments',
          title: 'Pagamentos em quatro países da América Latina',
          summary:
            'Criei integrações próprias de pagamento quando os conectores prontos não eram confiáveis nesses mercados. Elas ainda processam os pagamentos hoje.',
          problem:
            'Na Genera, os conectores de pagamento prontos que tínhamos à disposição não funcionavam bem o suficiente para Brasil, Argentina, Uruguai e Chile. Não era um problema que se resolvesse com um plugin.',
          did: 'Arquitetei e desenvolvi a infraestrutura de pagamentos do zero, com integrações diretas com Pagar.me, PayU e PayPal, em vez de depender daqueles conectores de terceiros.',
          outcome:
            'A solução que coloquei no lugar ainda processa os pagamentos da empresa hoje.',
        },
        {
          id: 'plugins',
          title: 'Dois plugins de WooCommerce, ainda em manutenção',
          summary:
            'Um cálculo de frete que pede só o CEP brasileiro, e uma forma de adicionar vários produtos ao carrinho a partir de um único link.',
          problem:
            'Um atrito comum no checkout brasileiro é pedir país, estado e cidade só para calcular o frete. Eu também esbarrava numa limitação nativa do WooCommerce: a URL de adicionar ao carrinho não aceitava mais de um produto de cada vez.',
          did: 'Criei e sigo mantendo dois plugins open source. Um permite que o cliente digite só o CEP, identifica automaticamente o estado nas 27 UFs e esconde os campos de país, estado e cidade. O outro amplia a URL nativa de adicionar ao carrinho para que um único link acrescente vários produtos com suas quantidades, o que serve para campanhas, kits e orçamentos que viram carrinho, e funciona sem configuração. Também contribuo com traduções do WordPress para o português.',
          outcome:
            'O plugin de frete chegou a mais de 2.000 instalações ativas no WordPress.org e tem quase 20 mil downloads. O plugin de carrinho tem mais de 200 instalações ativas e nota 5 estrelas.',
          links: [
            {
              href: 'https://wordpress.org/plugins/calculo-do-frete-somente-com-o-cep-wc-brasil/',
              label: 'Plugin de frete no WordPress.org',
            },
            {
              href: 'https://github.com/alvsconcelos/calculo-do-frete-somente-com-o-cep-wc-brasil',
              label: 'Plugin de frete no GitHub',
            },
            {
              href: 'https://wordpress.org/plugins/add-multiple-products-to-cart-via-url-for-woocommerce/',
              label: 'Plugin de carrinho no WordPress.org',
            },
            {
              href: 'https://github.com/alvsconcelos/add-multiple-product-wc-cart',
              label: 'Plugin de carrinho no GitHub',
            },
          ],
        },
        {
          id: 'ai-team',
          title: 'Como o time trabalha com IA',
          summary:
            'Redesenhei o dia a dia em torno de regras compartilhadas, skills reutilizáveis de agentes e revisão assistida por IA, e não em torno de uma ferramenta isolada.',
          problem:
            'IA só é útil para um time se vira uma prática compartilhada, com espaço para julgamento, e não algo que cada pessoa improvisa ou trata como substituto da engenharia.',
          did: 'Desenhei as regras compartilhadas, as skills reutilizáveis de agentes e os fluxos de merge request e revisão assistidos por IA que usamos no dia a dia com Cursor, Claude Code e Gemini. Também trouxe o desenvolvimento assistido por IA para a base de código e defini as convenções que o time adotou.',
          outcome:
            'É assim que o time trabalha hoje: as regras, as skills e o fluxo de revisão fazem parte da prática diária, não de um experimento à parte.',
        },
        {
          id: 'ai-platform',
          title: 'Uma plataforma em que agentes constroem com segurança',
          summary:
            'Lidero o trabalho de padronizar os blocos das páginas de marketing para que agentes de IA gerem e revisem páginas sem abrir mão da qualidade.',
          problem:
            'Se agentes vão ajudar a publicar páginas de marketing, eles precisam de uma plataforma com componentes claros, e de um site que consigam ler e revisar. Sem isso, o trabalho fica difícil de confiar.',
          did: 'Lidero a padronização desses componentes para que agentes gerem e revisem páginas de marketing com segurança, e o trabalho de tornar o site legível e utilizável por agentes de IA.',
          outcome:
            'É um trabalho em andamento na plataforma por trás do housecallpro.com, junto do time que eu lidero.',
        },
      ],
    },
    now: {
      heading: 'Agora',
      text: 'Na plataforma web por trás do housecallpro.com, meu foco é tornar a forma como trabalhamos algo que agentes de IA consigam construir e revisar com segurança, e o trabalho de resiliência de produção que começamos depois de um incidente crítico.',
    },
    resume: {
      heading: 'Currículo',
      enLabel: 'Resume, English',
      ptLabel: 'Currículo, português',
    },
    contact: {
      heading: 'Contato',
      emailLabel: 'E-mail',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
    },
    caseLabels: {
      problem: 'O problema',
      did: 'O que eu fiz',
      outcome: 'O resultado',
    },
    footer: 'Alvaro Vasconcelos',
  },
};
