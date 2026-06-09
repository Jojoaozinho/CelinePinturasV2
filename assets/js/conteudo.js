/* ============================================================================
   CELINE PINTURAS — CONTEÚDO DO SITE  (ARQUIVO PRINCIPAL PARA EDITAR)
   ----------------------------------------------------------------------------
   Aqui ficam TODOS os textos, links, fotos e vídeos do site.
   Você NÃO precisa saber programar. Regras simples:

     • Edite apenas o que está entre "aspas".
     • Nunca apague as aspas, as vírgulas ou os nomes antes dos dois-pontos.
     • Para trocar uma foto: coloque o arquivo na pasta indicada (assets/images/...)
       com o MESMO nome, ou mude o caminho aqui dentro das aspas.
     • Caminhos de foto/vídeo sempre começam com "assets/".

   Dica: se algo quebrar depois de editar, foi quase sempre uma aspa ou vírgula
   apagada sem querer. O GitHub guarda o histórico — dá para voltar atrás.
   ============================================================================ */

window.CONTEUDO = {

  /* ===================== CONTATO (aparece no site todo) ===================== */
  contato: {
    /* Número do WhatsApp: 55 (Brasil) + 42 (DDD) + número, só dígitos. */
    whatsapp: "5542999872929",
    whatsappMensagem: "Olá, Celine! Vim pelo seu site e gostaria de saber mais.",
    instagram: "https://instagram.com/celine.pinturas",
    instagramArroba: "@celine.pinturas",
    instagramCerimonial: "https://instagram.com/celine.p.cerimonial",
    linktree: "https://linktr.ee/celinepinturasboava",
    email: "celinepinturasboava@gmail.com",
    cidade: "Guarapuava · Paraná"
  },

  /* ===================== HERO (primeira tela de boas-vindas) ================ */
  hero: {
    imagem: "assets/images/about/hero.jpg",
    fraseEyebrow: "Artista visual · Guarapuava, PR",
    titulo: "Onde a emoção encontra a tela",
    subtitulo: "Celine Boava — retratos, obras autorais, pintura ao vivo e aulas de pintura a óleo.",
    botaoPrimario: "Solicitar orçamento",
    botaoSecundario: "Ver o ateliê"
  },

  /* ===================== SOBRE A ARTISTA =================================== */
  sobre: {
    imagem: "assets/images/about/retrato.jpg",
    eyebrow: "Sobre a artista",
    titulo: "Celine Boava",
    paragrafos: [
      "Sou Celine Cristine Oliveira Boava, artista visual de Guarapuava (PR). Trabalho com pintura a óleo, mas acredito na força das artes integradas — teatro, música, fotografia e performance se entrelaçam de forma orgânica com o que pinto.",
      "Antes de qualquer imagem, há o corpo: é nele que tudo começa. Quando me permito escutar o que pulsa dentro — um incômodo, uma lembrança, uma intuição — algo se move em direção à pintura. Um processo quase ritualístico, que pede pausa, presença e entrega.",
      "Minhas pinturas não são respostas fechadas: são convites ao encontro. A obra só se completa no outro — naquele olhar que encontra ali a própria história."
    ],
    assinatura: "Celine Boava"
  },

  /* ===================== SERVIÇOS (4 cartões) ============================== */
  /* icone: pincel | paleta | alianca | estrela   |   acao: orcamento | aula | contato */
  servicos: [
    { icone: "pincel",  titulo: "Retratos & encomendas", texto: "Retratos e obras criados a partir da sua história, das suas fotos e dos seus momentos mais queridos — em óleo, com presença e emoção.", botao: "Encomendar", acao: "orcamento" },
    { icone: "alianca", titulo: "Pintura ao vivo",       texto: "Levo o cavalete para casamentos e eventos e pinto a cena ao vivo. Ao final, vocês levam para casa uma tela original — muito além de uma fotografia.", botao: "Reservar data", acao: "orcamento" },
    { icone: "paleta",  titulo: "Aulas & oficinas",      texto: "Aulas e oficinas de pintura a óleo para todos os níveis, do primeiro contato ao aprofundamento técnico, no ritmo de cada aluno.", botao: "Agendar aula", acao: "aula" },
    { icone: "estrela", titulo: "Obras autorais",        texto: "Pinturas autorais que investigam o universo simbólico dos palhaços, a vulnerabilidade e a emoção humana. Disponíveis para aquisição.", botao: "Conversar", acao: "orcamento" }
  ],

  /* ===================== PINTURA AO VIVO ================================== */
  pinturaAoVivo: {
    eyebrow: "Pintura ao vivo",
    titulo: "A obra nascendo diante dos seus convidados",
    texto: "Durante o evento, monto meu cavalete e pinto a cena ao vivo, do começo ao fim. Os convidados acompanham a obra nascer e, ao final, vocês levam para casa uma tela original — uma lembrança única daquele dia.",
    destaques: [
      "Casamentos e celebrações",
      "Tela original entregue ao final do evento",
      "Uma experiência ao vivo para os convidados",
      "Acompanhe em @celine.p.cerimonial"
    ],
    /* Sem fotos reais de eventos ainda — adicione em assets/images/events/ e liste aqui. */
    galeria: [],
    videos: []
  },

  /* ===================== ATELIÊ / OBRAS (com filtros) ===================== */
  atelie: {
    eyebrow: "Ateliê · Obras",
    titulo: "Pinturas que são convites ao encontro",
    texto: "Uma seleção de retratos, obras autorais e paisagens em óleo. Boa parte da minha pesquisa atual investiga o universo simbólico dos palhaços — um corpo entre o riso e a dor, a máscara e a verdade.",
    categorias: [
      { id: "todos",     nome: "Todas" },
      { id: "autorais",  nome: "Autorais" },
      { id: "retratos",  nome: "Retratos" },
      { id: "paisagens", nome: "Paisagens" }
    ],
    obras: [
      { src: "assets/images/portfolio/obra-03.jpg", alt: "Universo dos palhaços — obras autorais emolduradas", categoria: "autorais" },
      { src: "assets/images/portfolio/obra-02.jpg", alt: "Coração — obra autoral em óleo", categoria: "autorais" },
      { src: "assets/images/portfolio/obra-01.jpg", alt: "Retrato em óleo — estudo de figura", categoria: "retratos" },
      { src: "assets/images/portfolio/obra-04.jpg", alt: "Retrato autoral em moldura dourada", categoria: "autorais" },
      { src: "assets/images/portfolio/obra-05.jpg", alt: "Paisagem em óleo", categoria: "paisagens" }
    ],
    /* Vídeo: tour pelas obras. tipo "arquivo" (mp4 no projeto) ou "youtube". */
    videos: [
      { tipo: "arquivo", src: "assets/videos/events/arte-na-garagem.mp4", cartaz: "assets/images/portfolio/poster-garagem.jpg", titulo: "Arte na garagem — obras da Celine" }
    ]
  },

  /* ===================== AULAS & OFICINAS ================================= */
  aulas: {
    eyebrow: "Aulas & oficinas",
    titulo: "Aulas de pintura a óleo para todos os níveis",
    texto: "Já ministrei oficinas de pintura a óleo e recebo alunos no ateliê. Cada encontro respeita o ritmo de quem está aprendendo — do primeiro contato com o material ao aprofundamento técnico.",
    metodologia: [
      { titulo: "Fundamentos",     texto: "Materiais, teoria das cores e os primeiros gestos com o pincel." },
      { titulo: "Prática guiada",  texto: "Telas acompanhadas de perto, com correções individuais." },
      { titulo: "No seu ritmo",    texto: "Turmas pequenas e atenção individual, do iniciante ao avançado." }
    ],
    publicoAlvo: "Para iniciantes, curiosos e para quem já pinta e quer evoluir. Sem pré-requisitos.",
    botao: "Agendar aula",
    acao: "aula",
    fotos: [
      { src: "assets/images/classes/aula-01.jpg", alt: "Celine ensinando teoria das cores com o círculo cromático" },
      { src: "assets/images/classes/aula-02.jpg", alt: "Explicação sobre tintas e pigmentos na oficina" },
      { src: "assets/images/classes/aula-03.jpg", alt: "Celine mostrando uma cartela de cores" },
      { src: "assets/images/classes/aula-04.jpg", alt: "Celine conduzindo a oficina de pintura" },
      { src: "assets/images/classes/aula-05.jpg", alt: "Aula de pintura no ateliê" },
      { src: "assets/images/classes/aula-06.jpg", alt: "Momento da oficina de pintura a óleo" }
    ],
    videos: [
      { tipo: "arquivo", src: "assets/videos/classes/turma.mp4", cartaz: "assets/images/classes/poster-turma.jpg", titulo: "Turma de pintura com a Celine" }
    ]
  },

  /* ===================== GALERIA DOS ALUNOS =============================== */
  alunos: {
    eyebrow: "Galeria dos alunos",
    titulo: "Feito à mão pelos alunos",
    texto: "Trabalhos e momentos das turmas e oficinas. Cada tela carrega a evolução e o olhar de quem pintou.",
    fotos: [
      { src: "assets/images/students/aluno-01.jpg", alt: "Aluna pintando em aula" },
      { src: "assets/images/students/aluno-02.jpg", alt: "Aluna concentrada na pintura" },
      { src: "assets/images/students/aluno-03.jpg", alt: "Aluna trabalhando na tela" },
      { src: "assets/images/students/aluno-04.jpg", alt: "Aluno pintando no ateliê" },
      { src: "assets/images/students/aluno-05.jpg", alt: "Aluna em aula de pintura" },
      { src: "assets/images/students/aluno-06.jpg", alt: "Aluna sorrindo durante a aula" },
      { src: "assets/images/students/aluno-07.jpg", alt: "Aluna pintando com a paleta na mão" },
      { src: "assets/images/students/aluno-08.jpg", alt: "Aluna após a aula de pintura" }
    ]
  },

  /* ===================== PROCESSO CRIATIVO =============================== */
  processo: {
    eyebrow: "Processo criativo",
    titulo: "Do corpo à tela",
    texto: "Cada obra nasce de uma escuta interna e atravessa camadas até virar imagem. Aqui, um pouco dos bastidores.",
    etapas: [
      { titulo: "Escuta",     texto: "Uma emoção, memória ou intuição começa a pedir forma." },
      { titulo: "Estudo",     texto: "Composição, luz e paleta — a teoria das cores em ação." },
      { titulo: "Pintura",    texto: "Camadas de óleo construídas com pausa e presença." },
      { titulo: "Acabamento", texto: "Ajustes finais, secagem e moldura." }
    ],
    fotos: [
      { src: "assets/images/process/processo-01.jpg", alt: "Detalhe das mãos pintando" },
      { src: "assets/images/process/processo-02.jpg", alt: "Estudo e medição da composição na tela" },
      { src: "assets/images/process/processo-03.jpg", alt: "Secagem da tinta na tela" },
      { src: "assets/images/process/processo-04.jpg", alt: "Pincéis e materiais do ateliê" },
      { src: "assets/images/process/processo-05.jpg", alt: "Celine organizando suas obras" }
    ],
    videos: [
      { tipo: "arquivo", src: "assets/videos/process/processo-paisagem.mp4", cartaz: "assets/images/process/poster-paisagem.jpg", titulo: "Pintura de paisagem — pôr do sol (time-lapse)" }
    ]
  },

  /* ===================== DEPOIMENTOS ======================================
     ATENÇÃO: estes são EXEMPLOS. Troque pelos depoimentos reais dos seus
     alunos, noivos e clientes (ou peça autorização para publicá-los). */
  depoimentos: {
    eyebrow: "Quem já viveu essa experiência",
    titulo: "Depoimentos",
    grupos: [
      { nome: "Alunos", itens: [
        { texto: "As aulas me deram confiança para finalmente pintar. A Celine respeita o ritmo de cada um.", autor: "Aluna da oficina" },
        { texto: "Saí da primeira aula já com uma tela na mão e muita vontade de continuar.", autor: "Aluno iniciante" }
      ]},
      { nome: "Noivos", itens: [
        { texto: "Ver a tela nascer durante a festa emocionou todo mundo. Hoje ela está na nossa sala.", autor: "Casal de noivos" }
      ]},
      { nome: "Clientes", itens: [
        { texto: "O retrato ficou além do que eu imaginava — captou exatamente a emoção daquele momento.", autor: "Cliente de encomenda" }
      ]}
    ]
  },

  /* ===================== PERGUNTAS FREQUENTES ============================= */
  faq: {
    eyebrow: "Dúvidas comuns",
    titulo: "Perguntas frequentes",
    itens: [
      { pergunta: "Como funciona uma encomenda de pintura?", resposta: "Conversamos sobre a ideia, as fotos e o tamanho da tela. Faço um orçamento e, com a aprovação, inicio a obra em óleo, enviando atualizações até a entrega." },
      { pergunta: "Vocês fazem pintura ao vivo em casamentos?", resposta: "Sim! Monto o cavalete no evento e pinto a cena ao vivo. Ao final, a tela original fica com vocês. Consulte disponibilidade pelo WhatsApp." },
      { pergunta: "Preciso ter experiência para fazer aulas?", resposta: "Não. As aulas atendem do iniciante ao avançado, respeitando o ritmo de cada aluno." },
      { pergunta: "Quais materiais são usados nas aulas?", resposta: "Trabalhamos com pintura a óleo. No primeiro contato eu oriento sobre os materiais necessários." },
      { pergunta: "Você atende fora de Guarapuava?", resposta: "Sim, dependendo da data e do tipo de trabalho. Me chame no WhatsApp para combinarmos." },
      { pergunta: "Como compro uma obra autoral?", resposta: "As obras disponíveis podem ser adquiridas diretamente comigo pelo WhatsApp ou Instagram." }
    ]
  },

  /* ===================== RODAPÉ =========================================== */
  rodape: {
    frase: "A obra só se completa no outro.",
    creditoTexto: "Celine Boava · Artista Visual"
  }
};
