import { writeFileSync } from "fs";

const CLOUD_NAME = "drey6ump8";
const API_KEY = "333972269333388";
const API_SECRET = "oBIrsNo83swzs-5ctn9bYfC358Y";

const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64");

async function fetchAll() {
  const paths = [];
  let nextCursor = null;

  do {
    const params = new URLSearchParams({ max_results: "500" });
    if (nextCursor) params.set("next_cursor", nextCursor);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image?${params}`,
      { headers: { Authorization: `Basic ${auth}` } }
    );
    const data = await res.json();

    for (const r of data.resources ?? []) {
      paths.push(`${r.version ? `v${r.version}/` : ""}${r.public_id}.${r.format}`);
    }

    nextCursor = data.next_cursor ?? null;
  } while (nextCursor);

  writeFileSync("src/data/photos.json", JSON.stringify(paths, null, 2));
  console.log(`Written ${paths.length} photos to src/data/photos.json`);
}

fetchAll();
