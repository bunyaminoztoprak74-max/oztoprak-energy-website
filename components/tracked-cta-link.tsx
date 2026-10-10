"use client";

import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Minimal link that reports a click through the existing window.oztoprakTrack helper.
 * Only the page path, service type and CTA label are sent (no PII). Rendering stays
 * server-friendly: pages keep their markup and only wrap the CTA link itself.
 */
export function TrackedCtaLink({
  href,
  className,
  children,
  serviceType,
  ctaSource,
  event = "consultation_request_click"
}: {
  href: string;
  className?: string;
  children: ReactNode;
  serviceType: string;
  ctaSource: string;
  event?: string;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        window.oztoprakTrack?.(event, {
          lead_source_page: window.location.pathname,
          service_type: serviceType,
          cta_source: ctaSource
        });
      }}
    >
      {children}
    </Link>
  );
}
