import Image from "next/image";

const jargon = ["Muda", "Inovatif", "Berkarya"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* giant backdrop word */}
      <span
        aria-hidden
        className="font-display pointer-events-none absolute -bottom-2 left-0 select-none whitespace-nowrap text-[15vw] font-black uppercase leading-none tracking-tight text-bone/[0.04] sm:text-[16vw] lg:text-[11vw]"
      >
        Kronggen
      </span>

      {/* ============ MOBILE (< lg) ============ */}
      <div className="mx-auto w-full max-w-7xl px-5 pb-14 pt-24 sm:px-8 sm:pt-28 lg:hidden">
        <div className="relative">
          {/* photo behind text, hugging right edge */}
          <div
            aria-hidden
            className="absolute -right-6 top-[-1.5rem] h-[290px] w-[195px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_45%)] sm:h-[360px] sm:w-[245px]"
          >
            <div className="hero-photo h-full w-full" style={{ animationDelay: "0.3s" }}>
              <div className="hero-float h-full w-full">
                <Image
                  src="/images/arizubaidi.png"
                  alt=""
                  fill
                  priority
                  sizes="245px"
                  className="object-cover object-top [filter:drop-shadow(0_16px_32px_rgba(0,0,0,0.55))]"
                />
              </div>
            </div>
          </div>

          <h1 className="font-display relative text-[15vw] font-black uppercase leading-[0.92] tracking-tight [text-shadow:0_2px_24px_rgba(0,0,0,0.6)] sm:text-7xl">
            <span className="block overflow-hidden pb-1">
              <span className="hero-mask-inner" style={{ animationDelay: "0.15s" }}>
                Ari
              </span>
            </span>
            <span className="block overflow-hidden pb-2">
              <span className="hero-mask-inner" style={{ animationDelay: "0.27s" }}>
                Zubaidi<span className="text-pdip">.</span>
              </span>
            </span>
          </h1>

          <ul
            className="hero-rise relative mt-5 flex flex-wrap gap-2"
            style={{ animationDelay: "0.45s" }}
            aria-label="Jargon"
          >
            {jargon.map((j, i) => (
              <li
                key={j}
                className="hero-pop rounded-full border border-pdip/50 bg-pdip/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-sm"
                style={{ animationDelay: `${0.45 + i * 0.08}s` }}
              >
                {j}
              </li>
            ))}
          </ul>
        </div>

        <p
          className="hero-rise mt-6 max-w-md text-sm leading-relaxed text-bone/85"
          style={{ animationDelay: "0.6s" }}
        >
          Calon Kepala Desa Kronggen. Siap memimpin dengan prinsip
          transparansi dan gotong royong — dari warga, untuk warga.
        </p>

        <blockquote
          className="hero-rise mt-6 flex max-w-md gap-3"
          style={{ animationDelay: "0.72s" }}
        >
          <span aria-hidden className="hero-bar w-[3px] self-stretch rounded-full bg-pdip" />
          <p className="font-display text-lg font-black uppercase leading-snug tracking-tight sm:text-xl">
            Muda, semangat baru — untuk Desa Kronggen yang lebih maju.
          </p>
        </blockquote>
      </div>

      {/* ============ DESKTOP (>= lg) ============ */}
      <div className="mx-auto hidden w-full max-w-7xl gap-6 px-8 pb-24 pt-32 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <h1 className="font-display text-7xl font-black uppercase leading-[0.92] tracking-tight xl:text-8xl">
            <span className="block overflow-hidden pb-1">
              <span className="hero-mask-inner" style={{ animationDelay: "0.15s" }}>
                Ari
              </span>
            </span>
            <span className="block overflow-hidden pb-2">
              <span className="hero-mask-inner" style={{ animationDelay: "0.27s" }}>
                Zubaidi<span className="text-pdip">.</span>
              </span>
            </span>
          </h1>

          <ul
            className="hero-rise mt-7 flex flex-wrap gap-2"
            style={{ animationDelay: "0.45s" }}
            aria-label="Jargon"
          >
            {jargon.map((j, i) => (
              <li
                key={j}
                className="hero-pop rounded-full border border-pdip/50 bg-pdip/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] transition-transform hover:-translate-y-1"
                style={{ animationDelay: `${0.45 + i * 0.08}s` }}
              >
                {j}
              </li>
            ))}
          </ul>

          <p
            className="hero-rise mt-6 max-w-md text-base leading-relaxed text-bone/85"
            style={{ animationDelay: "0.6s" }}
          >
            Calon Kepala Desa Kronggen. Siap memimpin dengan prinsip
            transparansi dan gotong royong — dari warga, untuk warga.
          </p>

          <blockquote
            className="hero-rise mt-7 flex max-w-md gap-4"
            style={{ animationDelay: "0.72s" }}
          >
            <span aria-hidden className="hero-bar w-[3px] self-stretch rounded-full bg-pdip" />
            <p className="font-display text-2xl font-black uppercase leading-snug tracking-tight">
              Muda, semangat baru — untuk Desa Kronggen yang lebih maju.
            </p>
          </blockquote>

          <div
            className="hero-rise mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.85s" }}
          >
            <a
              href="#program"
              className="inline-flex items-center gap-3 rounded-full bg-pdip px-6 py-3 text-sm font-bold uppercase tracking-widest text-bone transition-transform hover:scale-[1.04] active:scale-95"
            >
              Lihat program
              <span aria-hidden className="hero-arrow">
                &darr;
              </span>
            </a>
            <a
              href="#dukung"
              className="inline-flex items-center gap-3 rounded-full border border-bone/30 px-6 py-3 text-sm font-bold uppercase tracking-widest transition hover:scale-[1.04] hover:border-pdip hover:text-pdip active:scale-95"
            >
              Dukung
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-none">
          <div
            aria-hidden
            className="absolute inset-x-6 top-8 bottom-0 rounded-t-full border border-bone/15"
          />
          <div
            aria-hidden
            className="absolute -left-2 top-10 h-32 w-24 bg-[radial-gradient(circle_at_1px_1px,rgba(242,240,234,0.25)_1px,transparent_0)] bg-[size:14px_14px] sm:h-40 sm:w-32"
          />
          <div className="hero-photo" style={{ animationDelay: "0.35s" }}>
            <div className="hero-float">
              <Image
                src="/images/arizubaidi.png"
                alt="Ari Zubaidi, calon kepala desa Kronggen"
                width={616}
                height={869}
                priority
                className="h-auto w-full [filter:drop-shadow(0_24px_48px_rgba(0,0,0,0.55))]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
