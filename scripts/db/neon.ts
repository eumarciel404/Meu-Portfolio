import postgres from "postgres";

let { URLBASEPOSTGRE } = process.env;

const sql = postgres(URLBASEPOSTGRE!, {
    port: 5432,
    ssl: "require",
    prepare: false
});

export async function teste() {
    await sql`CREATE TABLE IF NOT EXISTS "embeds" (
        "id" text PRIMARY KEY,
        "og:type" text DEFAULT 'website',
        "og:title" text,
        "og:image" text,
        "og:url" text,
        "og:description" text
    )`;

    const result = await sql`SELECT * FROM embeds`;

    return result
}
