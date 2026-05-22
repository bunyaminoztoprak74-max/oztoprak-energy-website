import { MessageCircle } from "lucide-react";

export function WhatsAppButton({ phone, label }: { phone: string; label: string }) {
  return (
    <a
      href={`https://wa.me/${phone}`}
      aria-label={label}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-navy-950 shadow-2xl transition hover:scale-105"
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
