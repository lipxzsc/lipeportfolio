import { createFileRoute } from "@tanstack/react-router";

const LINKEDIN_URL = "https://www.linkedin.com/in/lipefontana";
const GITHUB_URL = "https://github.com/lipxzsc";
const ADEGA_URL = "https://projetoadega.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luis Felipe Fontana Silva — Portfólio" },
      { name: "description", content: "Portfólio de Luis Felipe: jornada atípica, paixão por hardware e T.I. e projetos web." },
      { property: "og:title", content: "Luis Felipe Fontana Silva — Portfólio" },
      { property: "og:description", content: "Jornada atípica, paixão por hardware e T.I. e projetos web." },
    ],
  }),
  component: Index,
});

const experiencias = [
  {
    emoji: "🔩",
    title: "DS Peças & FD Auto Parts",
    badge: "Empresas familiares",
    text: "Atuei como auxiliar mecânico, mas fiz de tudo um pouco: vendas no balcão e online, gerenciamento de estoque, postagem de peças, cobrança de clientes, contas a receber e a pagar, abertura e fechamento de caixa — praticamente um auxiliar administrativo completo! Trabalhava conforme \"guentava o tranco\": por ser um pouco braçal, às vezes cansava demais e ficava um pouco ruim. Por ser ambiente familiar, vieram muitos conflitos e acabei saindo. Mas o aprendizado ficou! 💪",
  },
  {
    emoji: "🚗",
    title: "Glauber Multimarcas",
    badge: "Algumas semanas",
    text: "Consegui trabalhar poucas semanas por lá, porém devido às minhas condições físicas e ao amplo conhecimento exigido pelo empregador, fui despedido. Era informal e eu recebia R$300 por semana… poisé 🫠🤦🏽‍♂️. Mas nem tudo foi perda: aprendi a trocar freios, limpar reservatórios, usar scanner, trocar óleo e o básico de manutenção!",
  },
  {
    emoji: "🖥️",
    title: "Computação desde pequeno",
    badge: "Paixão de infância",
    text: "Desde muito novo sempre gostei e fucei em tudo sobre computação e hardware. Trocava peças, melhorava algumas e trocava outras, instalava drivers e programas, além de formatação e backup de arquivos. O computador sempre foi meu laboratório particular! 🔬",
  },
  {
    emoji: "🌐",
    title: "Fuçando na web",
    badge: "Explorador nato",
    text: "Depois comecei a fuçar na web: criação de websites, alterações de templates WordPress… e até cheguei na época de pastear cheats de Counter-Strike (pegar funcionalidades da source de um cheat e adicionar em outra source pra \"ter um cheat próprio\" 😅). Era apaixonado em descobrir tudo que poderia fazer!",
  },
];

const paixoes = [
  { emoji: "🖥️", label: "Montagem de PCs" },
  { emoji: "🔧", label: "Manutenção de hardware" },
  { emoji: "💾", label: "Formatação e backup" },
  { emoji: "🌐", label: "Criação de sites" },
  { emoji: "🎮", label: "PC Gamer (no sangue!)" },
  { emoji: "🤖", label: "Novas tecnologias" },
];

