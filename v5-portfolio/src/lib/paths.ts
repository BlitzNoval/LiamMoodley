const basePath = process.env.NODE_ENV === 'production' ? '/LiamMoodley' : '';

export function asset(path: string): string {
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
}
