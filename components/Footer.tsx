import Link from 'next/link';

/**
 * Footer component - Displays footer links at the bottom of the page
 * @returns React component
 */
const Footer = () => {
  // Link style classes for consistent styling
  const linkClasses = "text-[13px] text-[#b2b2b2] no-underline transition-colors duration-100 hover:text-[#ff0080]";
  
  return (
    <footer className="flex justify-center items-center py-[50px] pb-10 absolute bottom-0 left-0 right-0">
      <nav className="h-[18px] flex justify-center items-center">
        <Link 
          href="https://github.com/inlife/spx" 
          target="_blank"
          className={linkClasses}
        >
          Source
        </Link>
        <span className="block bg-[#b2b2b2] w-[1px] h-full mx-[10px]"></span>
        <Link 
          href="https://vercel.app" 
          target="_blank"
          className={linkClasses}
        >
          Hosted on Vercel
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
