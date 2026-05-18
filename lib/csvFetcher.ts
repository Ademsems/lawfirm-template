export interface FirmRow {
  slug: string;
  name: string;
  phone: string;
  address: string;
  email: string;
}

export const FALLBACK_NAME    = "Novák & Partners";
export const FALLBACK_PHONE   = "+421 2 5000 0000";
export const FALLBACK_ADDRESS = "Župné námestie 3, 811 03 Bratislava";
export const FALLBACK_EMAIL   = "info@novakpartners.sk";

function parseCSV(raw: string): Record<string, string>[] {
  const lines = raw.trim().split("\n").filter(Boolean);
  if (lines.length < 2) return [];

  const headers = lines[0]
    .split(",")
    .map((h) => h.replace(/^"|"$/g, "").trim().toLowerCase());

  return lines.slice(1).map((line) => {
    const values =
      line
        .match(/(".*?"|[^",]+)(?=,|$)|(?<=,|^)(?=,|$)/g)
        ?.map((v) => v.replace(/^"|"$/g, "").trim()) ?? [];

    return Object.fromEntries(
      headers.map((h, i) => [h, values[i] ?? ""])
    );
  });
}

export async function getFirmBySlug(
  csvUrl: string,
  slug: string
): Promise<FirmRow> {
  const fallback: FirmRow = {
    slug,
    name:    FALLBACK_NAME,
    phone:   FALLBACK_PHONE,
    address: FALLBACK_ADDRESS,
    email:   FALLBACK_EMAIL,
  };

  if (!csvUrl || csvUrl.includes("PLACEHOLDER")) {
    console.warn("[csvFetcher] No CSV URL configured — using fallback data.");
    return fallback;
  }

  try {
    const res = await fetch(csvUrl, { cache: "no-store" });

    if (!res.ok) {
      console.error(`[csvFetcher] HTTP ${res.status} fetching CSV.`);
      return fallback;
    }

    const raw  = await res.text();
    const rows = parseCSV(raw);

    if (rows.length === 0) {
      console.warn("[csvFetcher] CSV parsed 0 rows.");
      return fallback;
    }

    const match = rows.find(
      (r) => r["slug"]?.toLowerCase().trim() === slug.toLowerCase().trim()
    );

    if (!match) {
      console.warn(`[csvFetcher] Slug "${slug}" not found in CSV.`);
      return fallback;
    }

    return {
      slug:    match["slug"]?.trim()    || slug,
      name:    match["name"]?.trim()    || FALLBACK_NAME,
      phone:   match["phone"]?.trim()   || FALLBACK_PHONE,
      address: match["address"]?.trim() || FALLBACK_ADDRESS,
      email:   match["email"]?.trim()   || FALLBACK_EMAIL,
    };
  } catch (err) {
    console.error("[csvFetcher] Unexpected error:", err);
    return fallback;
  }
}
