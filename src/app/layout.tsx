import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://miguelacm.es/tools/number-base";

export const metadata: Metadata = {
  title: {
    default: "Conversor de Bases Numéricas Online Gratis",
    template: "%s | MACM Tools",
  },
  description:
    "Convierte números entre binario, octal, decimal y hexadecimal en tiempo real. Todos los campos simultáneamente. Sin registro, gratis.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Conversor de Bases Numéricas Online Gratis",
    description:
      "Convierte números entre binario, octal, decimal y hexadecimal en tiempo real. Todos los campos simultáneamente. Sin registro, gratis.",
    url: SITE_URL,
    siteName: "MACM Tools",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversor de Bases Numéricas Online Gratis",
    description:
      "Convierte números entre binario, octal, decimal y hexadecimal en tiempo real. Todos los campos simultáneamente. Sin registro, gratis.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="author" href="https://miguelacm.es" />
      </head>
      <body>
        {children}
        <footer className="mt-12 border-t border-[#1e293b] py-6 text-center text-xs text-[#94a3b8]">
          <p>
            Creado por{" "}
            <a
              href="https://miguelacm.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00d4ff] hover:underline"
            >
              Miguel Ángel Colorado Marin (MACM)
            </a>{" "}
            ·{" "}
            <a
              href="https://github.com/m-a-c-m/NumberBaseConverter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00d4ff] hover:underline"
            >
              GitHub
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
