export class UncertainDeliveryError extends Error {}

// Browser-side API usage follows Web3Forms' supported integration model.
export async function deliverInvestment(payload: Record<string, string>, send: typeof fetch = fetch) {
  let receipt: Response;
  try {
    receipt = await send("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(15_000)
    });
  } catch {
    throw new UncertainDeliveryError("Gönderim sonucu doğrulanamadı. Tekrar göndermeden önce lütfen bizimle iletişime geçin.");
  }
  let result: { success?: unknown };
  try { result = await receipt.json(); } catch {
    throw new UncertainDeliveryError("Gönderim sonucu doğrulanamadı. Tekrar göndermeden önce lütfen bizimle iletişime geçin.");
  }
  if (!receipt.ok || result?.success !== true) {
    throw new Error("Talebiniz iletilemedi. Lütfen daha sonra tekrar deneyin veya iletişim sayfamızdan bize ulaşın.");
  }
}
