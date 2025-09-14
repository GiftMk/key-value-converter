export const formats = ['json', 'yaml', 'xml'] as const;

export type Format = (typeof formats)[number];
