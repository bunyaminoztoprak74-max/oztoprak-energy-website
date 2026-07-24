import type { ReactNode } from "react";

export type IconName = "phone" | "mail" | "globe" | "linkedin" | "whatsapp" | "pin" | "qrcode";

const PATHS: Record<IconName, ReactNode> = {
  phone: (
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1v3.5c0 .6-.4 1-1 1C10.5 21.1 2.9 13.5 2.9 3.7c0-.6.4-1 1-1H7.4c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.2 1.1z" />
  ),
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="M3 6.5l9 6.2 9-6.2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </>
  ),
  linkedin: (
    <>
      <rect x="2.5" y="2.5" width="19" height="19" rx="3" />
      <circle cx="7.3" cy="7.6" r="1.6" fill="#fff" />
      <rect x="6.2" y="10.2" width="2.3" height="8.3" fill="#fff" />
      <path d="M11.4 10.2h2.2v1.2c.6-.9 1.6-1.4 2.9-1.4 2.2 0 3.6 1.4 3.6 4.1v4.4h-2.3v-4c0-1.3-.5-2.1-1.7-2.1-1 0-1.6.7-1.9 1.3-.1.3-.1.6-.1 1v3.8h-2.3z" fill="#fff" />
    </>
  ),
  whatsapp: (
    <path d="M12 2.8a9.2 9.2 0 0 0-7.9 13.9L2.9 21l4.4-1.2A9.2 9.2 0 1 0 12 2.8zm5.4 13.1c-.2.6-1.3 1.2-1.8 1.3-.5.1-1.1.1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.2c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.2.1.3 0 .5-.1.2-.1.3-.3.5-.1.2-.3.4-.4.5-.2.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.2 1.4 2.5 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.5.7 1.8.8.3.1.5.2.5.3.1.2.1.6-.1 1.2z" />
  ),
  pin: (
    <path d="M12 2.5c-3.6 0-6.5 2.9-6.5 6.5 0 4.9 6.5 12.5 6.5 12.5s6.5-7.6 6.5-12.5c0-3.6-2.9-6.5-6.5-6.5zm0 8.9a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8z" />
  ),
  qrcode: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14" y="3" width="7" height="7" rx="1" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3" y="14" width="7" height="7" rx="1" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14.5" y="14.5" width="2.5" height="2.5" />
      <rect x="18.5" y="14.5" width="2.5" height="2.5" />
      <rect x="14.5" y="18.5" width="2.5" height="2.5" />
      <rect x="18.5" y="18.5" width="2.5" height="2.5" />
    </>
  )
};

export function Icon({ name, className = "h-4 w-4" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}
