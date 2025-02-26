/**
 * Creates a proxy URL based on the input URL and selected type
 * @param inputUrl - The URL to proxy
 * @param urlType - The type of proxy (auto or manual)
 * @param baseUrl - The base URL of the application
 * @returns The generated proxy URL
 */
export function createProxyUrl(inputUrl: string, urlType: string, baseUrl: string): string {
  const link = `${baseUrl}${urlType}?url=${encodeURIComponent(inputUrl)}`;
  console.log('[info] created url', link);
  return link;
}

/**
 * Gets the current host name
 * @param defaultHost - The default host name to use if window is not available
 * @returns The current host name or default
 */
export function getCurrentHost(defaultHost: string = 'spx.vercel.app'): string {
  return typeof window !== 'undefined' ? window.location.host : defaultHost;
}

/**
 * Gets the current base URL
 * @param defaultHost - The default host name to use if window is not available
 * @returns The current base URL or default
 */
export function getBaseUrl(defaultHost: string = 'spx.vercel.app'): string {
  if (typeof window === 'undefined') {
    return `https://${defaultHost}/`;
  }
  return `${window.location.protocol}//${window.location.host}/`;
} 
