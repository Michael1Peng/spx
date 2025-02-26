'use client';

import { useParams } from 'next/navigation';
import Footer from '../../../components/Footer';

/**
 * ManualPage component displays a clickable link for the user to manually navigate to
 * @returns React component
 */
export default function ManualPage() {
  const params = useParams();
  const url = params.manual as string;

  // Return empty div if no URL is provided
  if (!url) {
    return <div />;
  }

  console.log('[info] creating button for url:', url);

  return (
    <main className="w-full h-full flex justify-center items-center p-5 box-border flex-col">
      <section className="text-center max-w-full">
        <h1 className="font-bold text-[34px] text-center mb-[25px]">
          Click: <a 
            href={url} 
            className="relative top-2 inline-block overflow-hidden whitespace-nowrap text-ellipsis max-w-[450px]"
          >
            {url}
          </a>
        </h1>
      </section>

      <Footer />
    </main>
  );
}
