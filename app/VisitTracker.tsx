"use client";

import { useEffect } from "react";
import UAParser from "ua-parser-js";

const SESSION_KEY = "visit_session_id";

function getSessionId() {
  if (typeof window === "undefined") return null;
  let id = sessionStorage.getItem(SESSION_KEY);
  if (!id) {
    id =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    sessionStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

export default function VisitTracker() {
  useEffect(() => {
    const sessionId = getSessionId();
    if (!sessionId) return;

    const nav = navigator as Navigator & {
      connection?: {
        effectiveType?: string;
        downlink?: number;
        rtt?: number;
        saveData?: boolean;
      };
    };

    const ua = navigator.userAgent || "";
    const deviceType = /ipad|tablet/i.test(ua)
      ? "tablet"
      : /mobi|android|iphone|ipod/i.test(ua)
      ? "mobile"
      : "desktop";
    const parsed = new UAParser(ua).getResult();
    const deviceModel = parsed.device?.model || "unknown";
    const deviceNameMatch =
      ua.match(/\(([^)]+)\)/)?.[1]?.split(";")?.[0]?.trim() || "unknown";

    const payload = {
      sessionId,
      path: window.location.pathname,
      title: document.title,
      referrer: document.referrer || null,
      userAgent: navigator.userAgent,
      language: navigator.language,
      languages: navigator.languages,
      platform: navigator.platform,
      deviceType,
      deviceName: deviceNameMatch,
      deviceModel,
      deviceMemory: "deviceMemory" in navigator ? navigator.deviceMemory : null,
      hardwareConcurrency: navigator.hardwareConcurrency,
      connection:
        "connection" in navigator
          ? {
              effectiveType: nav.connection?.effectiveType || null,
              downlink: nav.connection?.downlink || null,
              rtt: nav.connection?.rtt || null,
              saveData: nav.connection?.saveData || null,
            }
          : null,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      screen: {
        width: window.screen.width,
        height: window.screen.height,
        pixelRatio: window.devicePixelRatio,
      },
      preferences: {
        colorScheme: window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
        reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)")
          .matches,
      },
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };

    fetch("/api/visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {
      // Best-effort; avoid crashing the page for analytics failures.
    });
  }, []);

  return null;
}
