import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Sparkles,
  Clock,
  Camera,
  Award,
  Volume2,
  VolumeX,
  ChevronDown,
  Instagram,
  Wind,
} from "lucide-react";
import heroNails from "../assets/hero-nails.jpg";
import logoAsset from "../assets/jane-braga-logo.jpg.asset.json";
import profissionalAsset from "../assets/jane-braga-profissional.png.asset.json";
import trabalho1 from "../assets/trabalho-1.png.asset.json";
import trabalho2 from "../assets/trabalho-2.png.asset.json";
import trabalho3 from "../assets/trabalho-3.png.asset.json";
import trabalho4 from "../assets/trabalho-4.png.asset.json";
import trabalho5 from "../assets/trabalho-5.png.asset.json";
import trabalho6 from "../assets/trabalho-6.png.asset.json";
import trabalho7 from "../assets/trabalho-7.png.asset.json";
import trabalho8 from "../assets/trabalho-8.png.asset.json";
import trabalho9 from "../assets/trabalho-9.png.asset.json";
import trabalho10 from "../assets/trabalho-10.png.asset.json";
import diploma1 from "../assets/diploma-1.jpg.asset.json";
import diploma2 from "../assets/diploma-2.jpg.asset.json";
import diploma3 from "../assets/diploma-3.jpg.asset.json";
import musicaAmbiente from "../assets/musica-ambiente.mp3.asset.json";

const WHATSAPP_URL = "https://wa.me/5521976958497";


const INSTAGRAM_URL =
  "https://www.instagram.com/janebraganaildesigner?stkn=MWU5YjhxbWpnbWNidg==";

const PHONE_DISPLAY = "+55 21 97695-8497";

const SERVICES = [
  {
    name: "Pé e Mão",
    price: "R$ 50,00",
    desc: "Cutilagem e esmaltação completa",
    highlight: true,
  },
  { name: "Mão", price: "R$ 35,00", desc: "Cutilagem e esmaltação das mãos" },
  { name: "Pé", price: "R$ 35,00", desc: "Cutilagem e esmaltação dos pés" },
  {
    name: "Esmaltação em Gel",
    price: "R$ 90,00",
    desc: "Brilho intenso e longa duração",
    highlight: true,
  },
  {
    name: "Banho de Gel",
    price: "R$ 100,00",
    desc: "Fortalecimento e alongamento natural",
  },
  {
    name: "Gel na Tip",
    price: "R$ 130,00",
    desc: "Alongamento com acabamento perfeito",
  },
  { name: "Unha Postiça", price: "R$ 50,00", desc: "Aplicação com fixação segura" },
  { name: "Spa dos Pés", price: "R$ 45,00", desc: "Esfoliação, hidratação e massagem" },
  { name: "Plástica dos Pés", price: "R$ 70,00", desc: "Remoção de calos e renovação" },
];

const DIPLOMAS = [
  {
    src: diploma2.url,
    title: "Unhas de Fibra de Vidro e Gel Moldado",
    school: "Art Studio · Rio de Janeiro · 2014",
  },
  {
    src: diploma3.url,
    title: "Flores de Carga Dupla Matizada",
    school: "Centro Técnico Art Studio · Rio de Janeiro · 2015",
  },
  {
    src: diploma1.url,
    title: "Nails Artes — Nível II",
    school: "Rio de Janeiro · 2023",
  },
];

const HOURS = [
  { days: "Terça a Sábado", time: "08:00 às 19:00", open: true },
  { days: "Domingo e Segunda", time: "Fechado", open: false },
];

const GALLERY = [
  { src: trabalho1.url, alt: "Unhas nude com arte floral dourada e brilhos" },
  { src: trabalho2.url, alt: "Unhas rosa com francesinha e glitter" },
  { src: trabalho3.url, alt: "Unhas em esmalte bordô escuro" },
  { src: trabalho4.url, alt: "Unhas amendoadas em vermelho vibrante" },
  { src: trabalho5.url, alt: "Unhas em esmalte azul cremoso" },
  { src: trabalho6.url, alt: "Unhas em tom marrom chocolate" },
  { src: trabalho7.url, alt: "Unhas curtas em marrom com muito brilho" },
  { src: trabalho8.url, alt: "Francesinha branca com base glitter" },
  { src: trabalho9.url, alt: "Unhas leitosas com glitter prateado" },
  { src: trabalho10.url, alt: "Francesinha com glitter dourado e borboleta" },
];

