import NumberBaseConverter from "../components/NumberBaseConverter";
import { MdCode } from "react-icons/md";

const SITE_URL = "https://miguelacm.es/tools/number-base";
const EMBED_URL = "https://miguelacm.es/embed/number-base";

const features = [
  {
    icon: "🔢",
    title: "4 bases",
    desc: "Binario (base 2), Octal (base 8), Decimal (base 10) y Hexadecimal (base 16) en una sola herramienta.",
  },
  {
    icon: "⚡",
    title: "Bidireccional",
    desc: "Edita cualquier campo y todos los demás se actualizan al instante. No hay un campo de 'origen' fijo.",
  },
  {
    icon: "🔍",
    title: "Validación",
    desc: "Cada campo acepta solo los caracteres válidos para su base. Errores claros si el valor no es válido.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      {/* Hero */}
      <div className="mb-10 text-center">
        <h1 className="mb-3 text-3xl font-bold tracking-tight gradient-text">
          Conversor de Bases Numéricas Online
        </h1>
        <p className="text-text-muted">
          Convierte entre binario, octal, decimal y hexadecimal. Edita cualquier campo. Tiempo real.
        </p>
      </div>

      {/* Tool */}
      <div className="glass mb-10 rounded-2xl p-6">
        <NumberBaseConverter locale="es" />
      </div>

      {/* Features */}
      <section className="mb-10">
        <h2 className="mb-5 text-xl font-semibold text-text">Características</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass rounded-xl p-5"
            >
              <div className="mb-2 text-2xl">{f.icon}</div>
              <h3 className="mb-1 font-semibold text-text">{f.title}</h3>
              <p className="text-sm text-text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to use */}
      <section className="mb-10">
        <h2 className="mb-5 text-xl font-semibold text-text">Cómo usar</h2>
        <ol className="space-y-3 text-sm text-text-muted">
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">1</span>
            <p>Escribe o pega un número en cualquiera de los cuatro campos (decimal, binario, octal o hexadecimal).</p>
          </li>
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">2</span>
            <p>El conversor calculará automáticamente el valor equivalente en las otras tres bases en tiempo real.</p>
          </li>
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">3</span>
            <p>Usa el botón de copiar junto a cada campo para copiar el resultado al portapapeles con un clic.</p>
          </li>
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">4</span>
            <p>El panel de resumen muestra los cuatro valores juntos para una comparación rápida.</p>
          </li>
        </ol>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="mb-5 text-xl font-semibold text-text">Preguntas frecuentes</h2>
        <div className="space-y-5">
          <div>
            <h3 className="mb-1 font-medium text-text">¿Qué es una base numérica?</h3>
            <p className="text-sm text-text-muted">
              Una base numérica indica cuántos dígitos distintos se usan en el sistema de numeración. La base 10 (decimal) usa 0-9, la base 2 (binario) usa 0 y 1, la base 8 (octal) usa 0-7 y la base 16 (hexadecimal) usa 0-9 y A-F.
            </p>
          </div>
          <div>
            <h3 className="mb-1 font-medium text-text">¿Admite números grandes?</h3>
            <p className="text-sm text-text-muted">
              Sí. El conversor usa JavaScript BigInt internamente, por lo que puede manejar números enteros de cualquier tamaño, más allá del límite de Number.MAX_SAFE_INTEGER (2⁵³ − 1).
            </p>
          </div>
          <div>
            <h3 className="mb-1 font-medium text-text">¿Para qué sirve el hexadecimal?</h3>
            <p className="text-sm text-text-muted">
              El hexadecimal se usa ampliamente en programación: colores CSS (#FF5733), direcciones de memoria, valores de bytes y hashes. Es más compacto que el binario y fácil de convertir.
            </p>
          </div>
          <div>
            <h3 className="mb-1 font-medium text-text">¿Puedo convertir números negativos?</h3>
            <p className="text-sm text-text-muted">
              La herramienta trabaja con enteros sin signo no negativos, que es el caso más común en conversiones de bases. Para complemento a dos u otras representaciones, se requieren consideraciones adicionales.
            </p>
          </div>
          <div>
            <h3 className="mb-1 font-medium text-text">¿Los datos se envían a algún servidor?</h3>
            <p className="text-sm text-text-muted">
              No. Toda la conversión ocurre directamente en tu navegador. Ningún dato se transmite a ningún servidor. La herramienta funciona incluso sin conexión a internet una vez cargada.
            </p>
          </div>
        </div>
      </section>

      {/* Embed */}
      <section className="mb-10">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-text">
          <MdCode className="text-primary" />
          Embeber en tu web
        </h2>
        <p className="mb-4 text-sm text-text-muted">
          Copia este iframe y pégalo en tu HTML para incluir el conversor en tu web:
        </p>
        <pre className="overflow-x-auto rounded-xl border border-border/30 bg-surface/60 p-4 font-mono text-xs text-text-muted">
{`<iframe
  src="${EMBED_URL}"
  width="100%"
  height="600"
  style="border:none;border-radius:12px;"
  title="Number Base Converter — miguelacm.es"
  loading="lazy"
></iframe>`}
        </pre>
        <p className="mt-3 text-xs text-text-muted/60">
          Demo completa:{" "}
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            {SITE_URL}
          </a>
        </p>
      </section>
    </main>
  );
}
