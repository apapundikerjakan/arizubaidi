import Image from "next/image";

const works = [
  {
    img: "/images/work-1.jpg",
    alt: "Petani menanam padi di sawah",
    title: "Kelompok Tani Harapan",
    tag: "Pertanian · 12 tahun",
    desc: "Ketua kelompok tani 45 anggota, dari bibit sampai pemasaran.",
  },
  {
    img: "/images/work-2.jpg",
    alt: "Petani bekerja di sawah Jatiluwih",
    title: "Koperasi Desa",
    tag: "Ekonomi · 8 tahun",
    desc: "Pengurus koperasi simpan pinjam untuk modal usaha warga.",
  },
  {
    img: "/images/work-3.jpg",
    alt: "Petani di sawah terasering",
    title: "Rehabilitasi Irigasi",
    tag: "Infrastruktur · gotong royong",
    desc: "Menggalang warga memperbaiki 3 km saluran irigasi dusun.",
  },
  {
    img: "/images/candidate.jpg",
    alt: "Ari Zubaidi bersama warga",
    title: "Bersama Warga",
    tag: "Kepemimpinan · sehari-hari",
    desc: "Turun ke sawah, dengar keluhan warga, cari solusi bersama.",
  },
];

export default function Work() {
  return (
    <section id="karya" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="mb-10 flex items-end justify-between gap-6">
        <h2 className="font-display text-4xl font-black uppercase tracking-tight sm:text-6xl">
          Karya<br />Nyata
        </h2>
        <span className="shrink-0 text-xs font-bold uppercase tracking-widest text-bone/50">
          Bukan janji (0{works.length})
        </span>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {works.map((p, i) => (
          <div
            key={p.title}
            className={`group relative overflow-hidden rounded-2xl ${i % 2 === 1 ? "sm:mt-12" : ""}`}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={p.img}
                alt={p.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
            <div className="absolute bottom-0 w-full p-5">
              <p className="text-[11px] font-bold uppercase tracking-widest text-pdip">{p.tag}</p>
              <h3 className="font-display text-2xl font-black uppercase tracking-tight text-bone sm:text-3xl">
                {p.title}
              </h3>
              <p className="mt-1 max-w-xs text-sm text-bone/75">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
