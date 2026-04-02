function toDate(input: unknown): Date | null {
  if (input instanceof Date) return input;
  if (typeof input === "string") {
    const d = new Date(input);
    return Number.isNaN(d.getTime()) ? null : d;
  }
  return null;
}

export function toMillis(input: unknown): number {
  const d = toDate(input);
  return d ? d.getTime() : 0;
}

export function formatIsoDate(input: unknown): string {
  const d = toDate(input);
  if (!d) return "";

  const year = d.getUTCFullYear();
  const month = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function formatLongDate(input: unknown, locale = "en-US"): string {
  const d = toDate(input);
  if (!d) return "";

  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(d);
}