function Index() {
  return (
    <main className="dots min-h-screen">
      {/* Topo */}
      <section className="mx-auto max-w-5xl px-5 pt-12 pb-10 text-center">
        <div className="floaty mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-accent pop text-6xl">
          👨‍💻
        </div>
        <p className="inline-block rounded-full bg-card pop px-4 py-1 text-sm font-bold">Olá, eu sou o</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">
          Luis Felipe <span className="text-primary">Fontana</span> Silva
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Um cara curioso que ama abrir computador, entender como tudo funciona e transformar ideias em projetos de verdade. ⚡
        </p>
        <nav className="mt-8 flex flex-wrap justify-center gap-3 font-bold">
          {[["#sobre", "Sobre mim"], ["#jornada", "Jornada"], ["#paixao", "Paixões"], ["#projetos", "Projetos"], ["#contato", "Contato"]].map(([h, l]) => (
            <a key={h} href={h} className="rounded-full bg-card pop pop-hover px-4 py-2 text-sm">{l}</a>
          ))}
        </nav>
      </section>

      {/* Sobre */}
      <section id="sobre" className="mx-auto max-w-5xl px-5 py-10">
        <SectionTitle emoji="🙋" title="Sobre mim" />
        <div className="grid gap-4 sm:grid-cols-3">
          <Fact color="bg-sun" emoji="🎂" title="23 anos" text="Terminando o ensino médio e ingressando no mercado de trabalho." />
          <Fact color="bg-mint" emoji="♿" title="PCD" text="CID-10: E84.8 — Fibrose Cística. Persistência faz parte do meu dia a dia." />
          <Fact color="bg-sky" emoji="💡" title="Apaixonado por T.I." text="Hardware, sistemas e desenvolvimento web são meu playground." />
        </div>
      </section>

      {/* Jornada */}
      <section id="jornada" className="mx-auto max-w-5xl px-5 py-10">
        <SectionTitle emoji="🗺️" title="Minha jornada atípica" />
        <p className="mb-6 text-muted-foreground">
          Nem todo caminho é linha reta — o meu teve curvas, subidas e muito aprendizado. Bora conhecer? 👇
        </p>
        <ol className="relative space-y-5 border-l-4 border-dashed pl-8">
          {experiencias.map((e, i) => (
            <li key={e.title} className="relative">
              <span className="absolute -left-[3.1rem] top-2 flex h-9 w-9 items-center justify-center rounded-full bg-primary pop font-display font-bold text-primary-foreground">
                {i + 1}
              </span>
              <div className="rounded-2xl bg-card pop p-5">
                <span className="rounded-full bg-accent pop px-3 py-0.5 text-xs font-bold">{e.badge}</span>
                <h3 className="mt-3 text-xl font-semibold">{e.emoji} {e.title}</h3>
                <p className="mt-2 text-muted-foreground">{e.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Paixões */}
      <section id="paixao" className="mx-auto max-w-5xl px-5 py-10">
        <SectionTitle emoji="❤️" title="Hardware & T.I." />
        <p className="mb-5 text-muted-foreground">
          Desde cedo, abrir um gabinete pra mim é como abrir um baú do tesouro. Entender cada peça — processador, memória, placa de vídeo — e fazer tudo funcionar junto é o que me move. E a paixão por PC gamer? Essa sempre estará no sangue! 🩸🎮
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {paixoes.map((p) => (
            <div key={p.label} className="rounded-2xl bg-card pop pop-hover p-4 text-center">
              <div className="text-4xl">{p.emoji}</div>
              <div className="mt-2 font-bold">{p.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="mx-auto max-w-5xl px-5 py-10">
        <SectionTitle emoji="🧪" title="Meus projetos" />
        <div className="grid gap-5 sm:grid-cols-2">
          <a href={ADEGA_URL} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-3xl bg-card pop pop-hover">
            <div className="flex h-36 items-center justify-center bg-primary text-6xl">🍷🥤</div>
            <div className="p-5">
              <span className="rounded-full bg-mint pop px-3 py-0.5 text-xs font-bold">✅ No ar</span>
              <h3 className="mt-3 text-2xl font-semibold">Projeto Adega & Conveniência</h3>
              <p className="mt-1 text-muted-foreground">Site para adega de bebidas e loja de conveniência: catálogo de produtos e pedidos de forma simples.</p>
              <p className="mt-3 font-bold text-primary">Visitar projeto →</p>
            </div>
          </a>
          <div className="overflow-hidden rounded-3xl bg-card pop">
            <div className="flex h-36 items-center justify-center bg-secondary text-6xl">💰📊</div>
            <div className="p-5">
              <span className="rounded-full bg-sun pop px-3 py-0.5 text-xs font-bold">🚧 Em manutenção</span>
              <h3 className="mt-3 text-2xl font-semibold">FinancePro</h3>
              <p className="mt-1 text-muted-foreground">Controle de despesas e receitas para organizar o dinheiro do dia a dia. Em breve de volta, ainda melhor!</p>
              <p className="mt-3 font-bold text-muted-foreground">Em breve…</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="mx-auto max-w-5xl px-5 py-10 pb-16">
        <SectionTitle emoji="🤝" title="Vamos conversar?" />
        <div className="grid gap-5 sm:grid-cols-2">
          <LinkCard
            href={LINKEDIN_URL}
            color="bg-sky"
            icon="in"
            title="LinkedIn"
            text="Minha trajetória profissional e contatos."
            note="(postado somente o app que está em manutenção)"
          />
          <LinkCard
            href={GITHUB_URL}
            color="bg-accent"
            icon="</>"
            title="GitHub"
            text="Meus códigos e experimentos."
            note="(ainda não tem nada de extravagante lá kk)"
          />
        </div>
        <p className="mt-12 text-center text-sm text-muted-foreground">Feito com 💛 por Luis Felipe Fontana Silva</p>
      </section>
    </main>
  );
}

function SectionTitle({ emoji, title }: { emoji: string; title: string }) {
  return (
    <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent pop text-2xl">{emoji}</span>
      {title}
    </h2>
  );
}

function Fact({ color, emoji, title, text }: { color: string; emoji: string; title: string; text: string }) {
  return (
    <div className={`rounded-2xl ${color} pop p-5`}>
      <div className="text-4xl">{emoji}</div>
      <h3 className="mt-2 text-xl font-semibold">{title}</h3>
      <p className="mt-1">{text}</p>
    </div>
  );
}

function LinkCard({ href, color, icon, title, text, note }: { href: string; color: string; icon: string; title: string; text: string; note?: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-3xl bg-card pop pop-hover p-5">
      <span className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${color} pop font-display text-2xl font-bold`}>{icon}</span>
      <span>
        <span className="block font-display text-2xl font-semibold">{title}</span>
        <span className="block text-muted-foreground">{text}</span>
        {note && <span className="block text-sm italic text-muted-foreground">{note}</span>}
        <span className="mt-1 block font-bold text-primary">Abrir perfil →</span>
      </span>
    </a>
  );
}
