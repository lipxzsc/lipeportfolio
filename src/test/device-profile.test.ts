import { describe, expect, it } from "vitest";
import { getDeviceProfile } from "../lib/device-profile";

const base = { width: 1280, reducedMotion: false, saveData: false, hardwareConcurrency: 8 };

describe("adaptive portfolio effects", () => {
  it("uses light effects on phones and tablets, full effects on desktop", () => {
    expect(getDeviceProfile({ ...base, width: 414 })).toEqual({ device: "mobile", effects: "light" });
    expect(getDeviceProfile({ ...base, width: 768 })).toEqual({ device: "tablet", effects: "light" });
    expect(getDeviceProfile(base)).toEqual({ device: "desktop", effects: "full" });
  });
  it("disables continuous effects when reduced motion is requested", () => {
    expect(getDeviceProfile({ ...base, reducedMotion: true }).effects).toBe("minimal");
  });
  it("reduces effects with data saving, slow connections, or limited processors", () => {
    expect(getDeviceProfile({ ...base, saveData: true }).effects).toBe("minimal");
    expect(getDeviceProfile({ ...base, effectiveType: "3g" }).effects).toBe("minimal");
    expect(getDeviceProfile({ ...base, hardwareConcurrency: 2 }).effects).toBe("minimal");
  });
});