'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function AutoPage() {
  const searchParams = useSearchParams();
  const url = searchParams.get('url');

  useEffect(() => {
    if (url) {
      console.log('[info] redirecting user to url:', url);
      window.location.href = url;
    }
  }, [url]);

  // Return empty div while redirecting
  return <div />;
}
