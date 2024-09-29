// Import Next.js Link
import Link from 'next/link';

import MobileNav from './MobileNav';  // Corrected path
import  Nav  from './Nav';  // Corrected path
// Header component
const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white'>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href='/' className='text-4xl font-semibold'>
            Sarvesh <span className='text-accent'>.</span> 
        </Link>
        {/* Desktpo Nav & hire me button*/}
        <div className='hidden xl:flex items-center gap-8'>
        <Nav />
            <Link href="/contact">
            <button>Hire me</button>
            </Link>
        </div>

        {/* Mobile Nav */}
        <div className='xl:hidden'>
          <MobileNav />
        </div>

        
      </div>
    </header>
  );
};

// Export Header
export default Header;
