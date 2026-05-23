export {};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    oztoprakTrack?: (eventName: string, params?: Record<string, unknown>) => void;
  }
}
