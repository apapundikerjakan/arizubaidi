const items = [
  "PELAYANAN TRANSPARAN",
  "INFRASTRUKTUR MERATA",
  "EKONOMI DESA MAJU",
  "PEMUDA BERKARYA",
  "SEHAT CERDAS SEJAHTERA",
  "BUDAYA LESTARI",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-bone/10 bg-pdip py-3 text-ink">
      <div className="flex w-max animate-marquee gap-8 pr-8">
        {row.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-display text-sm font-black uppercase tracking-widest whitespace-nowrap sm:text-base"
          >
            {t} <span aria-hidden>&#10022;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
