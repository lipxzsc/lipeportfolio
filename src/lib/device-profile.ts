export type DeviceSignals = {
  width: number;
  reducedMotion: boolean;
  saveData: boolean;
  effectiveType?: string;
  hardwareConcurrency?: number;
};

export function getDeviceProfile(signals: DeviceSignals) {
  const device = signals.width < 640 ? "mobile" : signals.width < 1024 ? "tablet" : "desktop";
  const limited = signals.saveData || ["slow-2g", "2g", "3g"].includes(signals.effectiveType ?? "") ||
    (signals.hardwareConcurrency !== undefined && signals.hardwareConcurrency <= 2);
  return { device, effects: signals.reducedMotion || limited ? "minimal" : device === "desktop" ? "full" : "light" };
}