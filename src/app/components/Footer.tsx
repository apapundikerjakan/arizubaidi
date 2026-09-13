export default function Footer() {
  return (
    <footer id="dukung" className="relative overflow-hidden px-5 pt-20 pb-8 sm:px-8 sm:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-40%] left-1/2 h-[60vh] w-[90vw] -translate-x-1/2 rounded-full bg-pdip/10 blur-[120px]"
      />
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-[11vw] leading-[0.95] font-black uppercase tracking-tight sm:text-[8vw]">
          Dukung <span className="text-pdip">kami,</span><br />
          pilih no<span className="text-pdip">. 1</span>
        </h2>

        <div className="mt-16 grid gap-8 text-sm text-bone/60 sm:grid-cols-3">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-bone">Tim Kampanye</p>
            <p>Sekretariat Tim Kampanye — Desa Kronggen</p>
            <p>Sekretariat buka 08.00&ndash;17.00</p>
          </div>
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-bone">Kontak</p>
            <p>
              <a className="transition hover:text-pdip" href="tel:+6281234567890">0812-3456-7890</a>
            </p>
            <p>
               <a className="transition hover:text-pdip" href="mailto:dukung@arizubaidi.id">dukung@arizubaidi.id</a>
            </p>
          </div>
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-bone">Media Sosial</p>
            <p className="flex gap-4">
              <a className="transition hover:text-pdip" href="#">Instagram</a>
              <a className="transition hover:text-pdip" href="#">Facebook</a>
              <a className="transition hover:text-pdip" href="#">TikTok</a>
            </p>
          </div>
        </div>

        <p className="mt-16 border-t border-bone/10 pt-6 text-xs text-bone/40">
          &copy; 2026 Tim Kampanye Ari Zubaidi. Pilkades damai, jujur, adil.
        </p>
      </div>
    </footer>
  );
}
