import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Accessibility, FileDown, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import curriculo from "@/assets/curriculo.pdf.asset.json";

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
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
    text: "Desde muito novo sempre gostei e fucei em tudo sobre computação e hardware. Trocava peças, melhorava algumas, trocava outras, instalava drivers e programas, além de fazer formatação e backup de arquivos. O computador sempre foi meu laboratório particular! 🔬",
  },
  {
    emoji: "🌐",
    title: "Fuçando na web e códigos",
    badge: "Explorador nato",
    text: "Depois, comecei a fuçar na web: criação de websites, alterações de templates do WordPress, sites de filmes e séries (tipo megaflix)… e até passei pela época de pastear cheats de Counter-Strike (pegar funcionalidades do código de um pra colocar em outro e \"ter meu próprio cheat\" 😅). Eu era apaixonado em descobrir tudo o que dava pra fazer!",
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
  const [touchedOptions, setTouchedOptions] = useState<string[]>([]);
  const stopOptionMotion = (href: string) => {
    setTouchedOptions((current) => current.includes(href) ? current : [...current, href]);
  };
  return (
    <main className="dots min-h-screen">
      {/* Topo */}
      <section className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-5xl px-5 py-8 text-center sm:py-10">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground sm:h-20 sm:w-20">
          <Laptop className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
        </div>
        <p className="inline-flex max-w-full items-center justify-center gap-2 rounded-md border border-primary/40 px-3 py-1.5 text-xs font-semibold text-primary"><Accessibility className="h-4 w-4 shrink-0" aria-hidden="true" /> Pessoa com Deficiência (PCD)</p>
        <p className="mt-4 text-sm text-secondary-foreground/80">Olá, eu sou o</p>
        <h1 className="mx-auto mt-2 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
          Luis Felipe <span className="text-primary">Fontana</span> Silva
        </h1>
        <p className="mx-auto mt-3 max-w-lg font-display text-sm font-semibold text-primary sm:text-base">Tecnologia, Suporte Operacional e Processos</p>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-secondary-foreground/80 sm:text-base">
          Um cara curioso que ama abrir computador, entender como tudo funciona e transformar ideias em projetos de verdade. ⚡
        </p>
        <nav aria-label="Seções do portfólio" className="mt-5 flex flex-wrap justify-center gap-3 py-2">
          {([["#sobre", "Sobre mim"], ["#jornada", "Jornada"], ["#paixao", "Paixões"], ["#projetos", "Projetos"], ["#contato", "Contato"]] as const).map(([h, l]) => (
            <Button key={h} asChild variant="outline" size="sm" className="header-button-3d min-h-10 px-4 font-semibold" ><a href={h} data-touched={touchedOptions.includes(h)} onPointerDown={() => stopOptionMotion(h)} onClick={() => stopOptionMotion(h)}>{l}</a></Button>
          ))}
        </nav>
        <Button asChild className="mt-4 h-11 max-w-full px-5"><a href={curriculo.url} download="Curriculo_Luis_Felipe_Fontana.pdf"><FileDown aria-hidden="true" /> Baixar currículo (PDF)</a></Button>
      </div>
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
        <ol className="relative space-y-5 border-l-2 border-primary pl-8">
          {experiencias.map((e, i) => (
            <li key={e.title} className="relative">
              <span className="absolute -left-[3.1rem] top-2 flex h-9 w-9 items-center justify-center rounded-full bg-primary pop font-display font-bold text-primary-foreground">
                {i + 1}
              </span>
              <div className="rounded-lg bg-card pop p-5">
                <span className="rounded-full bg-accent pop px-3 py-0.5 text-xs font-bold">{e.badge}</span>
                <h3 className="mt-3 text-lg font-semibold">{e.emoji} {e.title}</h3>
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
            <div key={p.label} className="rounded-lg bg-card pop pop-hover p-4 text-center">
              <div className="text-2xl">{p.emoji}</div>
              <div className="mt-2 text-sm font-semibold">{p.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="mx-auto max-w-5xl px-5 py-10">
        <SectionTitle emoji="🧪" title="Meus projetos" />
        <div className="grid gap-5 sm:grid-cols-2">
          <a href={ADEGA_URL} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-lg bg-card pop pop-hover">
            <div className="flex h-24 items-center justify-center bg-accent text-3xl">🍷🥤</div>
            <div className="p-5">
              <span className="rounded-full bg-mint pop px-3 py-0.5 text-xs font-bold">✅ No ar</span>
              <h3 className="mt-3 text-xl font-semibold">Projeto Adega & Conveniência</h3>
              <p className="mt-1 text-muted-foreground">Site para adega de bebidas e loja de conveniência: catálogo de produtos e pedidos de forma simples.</p>
              <p className="mt-3 font-bold text-primary">Visitar projeto →</p>
            </div>
          </a>
          <a href="https://finanproai.netlify.app" target="_blank" rel="noreferrer" className="block overflow-hidden rounded-lg bg-card pop pop-hover">
            <div className="flex h-24 items-center justify-center bg-sky text-3xl">💰📊</div>
            <div className="p-5">
              <span className="rounded-full bg-mint pop px-3 py-0.5 text-xs font-bold">✅ No ar</span>
              <h3 className="mt-3 text-xl font-semibold">Finan Pro</h3>
              <p className="mt-1 text-muted-foreground">Controle de despesas e receitas para organizar o dinheiro do dia a dia, com fluxo de caixa e entradas/saídas.</p>
              <p className="mt-3 font-bold text-primary">Acessar app →</p>
            </div>
          </a>
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
            note="(postado o app Finan Pro)"
          />
          <LinkCard
            href={GITHUB_URL}
            color="bg-accent"
            icon="</>"
            title="GitHub"
            text="Meus códigos e experimentos."
            note="(ainda não tem nada de extravagante lá kk)"
          />
          <LinkCard
            href={curriculo.url}
            download="Curriculo_Luis_Felipe_Fontana.pdf"
            color="bg-mint"
            icon="📄"
            title="Currículo"
            text="Baixe meu currículo completo em PDF."
            cta="Baixar PDF ↓"
          />
        </div>
        <p className="mt-12 text-center text-sm text-muted-foreground">Feito com 💙 por Luis Felipe Fontana Silva</p>
      </section>
    </main>
  );
}

function SectionTitle({ emoji, title }: { emoji: string; title: string }) {
  return (
    <h2 className="mb-6 flex min-w-0 items-center gap-3 text-2xl font-bold">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent text-lg">{emoji}</span>
      <span className="min-w-0">{title}</span>
    </h2>
  );
}

function Fact({ color, emoji, title, text }: { color: string; emoji: string; title: string; text: string }) {
  return (
    <div className={`rounded-lg ${color} pop p-5`}>
      <div className="text-2xl">{emoji}</div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="mt-1">{text}</p>
    </div>
  );
}

function LinkCard({ href, color, icon, title, text, note, download, cta = "Abrir perfil →" }: { href: string; color: string; icon: string; title: string; text: string; note?: string; download?: string; cta?: string }) {
  return (
    <a href={href} {...(download ? { download } : { target: "_blank", rel: "noreferrer" })} className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-lg bg-card pop pop-hover p-5">
      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${color} font-display text-lg font-bold`}>{icon}</span>
      <span className="min-w-0">
        <span className="block font-display text-lg font-semibold">{title}</span>
        <span className="block text-muted-foreground">{text}</span>
        {note && <span className="block text-sm italic text-muted-foreground">{note}</span>}
        <span className="mt-1 block font-bold text-primary">{cta}</span>
      </span>
    </a>
  );
}
