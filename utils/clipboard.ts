/**
 * Copies the given text to clipboard
 * @param text - The text to copy
 * @returns Promise that resolves when the text is copied
 */
export async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    console.log('[info] copied to clipboard:', text);
  } catch (error) {
    console.error('[error] failed to copy to clipboard:', error);
  }
} 