const MAPS_EMBED =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(
    "Rua Arlove de Freitas, 295 - Vila Emil, Mesquita - RJ, 26580-230",
  ) +
  "&output=embed";

export const Route = createFileRoute("/")({
  component: Index,
});

function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src={musicaAmbiente.url}
        onEnded={() => setPlaying(false)}
      />
      <button
        onClick={toggle}
        aria-label={playing ? "Pausar música" : "Tocar música"}
        className="inline-flex items-center gap-2 rounded-full border border-line bg-card/80 px-4 py-2 text-xs font-medium tracking-wide text-muted-foreground backdrop-blur transition-colors hover:border-accent hover:text-foreground"
      >
        {playing ? (
          <Volume2 className="h-4 w-4 text-accent" />
        ) : (
          <VolumeX className="h-4 w-4" />
        )}
        {playing ? "Música ambiente ligada" : "Ouvir música ambiente"}
      </button>
    </>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative flex min-h-screen flex-col overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroNails})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-background" />

        <header className="relative z-10 flex items-center justify-between px-6 py-5 md:px-12">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Jane Braga"
            className="group flex items-center gap-3 rounded-full border border-cream/20 bg-black/20 px-3 py-2 backdrop-blur transition-colors hover:border-cream/40"
          >
            <Instagram className="h-5 w-5 text-accent" />
            <span className="hidden text-xs font-medium tracking-wide text-cream sm:inline">
              @janebraganaildesigner
            </span>
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cream backdrop-blur transition-all hover:scale-105 hover:bg-accent/30"
          >
            <Instagram className="h-4 w-4" />
            Seguir no Instagram
          </a>
        </header>

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">

          <p
            className="animate-rise mb-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-cream/80"
            style={{ animationDelay: "0.15s" }}
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Esmalteria · Vila Emil, Mesquita RJ
          </p>
          <h1
            className="animate-rise font-script text-6xl leading-[1.15] text-cream md:text-8xl"
            style={{ animationDelay: "0.2s" }}
          >
            Jane Braga
            <span className="mt-4 block font-serif text-xs font-medium uppercase tracking-[0.5em] text-accent md:text-sm">
              Nail Design
            </span>
          </h1>
          <p
            className="animate-rise mt-6 max-w-md text-sm leading-relaxed text-cream/80 md:text-base"
            style={{ animationDelay: "0.3s" }}
          >
            Beleza e cuidado para as suas mãos, com acabamento impecável e
            atendimento acolhedor.
          </p>

          <div
            className="animate-rise mt-10 flex flex-col items-center gap-3 sm:flex-row"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#catalogo"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 bg-cream/10 px-8 py-4 text-sm font-semibold text-cream backdrop-blur transition-colors hover:bg-cream/20"
            >
              Ver catálogo de serviços
              <ChevronDown className="h-4 w-4" />
            </a>
          </div>

          <div
            className="animate-rise mt-6"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 bg-cream/10 px-6 py-2.5 text-sm font-medium text-cream backdrop-blur transition-all hover:scale-105 hover:bg-cream/20"
            >
              <Instagram className="h-4 w-4" />
              @janebraganaildesigner
            </a>
          </div>

          <div
            className="animate-rise mt-6"
            style={{ animationDelay: "0.6s" }}
          >
            <MusicPlayer />
          </div>
        </div>
      </section>

      {/* SOBRE A PROFISSIONAL */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-line bg-card shadow-xl md:max-w-none">
            <img
              src={profissionalAsset.url}
              alt="Jane Braga — Nail Designer"
              loading="lazy"
              width={768}
              height={1024}
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20">
              <p className="font-serif text-2xl text-cream">Jane Braga</p>
              <p className="text-sm text-cream/80">Nail Designer</p>
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-[11px] uppercase tracking-[0.35em] text-accent">
              Quem cuida de você
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-foreground">
              A profissional por trás da beleza
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-accent md:mx-0" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Olá! Sou a Jane Braga, nail designer apaixonada por transformar
              unhas em verdadeiras obras de arte. Atendo em Mesquita, no bairro
              Vila Emil, com dedicação, carinho e muita atenção aos detalhes.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Aqui você encontra desde o básico impecável até técnicas
              avançadas como banho de gel e alongamento em tip. Cada cliente
              recebe um atendimento personalizado para sair se sentindo ainda
              mais bonita e confiante.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-foreground">
              <Wind className="h-4 w-4 text-accent" />
              Ambiente climatizado
            </div>
            <div className="mt-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" />
                Agendar com Jane
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CATÁLOGO */}
      <section
        id="catalogo"
        className="border-y border-line bg-secondary/30 px-6 py-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-[0.35em] text-accent">
              <Sparkles className="mr-1 inline h-3.5 w-3.5" /> Catálogo
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-foreground">
              Serviços & Preços
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-accent" />
            <p className="mx-auto mt-5 max-w-md text-sm text-muted-foreground">
              Escolha o seu mimo favorito e agende pelo WhatsApp em segundos.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <a
                key={s.name}
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  s.highlight
                    ? "border-accent/60 ring-1 ring-accent/30"
                    : "border-line hover:border-accent/50"
                }`}
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {s.highlight && (
                  <span className="absolute right-4 top-4 rounded-full bg-accent/20 px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-foreground">
                    Queridinho
                  </span>
                )}
                <div>
                  <h3 className="font-serif text-2xl text-foreground">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-end justify-between">
                  <span className="font-mono text-2xl font-semibold text-primary">
                    {s.price}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.15em] text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    Agendar <MessageCircle className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* DIPLOMAS */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-accent">
            <Award className="mr-1 inline h-3.5 w-3.5" /> Formação
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-foreground">
            Certificados & Diplomas
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-accent" />
          <p className="mx-auto mt-5 max-w-md text-sm text-muted-foreground">
            Formação técnica e atualização constante para entregar sempre o
            melhor resultado.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {DIPLOMAS.map((d) => (
            <figure
              key={d.title}
              className="group overflow-hidden rounded-2xl border border-line bg-card shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={d.src}
                  alt={`Certificado — ${d.title}`}
                  loading="lazy"
                  width={1600}
                  height={1200}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-5 py-4">
                <p className="font-serif text-lg leading-snug text-foreground">
                  {d.title}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{d.school}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* GALERIA */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-accent">
            <Camera className="mr-1 inline h-3.5 w-3.5" /> Galeria
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-foreground">
            Inspirações do Meu Trabalho
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-accent" />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {GALLERY.map((img, idx) => (
            <div
              key={idx}
              className="group aspect-square overflow-hidden rounded-2xl border border-line bg-card shadow-sm"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* HORÁRIOS */}
      <section className="border-y border-line bg-secondary/50 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-accent">
            <Clock className="mr-1 inline h-3.5 w-3.5" /> Horários
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-foreground">
            Atendimento
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-accent" />

          <div className="mx-auto mt-10 grid gap-4 sm:grid-cols-2">
            {HOURS.map((h) => (
              <div
                key={h.days}
                className="rounded-2xl border border-line bg-card px-6 py-8"
              >
                <p className="font-serif text-xl text-foreground">{h.days}</p>
                <p
                  className={`mt-2 font-mono text-sm ${h.open ? "text-primary" : "text-muted-foreground"}`}
                >
                  {h.time}
                </p>
                <span
                  className={`mt-4 inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] ${
                    h.open
                      ? "bg-accent/20 text-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {h.open ? "Aberto" : "Fechado"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-accent">
            <MapPin className="mr-1 inline h-3.5 w-3.5" /> Onde estamos
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-foreground">
            Localização
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-accent" />
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Rua Arlove de Freitas, 295 — Vila Emil
            <br />
            Mesquita · RJ · CEP 26580-230 · Brasil
          </p>
          <a
            href="tel:+5521976958497"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-line shadow-sm">
          <iframe
            title="Mapa — Jane Braga Nail Designer"
            src={MAPS_EMBED}
            className="h-80 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-line bg-card px-6 py-10 text-center">
        <p className="font-serif text-xl text-foreground">
          Jane Braga Nail Designer
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          Rua Arlove de Freitas, 295 — Vila Emil, Mesquita · RJ · CEP
          26580-230
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          Terça a Sábado · 08:00 às 19:00 · {PHONE_DISPLAY}
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-background px-5 py-2.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <Instagram className="h-4 w-4" />
          @janebraganaildesigner
        </a>
      </footer>

      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
