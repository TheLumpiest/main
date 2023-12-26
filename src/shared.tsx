// Shared types used in many places
export const positions = ["1", "2", "3"] as const;
export type Position = typeof positions[number];
