import Image from "next/image";

export default function Candidate() {
  return (
    <section id="kandidat" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
          <Image
            src="/images/candidate.jpg"
            alt="Ari Zubaidi, calon kepala desa Kronggen"
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover object-[70%_20%]"
          />
        </div>
        <div>
          <h2 className="font-display text-4xl font-black uppercase tracking-tight sm:text-5xl">
            Kenalkan,<br />
            Ari Zubaidi<span className="text-pdip">.</span>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-bone/75 sm:text-base">
            Lahir dan besar di desa ini. Petani vanilla selama 20 tahun, ketua
            kelompok tani 12 tahun, pengurus koperasi 8 tahun. Pendidikan
            formal sederhana, tapi pengalaman memimpin gotong royong tidak
            pernah absen satu kali pun.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
            <div className="border-l-2 border-pdip pl-4">
              <dt className="text-bone/50">Usia</dt>
              <dd className="font-display text-xl font-black">43 th</dd>
            </div>
            <div className="border-l-2 border-pdip pl-4">
              <dt className="text-bone/50">Pengalaman</dt>
              <dd className="font-display text-xl font-black">20 th</dd>
            </div>
            <div className="border-l-2 border-pdip pl-4">
              <dt className="text-bone/50">Organisasi</dt>
              <dd className="font-display text-xl font-black">3</dd>
            </div>
            <div className="border-l-2 border-pdip pl-4">
              <dt className="text-bone/50">Rekam jejak</dt>
              <dd className="font-display text-xl font-black">Bersih</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
