// Generates the static image assets used by the email signature system
// (public/email/logo.png and public/email/qr.png). Email clients cannot
// execute JS/canvas, so both must exist as pre-rendered, hosted PNG files
// referenced by <img> tags in the signature HTML.
//
// Run with: npm run signature:assets
import sharp from "sharp";
import QRCode from "qrcode";

const BRAND_NAVY = "#0A1628";
const SIGNATURE_URL = "https://www.oztoprakenerji.com";

async function main() {
  // Logo: export the full-color horizontal wordmark at 2x resolution so it
  // stays crisp on retina displays when constrained to ~320px wide in email.
  await sharp("public/oztoprak-energy-logo-navbar.png")
    .resize({ width: 640, fit: "inside", withoutEnlargement: false })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile("public/email/logo.png");

  // QR code: brand-navy modules on a solid white background, generated at
  // 2x (480px) for a crisp ~120-140px on-screen render in mail clients.
  await QRCode.toFile("public/email/qr.png", SIGNATURE_URL, {
    type: "png",
    errorCorrectionLevel: "M",
    margin: 1,
    width: 480,
    color: {
      dark: BRAND_NAVY,
      light: "#FFFFFFFF"
    }
  });

  console.log("Signature assets generated: public/email/logo.png, public/email/qr.png");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
