import { createDecipheriv } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { isAbsolute, join } from "node:path";

// Operator-only local utility. Never import into a route or client bundle.
const [reference, destination] = process.argv.slice(2);
const directory = process.env.INVESTMENT_LEAD_STORAGE_DIR;
const key = process.env.INVESTMENT_LEAD_ENCRYPTION_KEY;
if (!reference || !/^[a-f0-9]{32}$/.test(reference) || !destination || !isAbsolute(destination) || !directory || !key || !/^[a-f0-9]{64}$/i.test(key)) {
  console.error("Kullanım: node scripts/investment-export.mjs <referans> <özel-mutlak-çıktı-yolu>; depolama ve anahtar ortam değişkenleri gereklidir.");
  process.exit(1);
}
try {
  const envelope = JSON.parse(await readFile(join(directory, `${reference}.json`), "utf8"));
  if (envelope.reference !== reference || envelope.version !== 1) throw new Error("invalid");
  const decipher = createDecipheriv("aes-256-gcm", Buffer.from(key, "hex"), Buffer.from(envelope.iv, "base64"));
  decipher.setAAD(Buffer.from(reference));
  decipher.setAuthTag(Buffer.from(envelope.tag, "base64"));
  const plaintext = Buffer.concat([decipher.update(Buffer.from(envelope.ciphertext, "base64")), decipher.final()]);
  await writeFile(destination, plaintext, { flag: "wx", mode: 0o600 });
  console.log("Başvuru özel çıktı dosyasına aktarıldı. Dosyayı erişim kontrollü saklayın.");
} catch {
  console.error("Aktarım tamamlanamadı. Referans, anahtar, dosya izinleri ve çıktı dosyasının henüz mevcut olmadığını kontrol edin.");
  process.exitCode = 1;
}
