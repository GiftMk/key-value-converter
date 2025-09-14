export const formats = ['json', 'yaml'] as const;

export type Format = (typeof formats)[number];
