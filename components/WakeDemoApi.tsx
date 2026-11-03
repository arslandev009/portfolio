"use client";

import { useEffect } from "react";

// The live demos run on a free Render instance that sleeps after 15 minutes without traffic, and waking it takes up to a minute.
// One harmless request to its health check when this page opens usually has it awake by the time a visitor clicks "Try live demo".
// The response is never read (no-cors is enough) and a failure changes nothing.
const DEMO_API_HEALTH = "https://demo-api-kn51.onrender.com/healthz";

export default function WakeDemoApi() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      fetch(DEMO_API_HEALTH, { mode: "no-cors", cache: "no-store", credentials: "omit" }).catch(() => {});
    }, 1500);
    return () => window.clearTimeout(timer);
  }, []);
  return null;
}
