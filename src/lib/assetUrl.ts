/** Public asset path with Vite base (e.g. /scottish-dream/photos/... on GitHub Pages). */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL;
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${clean}`;
}

/** Local path under public/photos/, or pass through absolute URLs. */
export function photoSrc(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return assetUrl(path);
}
