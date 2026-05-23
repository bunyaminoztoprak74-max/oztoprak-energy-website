export const analyticsEvents = {
  consultationRequest: "consultation_request_click",
  assessmentBooking: "assessment_booking_click",
  leadMagnetDownload: "lead_magnet_download_click",
  contactFormSubmit: "contact_form_submit",
  blogSearch: "blog_search",
  servicePageCta: "service_page_cta_click"
} as const;

export type AnalyticsEventName = (typeof analyticsEvents)[keyof typeof analyticsEvents];

export function trackEventScript() {
  return `
    window.oztoprakTrack = function(eventName, params) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: eventName, ...(params || {}) });
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, params || {});
      }
    };
  `;
}
