export function getTouchDistance(touch1, touch2) { return Math.hypot(touch1.clientX - touch2.clientX, touch1.clientY - touch2.clientY); }
export function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }
export function lerp(a, b, t) { return a + (b - a) * t; }
export function saturate(value) { return Math.max(0, Math.min(1, value)); }
export function smoothstep(edge0, edge1, x) { const t = saturate((x - edge0) / (edge1 - edge0)); return t * t * (3 - 2 * t); }
export function map(value, min1, max1, min2, max2) { return min2 + (value - min1) * (max2 - min2) / (max1 - min1); }