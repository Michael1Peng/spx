'use client';

import { useState } from 'react';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import { BUTTON_TEXT, URL_TYPES } from '../utils/constants';
import { copyToClipboard } from '../utils/clipboard';
import { createProxyUrl, getCurrentHost, getBaseUrl } from '../utils/url';

/**
 * Home component - Main page for creating proxy URLs
 * @returns React component
 */
export default function Home() {
  const [url, setUrl] = useState('');
  const [type, setType] = useState(URL_TYPES.AUTO);
  const [buttonText, setButtonText] = useState(BUTTON_TEXT.DEFAULT);

  /**
   * Generates a proxy URL and copies it to clipboard
   */
  const handleGenerateUrl = async () => {
    if (typeof window === 'undefined') return;
    
    const baseUrl = getBaseUrl();
    const link = createProxyUrl(url, type, baseUrl);
    await copyToClipboard(link);
    updateButtonText();
  };

  /**
   * Updates button text to show feedback and resets after delay
   */
  const updateButtonText = (): void => {
    setButtonText(BUTTON_TEXT.COPIED);
    setTimeout(() => setButtonText(BUTTON_TEXT.DEFAULT), 2500);
  };

  // Select options for URL type
  const typeOptions = [
    { value: URL_TYPES.AUTO, label: 'auto' },
    { value: URL_TYPES.MANUAL, label: 'manual' }
  ];

  return (
    <main className="w-full h-full flex justify-center items-center p-5 box-border flex-col">
      <article className="text-left border border-[#eaeaea] rounded-md">
        <section className="p-6">
          <h2 className="m-0 text-xl">Create a proxy scheme URL</h2>
          <p className="my-5">Provide a custom scheme url, select activation type, and click &quot;Copy&quot;.</p>

          <div className="inline-flex mr-2">
            <div className="bg-[#fafafa] p-2.5 text-[#888] text-sm border border-[#eaeaea] rounded-l-md border-r-0">
              <span>{getCurrentHost()}/{type}/</span>
            </div>
            <div>
              <Input
                value={url}
                onChange={e => setUrl(e.target.value.trim())}
                autoFocus={true}
              />
            </div>
          </div>

          <div className="inline-flex w-auto">
            <Select
              value={type}
              onChange={e => setType(e.target.value)}
              options={typeOptions}
            />
          </div>
        </section>
        <footer className="border-t border-[#eaeaea] bg-[#fafafa] p-6">
          <div className="inline-block text-sm text-[#555]">
            <span>Created url will be copied to your clipboard buffer.</span>
          </div>
          <div className="inline-block float-right">
            <Button onClick={handleGenerateUrl}>
              {buttonText}
            </Button>
          </div>
        </footer>
      </article>

      <Footer />
    </main>
  );
}
