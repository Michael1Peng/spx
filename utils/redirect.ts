/**
 * Redirection timer reference
 */
let redirectionTimer: NodeJS.Timeout;

/**
 * Redirects user to the specified URL and attempts to close the window
 * @param url - The URL to redirect to
 * @returns Cleanup function to clear the timeout
 */
export function redirectToExternalUrl(url: string): () => void {
  console.log('[info] redirecting user to url:', url);
  window.location.href = url;
  
  // Add a small delay before attempting to close the window
  // This ensures the redirect has time to initiate
  redirectionTimer = setTimeout(() => {
    console.log('[info] closing window');
    attemptToCloseWindow();
  }, 500);
  
  // Return cleanup function
  return () => clearTimeout(redirectionTimer);
}

/**
 * Attempts to close the current window or make it appear closed
 * if browser security prevents actual closing
 */
function attemptToCloseWindow(): void {
  // Try to close the window
  self.close();
  
  // If window.close() doesn't work (common due to browser security restrictions),
  // make the page appear closed by clearing its content
  if (document.body) {
    document.body.innerHTML = '';
    document.title = 'Closed';
  }
} 
