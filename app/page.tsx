'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import Footer from '../components/Footer';

export default function Home() {
  const [url, setUrl] = useState("");
  const [type, setType] = useState("1");
  const [buttonText, setButtonText] = useState("Copy");

  const generateUrl = () => {
    if (typeof window !== 'undefined') {
      const link = `${window.location.href}${type}?url=${encodeURIComponent(url)}`;
      console.log('[info] created url', link);
      navigator.clipboard.writeText(link);
      setButtonText("Copied!");
      setTimeout(() => setButtonText("Copy"), 2500);
    }
  };

  const config = {
    name: 'spx - Create a proxy for custom scheme URL',
    description: 'spx - scheme proxy. A simple tool that allows naive proxying of urls with custom schemes. Useful for cases when you don\'t have an ability to use original url, because of some limitations (ex. urls on Notion)',
    keywords: 'scheme, proxy, url, notion, link, share, page, web, short',
    site: 'https://spx.vercel.app',
  };

  return (
    <main className="w-full h-full flex justify-center items-center p-5 box-border flex-col">
      <article className="text-left border border-[#eaeaea] rounded-md">
        <section className="p-6">
          <h2 className="m-0 text-xl">Create a proxy scheme URL</h2>
          <p className="my-5">Provide a custom scheme url, select activation type, and click "Copy".</p>

          <div className="inline-flex mr-2">
            <div className="bg-[#fafafa] p-2.5 text-[#888] text-sm border border-[#eaeaea] rounded-l-md border-r-0">
              <span>{typeof window !== 'undefined' ? window.location.host : 'spx.vercel.app'}/{type}/</span>
            </div>
            <div>
              <input
                className="text-sm p-[5px] outline-none leading-[26px] h-[42px] border border-[#eaeaea] rounded-r-md focus:border-black"
                autoCapitalize="off"
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
                maxLength={256}
                onChange={e => setUrl(e.target.value.trim())}
                value={url}
                autoFocus
                type="text"
              />
            </div>
          </div>

          <div className="inline-flex w-auto">
            <select 
              className="text-sm outline-none leading-[22px] border border-[#eaeaea] rounded-md h-[42px] relative top-0.5 p-2.5 appearance-none"
              onChange={e => setType(e.target.value)} 
              value={type}
            >
              <option value="1">auto</option>
              <option value="0">manual</option>
            </select>
          </div>
        </section>
        <footer className="border-t border-[#eaeaea] bg-[#fafafa] p-6">
          <div className="inline-block text-sm text-[#555]">
            <span>Created url will be copied to your clipboard buffer.</span>
          </div>
          <div className="inline-block float-right">
            <button 
              className="min-w-20 h-8 text-sm py-1.5 px-3 rounded-md transition-all duration-200 bg-black border border-black text-white relative -top-1.5 cursor-pointer hover:text-black hover:bg-transparent"
              onClick={generateUrl}
            >
              {buttonText}
            </button>
          </div>
        </footer>
      </article>

      <Footer />
    </main>
  );
}
