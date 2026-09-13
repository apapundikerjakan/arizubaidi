import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ari Zubaidi — Calon Kepala Desa Kronggen",
  description:
    "Ari Zubaidi, calon kepala desa Kronggen. Transparan, gotong royong, untuk warga Kronggen.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="bg-ink text-bone antialiased">{children}</body>
    </html>
  );
}
