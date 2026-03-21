"use client";

import { useState, useCallback } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

interface Props {
  locale?: string;
}

interface Bases {
  dec: string;
  bin: string;
  oct: string;
  hex: string;
}

type BaseKey = keyof Bases;

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        if (!text) return;
        navigator.clipboard.writeText(text).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        });
      }}
      disabled={!text}
      className="flex items-center gap-1 rounded-lg px-2 py-0.5 text-xs text-text-muted/50 transition-all hover:bg-primary/10 hover:text-primary disabled:opacity-20"
    >
      {copied ? <FiCheck className="text-green-400" /> : <FiCopy />}
    </button>
  );
}

const BASES: {
  key: BaseKey;
  label: string;
  prefix: string;
  radix: number;
  chars: RegExp;
  placeholder: string;
}[] = [
  {
    key: "dec",
    label: "Decimal (base 10)",
    prefix: "",
    radix: 10,
    chars: /^[0-9]*$/,
    placeholder: "0-9",
  },
  {
    key: "bin",
    label: "Binario / Binary (base 2)",
    prefix: "0b",
    radix: 2,
    chars: /^[01]*$/,
    placeholder: "0 y 1",
  },
  {
    key: "oct",
    label: "Octal (base 8)",
    prefix: "0o",
    radix: 8,
    chars: /^[0-7]*$/,
    placeholder: "0-7",
  },
  {
    key: "hex",
    label: "Hexadecimal (base 16)",
    prefix: "0x",
    radix: 16,
    chars: /^[0-9a-fA-F]*$/,
    placeholder: "0-9, A-F",
  },
];

const empty: Bases = { dec: "", bin: "", oct: "", hex: "" };

function fromBase(value: string, radix: number): bigint | null {
  if (!value.trim()) return null;
  try {
    const n = BigInt("0" + (radix === 10 ? "" : radix === 2 ? "b" : radix === 8 ? "o" : "x") + value.toLowerCase());
    return n;
  } catch {
    return null;
  }
}

function convert(value: string, fromRadix: number): Bases | null {
  if (!value.trim()) return empty;
  const n = fromBase(value, fromRadix);
  if (n === null) return null;
  return {
    dec: n.toString(10),
    bin: n.toString(2),
    oct: n.toString(8),
    hex: n.toString(16).toUpperCase(),
  };
}

export default function NumberBaseConverter({ locale = "es" }: Props) {
  const isEs = locale === "es";
  const [values, setValues] = useState<Bases>(empty);
  const [error, setError] = useState<string | null>(null);

  const handleChange = useCallback(
    (key: BaseKey, raw: string) => {
      const base = BASES.find((b) => b.key === key)!;
      if (!base.chars.test(raw)) return;
      if (!raw) {
        setValues(empty);
        setError(null);
        return;
      }
      const result = convert(raw, base.radix);
      if (result === null) {
        setError(isEs ? "Valor inválido para esta base" : "Invalid value for this base");
        setValues({ ...empty, [key]: raw });
        return;
      }
      setError(null);
      setValues({ ...result, [key]: raw.toUpperCase() === raw ? result[key] : result[key] });
      // keep the typed field as-is (preserve case for hex)
      setValues({ ...result, [key]: raw });
    },
    [isEs]
  );

  return (
    <div className="space-y-4">
      {BASES.map((base) => (
        <div key={base.key}>
          <label className="mb-1.5 flex items-center justify-between text-xs font-medium text-text-muted">
            <span>
              <span className="font-mono text-primary">{base.prefix || "  "}</span>
              {" "}
              {base.label}
            </span>
            <CopyBtn text={values[base.key]} />
          </label>
          <input
            type="text"
            value={values[base.key]}
            onChange={(e) => handleChange(base.key, e.target.value)}
            placeholder={base.placeholder}
            className="w-full rounded-xl border border-border/30 bg-surface/60 px-4 py-3 font-mono text-sm text-text placeholder:text-text-muted/30 outline-none transition-colors focus:border-primary/50 focus:bg-surface/80"
          />
        </div>
      ))}

      {error && (
        <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-sm text-red-400">
          {error}
        </p>
      )}

      {values.dec && !error && (
        <div className="rounded-xl border border-border/20 bg-surface/40 p-4">
          <p className="mb-2 text-xs font-medium text-text-muted/60">
            {isEs ? "Resumen" : "Summary"}
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 font-mono text-xs text-text-muted">
            <span>DEC → {values.dec}</span>
            <span>BIN → {values.bin}</span>
            <span>OCT → {values.oct}</span>
            <span>HEX → {values.hex}</span>
          </div>
        </div>
      )}
    </div>
  );
}
