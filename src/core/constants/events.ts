import { Event } from "../evento";

const events: Event[] = [
  {
    id: "0wgwp498z54-5qdhri00ew6-a7p9cy5q4pa",
    alias: "evento-fullstack",
    password: "senha123",
    name: "Evento de Desenvolvimento Fullstack",
    date: new Date(),
    location: "São Paulo, SP",
    description:
      "Um evento completo para aprender desenvolvimento fullstack do zero.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
    imageBackground:
      "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    expectedPublic: 200,
    guests: [
      {
        id: "19920z8ptd5-7cgt2ibozpf-u9rpj4md2ke",
        name: "Alice Silva",
        email: "alice@example.com",
        confirmed: true,
        hasCompanions: true,
        qtdCompanions: 1,
      },
      {
        id: "doqijr2yd5p-5ake2kyjnkw-8xgslcuvsak",
        name: "Carlos Pereira",
        email: "carlos@example.com",
        confirmed: false,
        hasCompanions: false,
        qtdCompanions: 0,
      },
      {
        id: "25jws0qvyv7-gt7xbn740q9-xw4j0093j0g",
        name: "Beatriz Lima",
        email: "beatriz@example.com",
        confirmed: true,
        hasCompanions: true,
        qtdCompanions: 2,
      },
    ],
  },
  {
    id: "xkselp5seb9-cha06euo8lc-cbtzc7xutd8",
    alias: "evento-js-avancado",
    password: "js2024",
    name: "Workshop Avançado de JavaScript",
    date: new Date(),
    location: "Rio de Janeiro, RJ",
    description: "Um workshop avançado para programadores JavaScript.",
    image:
      "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
    imageBackground:
      "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
    expectedPublic: 100,
    guests: [
      {
        id: "7r42fiyiew9-ahh804wk9sa-try3147joht",
        name: "Eduardo Santos",
        email: "eduardo@example.com",
        confirmed: true,
        hasCompanions: false,
        qtdCompanions: 0,
      },
      {
        id: "olxftwznfm9-j49dg1hffw8-su32z6oba8",
        name: "Fernanda Costa",
        email: "fernanda@example.com",
        confirmed: true,
        hasCompanions: true,
        qtdCompanions: 1,
      },
    ],
  },
  {
    id: "go82etosg0j-56lww8ss0rp-ysbvw8lwb7i",
    alias: "evento-dev-frontend",
    password: "front123",
    name: "Bootcamp de Desenvolvimento Frontend",
    date: new Date(),
    location: "Belo Horizonte, MG",
    description: "Aprenda a criar interfaces incríveis e responsivas.",
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg",
    imageBackground:
      "https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg",
    expectedPublic: 150,
    guests: [
      {
        id: "eu10jt5s27f-lnj92o88dh-dksildn5oaw",
        name: "Gabriela Rocha",
        email: "gabriela@example.com",
        confirmed: true,
        hasCompanions: true,
        qtdCompanions: 1,
      },
      {
        id: "8g4wx39t9jf-vggtnu4mt4a-565a92dqlln",
        name: "Hugo Nogueira",
        email: "hugo@example.com",
        confirmed: false,
        hasCompanions: false,
        qtdCompanions: 0,
      },
      {
        id: "hsu48etbqx5-ie8d68d2yjc-f7buk4sn7u9",
        name: "Isabela Martins",
        email: "isabela@example.com",
        confirmed: true,
        hasCompanions: false,
        qtdCompanions: 0,
      },
    ],
  },
  {
    id: "80kte3ixvx-y25nu80d1h-8g60lp8g2vg",
    alias: "casamento-alberto-marina",
    password: "casamento2024",
    name: "Casamento do Alberto e Marina",
    date: new Date(),
    location: "Florianópolis, SC",
    description:
      "Celebração do casamento de Alberto e Marina com amigos e familiares.",
    image:
      "https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg",
    imageBackground:
      "https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg",
    expectedPublic: 150,
    guests: [
      {
        id: "nyg1s74e5m-23543uxohsdj-uukauc4i0aq",
        name: "Bruno Cardoso",
        email: "bruno@example.com",
        confirmed: true,
        hasCompanions: true,
        qtdCompanions: 1,
      },
      {
        id: "9bh6ama04fp-4iqlmhr27jk-hr2k651pebb",
        name: "Carla Mendes",
        email: "carla@example.com",
        confirmed: true,
        hasCompanions: false,
        qtdCompanions: 0,
      },
    ],
  },
  {
    id: "85lefprsiis-dnjr52u2gsb-iaqnvcs8ad",
    alias: "aniversario-joao",
    password: "joao2024",
    name: "Aniversário do João - 30 Anos",
    date: new Date(),
    location: "Curitiba, PR",
    description:
      "Comemoração dos 30 anos de João com amigos próximos e familiares.",
    image:
      "https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg",
    imageBackground:
      "https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg",
    expectedPublic: 80,
    guests: [
      {
        id: "pgbw3cuxlq-qyycz89ot5-7xf91unvvpr",
        name: "Maria Souza",
        email: "maria@example.com",
        confirmed: true,
        hasCompanions: true,
        qtdCompanions: 2,
      },
      {
        id: "txi5a7geszj-o8eva4xijh-g1smsdi1y2b",
        name: "José Almeida",
        email: "jose@example.com",
        confirmed: false,
        hasCompanions: false,
        qtdCompanions: 0,
      },
    ],
  },
  {
    id: "0l991j0wsznf-m42qtwz8kuj-d9av8oumg6j",
    alias: "inauguracao-loja-estrela",
    password: "estrela2024",
    name: "Inauguração da Loja Estrela",
    date: new Date(),
    location: "Porto Alegre, RS",
    description:
      "Evento de inauguração da nova loja Estrela com brindes e promoções.",
    image:
      "https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png",
    imageBackground:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s",
    expectedPublic: 300,
    guests: [
      {
        id: "sieyjqpqy3-90s2b09n66m-vzkcyxcw6p",
        name: "Cláudia Lima",
        email: "claudia@example.com",
        confirmed: true,
        hasCompanions: true,
        qtdCompanions: 3,
      },
      {
        id: "87j2zti4fab-avzcabnj1j7-ky8a22hmqf",
        name: "Ricardo Barbosa",
        email: "ricardo@example.com",
        confirmed: true,
        hasCompanions: false,
        qtdCompanions: 0,
      },
    ],
  },
  {
    id: "tmpo1x6y2fm-tzcktwu7zto-r3nb3515s3",
    alias: "reuniao-familia-oliveira",
    password: "familia2024",
    name: "Reunião da Família Oliveira",
    date: new Date(),
    location: "Salvador, BA",
    description: "Reunião de fim de ano da família Oliveira.",
    image:
      "https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg",
    imageBackground:
      "https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid",
    expectedPublic: 50,
    guests: [
      {
        id: "mpo9k36pupp-iu1iw4q2cm-df4yb8ecve",
        name: "Thiago Oliveira",
        email: "thiago@example.com",
        confirmed: true,
        hasCompanions: true,
        qtdCompanions: 4,
      },
      {
        id: "0aedrqi16zsd-o1h0a1o7qu-nv9ptj0tn5r",
        name: "Letícia Oliveira",
        email: "leticia@example.com",
        confirmed: true,
        hasCompanions: false,
        qtdCompanions: 0,
      },
    ],
  },
];

export default events;
