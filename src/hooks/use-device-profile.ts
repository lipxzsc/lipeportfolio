import { useEffect, useState } from "react";
import { getDeviceProfile } from "@/lib/device-profile";

type Connection = EventTarget & { saveData?: boolean; effectiveType?: string };

export function useDeviceProfile() {
  // Keep the server and first browser render identical and inexpensive.
  const [profile, setProfile] = useState({ device: "auto", effects: "minimal", active: true });
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: Connection }).connection;
    const update = () => setProfile({
      ...getDeviceProfile({
        width: window.innerWidth,
        reducedMotion: motion.matches,
        saveData: connection?.saveData ?? false,
        effectiveType: connection?.effectiveType,
        hardwareConcurrency: navigator.hardwareConcurrency,
      }),
      active: !document.hidden,
    });
    update();
    window.addEventListener("resize", update, { passive: true });
    motion.addEventListener("change", update);
    connection?.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      window.removeEventListener("resize", update);
      motion.removeEventListener("change", update);
      connection?.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);
  return profile;
}