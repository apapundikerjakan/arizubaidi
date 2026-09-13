const misi = [
  "Mewujudkan kualitas pelayanan dan administrasi pemerintahan desa yang transparan, akuntabel, serta responsif terhadap masyarakat.",
  "Mendorong pembangunan infrastruktur dan fasilitas umum desa yang merata dan berkelanjutan.",
  "Mengembangkan potensi ekonomi desa: pertanian, UMKM, BUMDes, dan sektor unggulan lainnya.",
  "Mendorong peran aktif pemuda dan ibu-ibu untuk kemajuan desa melalui pelatihan, kewirausahaan, dan kegiatan positif lainnya.",
  "Mengupayakan kualitas kesehatan, pendidikan, dan kesejahteraan masyarakat.",
  "Melestarikan kebudayaan dan lingkungan hidup, serta memperkuat kerukunan antarwarga dengan menyediakan wadah pertemuan rutin tokoh masyarakat dan tokoh agama.",
];

export default function Services() {
  return (
    <section id="program" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-pdip">
        Visi &amp; Misi
      </p>
      <div className="mb-12 flex items-end justify-between gap-6">
        <h2 className="font-display text-4xl font-black uppercase tracking-tight sm:text-6xl">
          Program<span className="text-pdip">.</span>
        </h2>
        <span className="shrink-0 text-xs font-bold uppercase tracking-widest text-bone/50">
          1 visi · 6 misi
        </span>
      </div>

      <figure id="visi" className="scroll-mt-24 rounded-3xl border border-bone/10 bg-bone/[0.03] p-6 sm:p-10">
        <blockquote className="font-display max-w-3xl text-xl font-bold leading-snug sm:text-2xl">
          “Terwujudnya Desa Kronggen yang maju, mandiri, sejahtera, dan
          berbudaya — dengan pelayanan yang baik serta berbasis potensi
          lokal.”
        </blockquote>
        <figcaption className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-bone/50">
          — Visi Ari Zubaidi
        </figcaption>
      </figure>

      <ol className="mt-8 grid gap-4 sm:grid-cols-2">
        {misi.map((m, i) => (
          <li
            key={i}
            className="flex gap-4 rounded-2xl border border-bone/10 p-5 transition hover:border-pdip/60 sm:p-6"
          >
            <span className="font-display shrink-0 text-2xl font-black text-pdip">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-sm leading-relaxed text-bone/80">{m}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
