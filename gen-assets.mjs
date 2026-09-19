import sharp from "sharp";
import QRCode from "qrcode";
import { writeFile } from "node:fs/promises";

const NAVY = "#0A1628";

async function main() {
  // Logo: crop the navbar logo (has transparent padding) and export at 2x for retina.
  const src = "public/oztoprak-energy-logo-navbar.png";
  const meta = await sharp(src).metadata();
  console.log("source logo", meta.width, meta.height);

  await sharp(src)
    .resize({ width: 640, fit: "inside", withoutEnlargement: false })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile("public/email/logo.png");

  const outMeta = await sharp("public/email/logo.png").metadata();
  console.log("logo.png", outMeta.width, outMeta.height);

  // QR code: navy modules on white, high error correction, generated at 2x (480px) for retina.
  await QRCode.toFile("public/email/qr.png", "https://www.oztoprakenerji.com", {
    type: "png",
    errorCorrectionLevel: "M",
    margin: 1,
    width: 480,
    color: {
      dark: NAVY,
      light: "#FFFFFFFF"
    }
  });
  const qrMeta = await sharp("public/email/qr.png").metadata();
  console.log("qr.png", qrMeta.width, qrMeta.height);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
