'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import { redirectToExternalUrl } from '../../../utils/redirect';

/**
 * AutoPage component handles automatic redirection to external URLs
 * and attempts to close the window after redirection.
 */
function AutoContent() {
  const searchParams = useSearchParams();
  const url = searchParams.get('url');

  useEffect(() => {
    if (!url) return;
    
    // Redirect and get cleanup function
    const cleanup = redirectToExternalUrl(url);
    
    // Return cleanup function to clear timeout
    return cleanup;
  }, [url]);

  // Return empty div while redirecting
  return <div />;
}

export default function AutoPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AutoContent />
    </Suspense>
  );
}
